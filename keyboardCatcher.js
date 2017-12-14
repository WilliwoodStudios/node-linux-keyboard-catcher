var fs = require('fs')
var util = require('util')
var ioctl = require('ioctl')
var EventEmitter = require('events').EventEmitter

var constants = require('bindings')('linux-keyboard-catcher-platform-constants')
var keyMaps = require('./keyMap')
var inputEvent = require('./input-event-codes')
var inputEventCodes = inputEvent.inputEventCodes
var keyCodeToName = inputEvent.keyCodeToName

const fsOpen = util.promisify(fs.open)
const fsRead = util.promisify(fs.read)
const fsClose = util.promisify(fs.close)

function readInt (buffer, index, length) {
  var toReturn = 0
  for (var i = 0; i < length; ++i) {
    toReturn |= buffer[index + i] << i * 8
  }
  return toReturn
}

var modifiers = new function () {
  var modifierState = {}

  modifierState[inputEventCodes.KEY_LEFTSHIFT] = false
  modifierState[inputEventCodes.KEY_RIGHTSHIFT] = false
  modifierState[inputEventCodes.KEY_LEFTALT] = false
  modifierState[inputEventCodes.KEY_RIGHTALT] = false
  modifierState[inputEventCodes.KEY_LEFTCTRL] = false
  modifierState[inputEventCodes.KEY_RIGHTCTRL] = false
  modifierState[inputEventCodes.KEY_LEFTMETA] = false
  modifierState[inputEventCodes.KEY_RIGHTMETA] = false

  this.caps = false

  Object.defineProperty(this, 'shift', {
    get: () => modifierState[inputEventCodes.KEY_LEFTSHIFT] || modifierState[inputEventCodes.KEY_RIGHTSHIFT]
  })
  Object.defineProperty(this, 'alt', {
    get: () => modifierState[inputEventCodes.KEY_LEFTALT] || modifierState[inputEventCodes.KEY_RIGHTALT]
  })
  Object.defineProperty(this, 'control', {
    get: () => modifierState[inputEventCodes.KEY_LEFTCTRL] || modifierState[inputEventCodes.KEY_RIGHTCTRL]
  })
  Object.defineProperty(this, 'meta', {
    get: () => modifierState[inputEventCodes.KEY_LEFTMETA] || modifierState[inputEventCodes.KEY_RIGHTMETA]
  })

  this.handleModifier = function (type, code, value) {
    if (type === inputEventCodes.EV_KEY) {
      if (code in modifierState) {
        modifierState[code] = value !== 0
      }
    } else if (type === inputEventCodes.EV_LED) {
      if (code === inputEventCodes.LED_CAPSL) {
        this.caps = value !== 0
      }
    }
  }

  this.toString = function () {
    return 'shift:' + this.shift + ' alt:' + this.alt + ' control:' + this.control + ' meta:' + this.meta + ' caps:' + this.caps
  }

  this.clone = function () {
    return {
      shift: this.shift,
      alt: this.alt,
      control: this.control,
      meta: this.meta,
      caps: this.caps
    }
  }
}()

function LinuxKeyboardCatcher () {
  var fileHandle = -1

  var startReading = async function () {
    const blockSize = constants.sizeofInputEvent
    const length = 2000 - 2000 % blockSize

    var buffer = new Uint8Array(length)
    var myFileHandle = fileHandle

    if (myFileHandle === -1) {
      this.emit('error', new Error('Cannot start reading - file is closed'))
    }

    try {
      while (myFileHandle === fileHandle) {
        var bytesRead = (await fsRead(myFileHandle, buffer, 0, length, null)).bytesRead

        for (var offset = 0; offset + blockSize < bytesRead; offset += blockSize) {
          var type = readInt(buffer, offset + blockSize - 8, 2)
          var code = readInt(buffer, offset + blockSize - 6, 2)
          var value = readInt(buffer, offset + blockSize - 4, 4)
          modifiers.handleModifier(type, code, value)
          if (type === inputEventCodes.EV_KEY) {
            var keyEvent = modifiers.clone()
            var keyMap = keyEvent.shift ? keyMaps.shiftKeyMap : keyMaps.baseKeyMap
            var mapped = keyMap[code]
            if (mapped !== undefined) {
              if (keyEvent.caps) {
                mapped = mapped.toUpperCase()
              }
            }
            keyEvent.mapped = mapped
            keyEvent.type = type
            keyEvent.code = code
            keyEvent.value = value
            keyEvent.scanCode = keyCodeToName[code]
            this.emit('event', keyEvent)
          }
        }
      }
    } catch (e) {
      this.emit('error', e)
      return false
    }
  }.bind(this)

  this.open = async function (name, exclusive) {
    try {
      if (fileHandle !== -1) {
        throw new Error('Already processing file.')
      }
      fileHandle = await fsOpen(name, 'r')
      if (exclusive === true) {
        ioctl(fileHandle, constants.EVIOCGRAB, 1)
      }
      this.emit('opened')
      setTimeout(await startReading, 0)
    } catch (e) {
      this.emit('error', e)
      throw e
    }
  }

  this.close = async function () {
    if (fileHandle !== -1) {
      var temp = fileHandle
      fileHandle = -1
      try {
        await fsClose(temp)
        this.emit('closed')
      } catch (closeFailed) {
        console.log('--failed', closeFailed)
      }
    }
  }
}

util.inherits(LinuxKeyboardCatcher, EventEmitter)

exports.LinuxKeyboardCatcher = LinuxKeyboardCatcher
