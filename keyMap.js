/**
 * This file contains keyboard maps which map an inputEventCode to a string.
 * eg: KEY_EQUAL => '=', KEY_A => 'a'.
 *
 * The keyboard is a US keyboard, with nearly no numpad support.
 *
 * There are two variations in this file: baseKeyMap, shiftKeyMap.
 * eg: KEY_1 => '1' in baseKeyMap,
 *     KEY_1 => '!' in shiftKeyMap.
 *
 * It is not expected that all inputEventCodes are in these maps;
 * KEY_PAGEDOWN does not map to a nice string whereas KEY_A does.
 */
(function buildKeyMaps () {
  var inputEventCodes = require('./input-event-codes').inputEventCodes
  var baseKeyMap = {}
  baseKeyMap[inputEventCodes.KEY_ESC] = '\u001b'
  baseKeyMap[inputEventCodes.KEY_GRAVE] = '`'
  baseKeyMap[inputEventCodes.KEY_MINUS] = '-'
  baseKeyMap[inputEventCodes.KEY_EQUAL] = '='
  baseKeyMap[inputEventCodes.KEY_LEFTBRACE] = '['
  baseKeyMap[inputEventCodes.KEY_RIGHTBRACE] = ']'
  baseKeyMap[inputEventCodes.KEY_BACKSLASH] = '\\'
  baseKeyMap[inputEventCodes.KEY_SEMICOLON] = ';'
  baseKeyMap[inputEventCodes.KEY_APOSTROPHE] = "'"
  baseKeyMap[inputEventCodes.KEY_COMMA] = ','
  baseKeyMap[inputEventCodes.KEY_DOT] = '.'
  baseKeyMap[inputEventCodes.KEY_SLASH] = '/'
  baseKeyMap[inputEventCodes.KEY_SPACE] = ' '
  baseKeyMap[inputEventCodes.KEY_BACKSPACE] = '\u0008'
  baseKeyMap[inputEventCodes.KEY_ENTER] = '\u000d'
  baseKeyMap[inputEventCodes.KEY_KPENTER] = '\u000d'

  for (var code in inputEventCodes) {
    // Automatically convert codes that look like KEY_n
    if (code.length === 5 && code.startsWith('KEY_')) {
      baseKeyMap[inputEventCodes[code]] = code.substring(4).toLowerCase()
    }
  }

  var shiftKeyMap = Object.assign({}, baseKeyMap)
  shiftKeyMap[inputEventCodes.KEY_1] = '!'
  shiftKeyMap[inputEventCodes.KEY_2] = '@'
  shiftKeyMap[inputEventCodes.KEY_3] = '#'
  shiftKeyMap[inputEventCodes.KEY_4] = '$'
  shiftKeyMap[inputEventCodes.KEY_5] = '%'
  shiftKeyMap[inputEventCodes.KEY_6] = '^'
  shiftKeyMap[inputEventCodes.KEY_7] = '&'
  shiftKeyMap[inputEventCodes.KEY_8] = '*'
  shiftKeyMap[inputEventCodes.KEY_9] = '('
  shiftKeyMap[inputEventCodes.KEY_0] = ')'
  shiftKeyMap[inputEventCodes.KEY_GRAVE] = '~'
  shiftKeyMap[inputEventCodes.KEY_MINUS] = '_'
  shiftKeyMap[inputEventCodes.KEY_EQUAL] = '+'
  shiftKeyMap[inputEventCodes.KEY_LEFTBRACE] = '{'
  shiftKeyMap[inputEventCodes.KEY_RIGHTBRACE] = '}'
  shiftKeyMap[inputEventCodes.KEY_BACKSLASH] = '|'
  shiftKeyMap[inputEventCodes.KEY_SEMICOLON] = ':'
  shiftKeyMap[inputEventCodes.KEY_APOSTROPHE] = '"'
  shiftKeyMap[inputEventCodes.KEY_COMMA] = '<'
  shiftKeyMap[inputEventCodes.KEY_DOT] = '>'
  shiftKeyMap[inputEventCodes.KEY_SLASH] = '?'

  // Capitialise mappings that support toUpperCase.
  for (var key in shiftKeyMap) {
    shiftKeyMap[key] = shiftKeyMap[key].toUpperCase()
  }

  exports.baseKeyMap = baseKeyMap
  exports.shiftKeyMap = shiftKeyMap
})()
