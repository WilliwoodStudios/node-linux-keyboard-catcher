var keyboardCatcher = require('../')

const keyboardEventFile = '/dev/input/event0' // Change to use the correct file
                                              // for your use case.

const exclusive = false // change to true to prevent normal OS reads. Be REALLY
                        // careful with this. It can make your GUI not get
                        // keyboard events.

const logEachEvent = false // change to true to see the details of each event.

var currentLine = ''

var catcher = new keyboardCatcher.LinuxKeyboardCatcher()
catcher.on('opened', () => console.log('Opened (event)'))
catcher.on('closed', () => console.log('Closed (event)'))
catcher.on('error', (message) => console.log('Error (event)', message))
catcher.on('event', (keyEvent) => {
  if (keyEvent.value > 0) {
    if (keyEvent.alt === false && keyEvent.meta === false && keyEvent.control === false) {
      if (keyEvent.mapped) {
        currentLine += keyEvent.mapped
      }
    }
  }

  if (logEachEvent) {
    console.log(keyEvent)
  }
  console.log(currentLine)
  if (currentLine.endsWith('\r')) {
    currentLine = ''
  }
})

catcher.open(keyboardEventFile, exclusive)
  .then(() => console.log('Input stream opened.'))
  .catch((e) => console.log('Exception!', e))
