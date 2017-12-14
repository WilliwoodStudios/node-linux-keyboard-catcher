/**
 * This file is converted from Linux's input-event-codes.h
 *
 * It exports two objects:
 *    inputEventCodes - an object mapping names to integr values.
 *    keyCodeToName - an object mapping the same integer values back to names.
 *
 * inputEventCodes contains all events that were in the converted conversion
 * of input-event-codes.h; but keyCodeToName only reverse maps the properties
 * starting with 'KEY_'.
 */
// ====================== conversion below ======================
/*
 * Input event codes
 *
 *    *** IMPORTANT ***
 * This file is not only included from C-code but also from devicetree source
 * files. As such this file MUST only contain comments and defines.
 *
 * Copyright (c) 1999-2002 Vojtech Pavlik
 * Copyright (c) 2015 Hans de Goede <hdegoede@redhat.com>
 *
 * This program is free software you can redistribute it and/or modify it
 * under the terms of the GNU General Public License version 2 as published by
 * the Free Software Foundation.
 */
// #ifndef _UAPI_INPUT_EVENT_CODES_H
// #define _UAPI_INPUT_EVENT_CODES_H

/*
 * Device properties and quirks
 */

var inputEventCodes = exports.inputEventCodes = new function () {
  this.INPUT_PROP_POINTER = 0x00 /* needs a pointer */
  this.INPUT_PROP_DIRECT = 0x01 /* direct input devices */
  this.INPUT_PROP_BUTTONPAD = 0x02 /* has button(s) under pad */
  this.INPUT_PROP_SEMI_MT = 0x03 /* touch rectangle only */
  this.INPUT_PROP_TOPBUTTONPAD = 0x04 /* softbuttons at top of pad */
  this.INPUT_PROP_POINTING_STICK = 0x05 /* is a pointing stick */
  this.INPUT_PROP_ACCELEROMETER = 0x06 /* has accelerometer */

  this.INPUT_PROP_MAX = 0x1f
  this.INPUT_PROP_CNT = (this.INPUT_PROP_MAX + 1)

  /*
   * Event types
   */

  this.EV_SYN = 0x00
  this.EV_KEY = 0x01
  this.EV_REL = 0x02
  this.EV_ABS = 0x03
  this.EV_MSC = 0x04
  this.EV_SW = 0x05
  this.EV_LED = 0x11
  this.EV_SND = 0x12
  this.EV_REP = 0x14
  this.EV_FF = 0x15
  this.EV_PWR = 0x16
  this.EV_FF_STATUS = 0x17
  this.EV_MAX = 0x1f
  this.EV_CNT = (this.EV_MAX + 1)

  /*
   * Synchronization events.
   */

  this.SYN_REPORT = 0
  this.SYN_CONFIG = 1
  this.SYN_MT_REPORT = 2
  this.SYN_DROPPED = 3
  this.SYN_MAX = 0xf
  this.SYN_CNT = (this.SYN_MAX + 1)

  /*
   * Keys and buttons
   *
   * Most of the keys/buttons are modeled after USB HUT 1.12
   * (see http://www.usb.org/developers/hidpage).
   * Abbreviations in the comments:
   * AC - Application Control
   * AL - Application Launch Button
   * SC - System Control
   */

  this.KEY_RESERVED = 0
  this.KEY_ESC = 1
  this.KEY_1 = 2
  this.KEY_2 = 3
  this.KEY_3 = 4
  this.KEY_4 = 5
  this.KEY_5 = 6
  this.KEY_6 = 7
  this.KEY_7 = 8
  this.KEY_8 = 9
  this.KEY_9 = 10
  this.KEY_0 = 11
  this.KEY_MINUS = 12
  this.KEY_EQUAL = 13
  this.KEY_BACKSPACE = 14
  this.KEY_TAB = 15
  this.KEY_Q = 16
  this.KEY_W = 17
  this.KEY_E = 18
  this.KEY_R = 19
  this.KEY_T = 20
  this.KEY_Y = 21
  this.KEY_U = 22
  this.KEY_I = 23
  this.KEY_O = 24
  this.KEY_P = 25
  this.KEY_LEFTBRACE = 26
  this.KEY_RIGHTBRACE = 27
  this.KEY_ENTER = 28
  this.KEY_LEFTCTRL = 29
  this.KEY_A = 30
  this.KEY_S = 31
  this.KEY_D = 32
  this.KEY_F = 33
  this.KEY_G = 34
  this.KEY_H = 35
  this.KEY_J = 36
  this.KEY_K = 37
  this.KEY_L = 38
  this.KEY_SEMICOLON = 39
  this.KEY_APOSTROPHE = 40
  this.KEY_GRAVE = 41
  this.KEY_LEFTSHIFT = 42
  this.KEY_BACKSLASH = 43
  this.KEY_Z = 44
  this.KEY_X = 45
  this.KEY_C = 46
  this.KEY_V = 47
  this.KEY_B = 48
  this.KEY_N = 49
  this.KEY_M = 50
  this.KEY_COMMA = 51
  this.KEY_DOT = 52
  this.KEY_SLASH = 53
  this.KEY_RIGHTSHIFT = 54
  this.KEY_KPASTERISK = 55
  this.KEY_LEFTALT = 56
  this.KEY_SPACE = 57
  this.KEY_CAPSLOCK = 58
  this.KEY_F1 = 59
  this.KEY_F2 = 60
  this.KEY_F3 = 61
  this.KEY_F4 = 62
  this.KEY_F5 = 63
  this.KEY_F6 = 64
  this.KEY_F7 = 65
  this.KEY_F8 = 66
  this.KEY_F9 = 67
  this.KEY_F10 = 68
  this.KEY_NUMLOCK = 69
  this.KEY_SCROLLLOCK = 70
  this.KEY_KP7 = 71
  this.KEY_KP8 = 72
  this.KEY_KP9 = 73
  this.KEY_KPMINUS = 74
  this.KEY_KP4 = 75
  this.KEY_KP5 = 76
  this.KEY_KP6 = 77
  this.KEY_KPPLUS = 78
  this.KEY_KP1 = 79
  this.KEY_KP2 = 80
  this.KEY_KP3 = 81
  this.KEY_KP0 = 82
  this.KEY_KPDOT = 83

  this.KEY_ZENKAKUHANKAKU = 85
  this.KEY_102ND = 86
  this.KEY_F11 = 87
  this.KEY_F12 = 88
  this.KEY_RO = 89
  this.KEY_KATAKANA = 90
  this.KEY_HIRAGANA = 91
  this.KEY_HENKAN = 92
  this.KEY_KATAKANAHIRAGANA = 93
  this.KEY_MUHENKAN = 94
  this.KEY_KPJPCOMMA = 95
  this.KEY_KPENTER = 96
  this.KEY_RIGHTCTRL = 97
  this.KEY_KPSLASH = 98
  this.KEY_SYSRQ = 99
  this.KEY_RIGHTALT = 100
  this.KEY_LINEFEED = 101
  this.KEY_HOME = 102
  this.KEY_UP = 103
  this.KEY_PAGEUP = 104
  this.KEY_LEFT = 105
  this.KEY_RIGHT = 106
  this.KEY_END = 107
  this.KEY_DOWN = 108
  this.KEY_PAGEDOWN = 109
  this.KEY_INSERT = 110
  this.KEY_DELETE = 111
  this.KEY_MACRO = 112
  this.KEY_MUTE = 113
  this.KEY_VOLUMEDOWN = 114
  this.KEY_VOLUMEUP = 115
  this.KEY_POWER = 116 /* SC System Power Down */
  this.KEY_KPEQUAL = 117
  this.KEY_KPPLUSMINUS = 118
  this.KEY_PAUSE = 119
  this.KEY_SCALE = 120 /* AL Compiz Scale (Expose) */

  this.KEY_KPCOMMA = 121
  this.KEY_HANGEUL = 122
  this.KEY_HANGUEL = this.KEY_HANGEUL
  this.KEY_HANJA = 123
  this.KEY_YEN = 124
  this.KEY_LEFTMETA = 125
  this.KEY_RIGHTMETA = 126
  this.KEY_COMPOSE = 127

  this.KEY_STOP = 128 /* AC Stop */
  this.KEY_AGAIN = 129
  this.KEY_PROPS = 130 /* AC Properties */
  this.KEY_UNDO = 131 /* AC Undo */
  this.KEY_FRONT = 132
  this.KEY_COPY = 133 /* AC Copy */
  this.KEY_OPEN = 134 /* AC Open */
  this.KEY_PASTE = 135 /* AC Paste */
  this.KEY_FIND = 136 /* AC Search */
  this.KEY_CUT = 137 /* AC Cut */
  this.KEY_HELP = 138 /* AL Integrated Help Center */
  this.KEY_MENU = 139 /* Menu (show menu) */
  this.KEY_CALC = 140 /* AL Calculator */
  this.KEY_SETUP = 141
  this.KEY_SLEEP = 142 /* SC System Sleep */
  this.KEY_WAKEUP = 143 /* System Wake Up */
  this.KEY_FILE = 144 /* AL Local Machine Browser */
  this.KEY_SENDFILE = 145
  this.KEY_DELETEFILE = 146
  this.KEY_XFER = 147
  this.KEY_PROG1 = 148
  this.KEY_PROG2 = 149
  this.KEY_WWW = 150 /* AL Internet Browser */
  this.KEY_MSDOS = 151
  this.KEY_COFFEE = 152 /* AL Terminal Lock/Screensaver */
  this.KEY_SCREENLOCK = this.KEY_COFFEE
  this.KEY_ROTATE_DISPLAY = 153 /* Display orientation for e.g. tablets */
  this.KEY_DIRECTION = this.KEY_ROTATE_DISPLAY
  this.KEY_CYCLEWINDOWS = 154
  this.KEY_MAIL = 155
  this.KEY_BOOKMARKS = 156 /* AC Bookmarks */
  this.KEY_COMPUTER = 157
  this.KEY_BACK = 158 /* AC Back */
  this.KEY_FORWARD = 159 /* AC Forward */
  this.KEY_CLOSECD = 160
  this.KEY_EJECTCD = 161
  this.KEY_EJECTCLOSECD = 162
  this.KEY_NEXTSONG = 163
  this.KEY_PLAYPAUSE = 164
  this.KEY_PREVIOUSSONG = 165
  this.KEY_STOPCD = 166
  this.KEY_RECORD = 167
  this.KEY_REWIND = 168
  this.KEY_PHONE = 169 /* Media Select Telephone */
  this.KEY_ISO = 170
  this.KEY_CONFIG = 171 /* AL Consumer Control Configuration */
  this.KEY_HOMEPAGE = 172 /* AC Home */
  this.KEY_REFRESH = 173 /* AC Refresh */
  this.KEY_EXIT = 174 /* AC Exit */
  this.KEY_MOVE = 175
  this.KEY_EDIT = 176
  this.KEY_SCROLLUP = 177
  this.KEY_SCROLLDOWN = 178
  this.KEY_KPLEFTPAREN = 179
  this.KEY_KPRIGHTPAREN = 180
  this.KEY_NEW = 181 /* AC New */
  this.KEY_REDO = 182 /* AC Redo/Repeat */

  this.KEY_F13 = 183
  this.KEY_F14 = 184
  this.KEY_F15 = 185
  this.KEY_F16 = 186
  this.KEY_F17 = 187
  this.KEY_F18 = 188
  this.KEY_F19 = 189
  this.KEY_F20 = 190
  this.KEY_F21 = 191
  this.KEY_F22 = 192
  this.KEY_F23 = 193
  this.KEY_F24 = 194

  this.KEY_PLAYCD = 200
  this.KEY_PAUSECD = 201
  this.KEY_PROG3 = 202
  this.KEY_PROG4 = 203
  this.KEY_DASHBOARD = 204 /* AL Dashboard */
  this.KEY_SUSPEND = 205
  this.KEY_CLOSE = 206 /* AC Close */
  this.KEY_PLAY = 207
  this.KEY_FASTFORWARD = 208
  this.KEY_BASSBOOST = 209
  this.KEY_PRINT = 210 /* AC Print */
  this.KEY_HP = 211
  this.KEY_CAMERA = 212
  this.KEY_SOUND = 213
  this.KEY_QUESTION = 214
  this.KEY_EMAIL = 215
  this.KEY_CHAT = 216
  this.KEY_SEARCH = 217
  this.KEY_CONNECT = 218
  this.KEY_FINANCE = 219 /* AL Checkbook/Finance */
  this.KEY_SPORT = 220
  this.KEY_SHOP = 221
  this.KEY_ALTERASE = 222
  this.KEY_CANCEL = 223 /* AC Cancel */
  this.KEY_BRIGHTNESSDOWN = 224
  this.KEY_BRIGHTNESSUP = 225
  this.KEY_MEDIA = 226

  this.KEY_SWITCHVIDEOMODE = 227
  /* Cycle between available video
             outputs (Monitor/LCD/TV-out/etc) */
  this.KEY_KBDILLUMTOGGLE = 228
  this.KEY_KBDILLUMDOWN = 229
  this.KEY_KBDILLUMUP = 230

  this.KEY_SEND = 231 /* AC Send */
  this.KEY_REPLY = 232 /* AC Reply */
  this.KEY_FORWARDMAIL = 233 /* AC Forward Msg */
  this.KEY_SAVE = 234 /* AC Save */
  this.KEY_DOCUMENTS = 235

  this.KEY_BATTERY = 236

  this.KEY_BLUETOOTH = 237
  this.KEY_WLAN = 238
  this.KEY_UWB = 239

  this.KEY_UNKNOWN = 240

  this.KEY_VIDEO_NEXT = 241 /* drive next video source */
  this.KEY_VIDEO_PREV = 242 /* drive previous video source */
  this.KEY_BRIGHTNESS_CYCLE = 243 /* brightness up, after max is min */
  this.KEY_BRIGHTNESS_AUTO = 244
  /* Set Auto Brightness: manual
            brightness control is off,
            rely on ambient */
  this.KEY_BRIGHTNESS_ZERO = this.KEY_BRIGHTNESS_AUTO
  this.KEY_DISPLAY_OFF = 245 /* display device to off state */

  this.KEY_WWAN = 246 /* Wireless WAN (LTE, UMTS, GSM, etc.) */
  this.KEY_WIMAX = this.KEY_WWAN
  this.KEY_RFKILL = 247 /* Key that controls all radios */

  this.KEY_MICMUTE = 248 /* Mute / unmute the microphone */

  /* Code 255 is reserved for special needs of AT keyboard driver */

  this.BTN_MISC = 0x100
  this.BTN_0 = 0x100
  this.BTN_1 = 0x101
  this.BTN_2 = 0x102
  this.BTN_3 = 0x103
  this.BTN_4 = 0x104
  this.BTN_5 = 0x105
  this.BTN_6 = 0x106
  this.BTN_7 = 0x107
  this.BTN_8 = 0x108
  this.BTN_9 = 0x109

  this.BTN_MOUSE = 0x110
  this.BTN_LEFT = 0x110
  this.BTN_RIGHT = 0x111
  this.BTN_MIDDLE = 0x112
  this.BTN_SIDE = 0x113
  this.BTN_EXTRA = 0x114
  this.BTN_FORWARD = 0x115
  this.BTN_BACK = 0x116
  this.BTN_TASK = 0x117

  this.BTN_JOYSTICK = 0x120
  this.BTN_TRIGGER = 0x120
  this.BTN_THUMB = 0x121
  this.BTN_THUMB2 = 0x122
  this.BTN_TOP = 0x123
  this.BTN_TOP2 = 0x124
  this.BTN_PINKIE = 0x125
  this.BTN_BASE = 0x126
  this.BTN_BASE2 = 0x127
  this.BTN_BASE3 = 0x128
  this.BTN_BASE4 = 0x129
  this.BTN_BASE5 = 0x12a
  this.BTN_BASE6 = 0x12b
  this.BTN_DEAD = 0x12f

  this.BTN_GAMEPAD = 0x130
  this.BTN_SOUTH = 0x130
  this.BTN_A = this.BTN_SOUTH
  this.BTN_EAST = 0x131
  this.BTN_B = this.BTN_EAST
  this.BTN_C = 0x132
  this.BTN_NORTH = 0x133
  this.BTN_X = this.BTN_NORTH
  this.BTN_WEST = 0x134
  this.BTN_Y = this.BTN_WEST
  this.BTN_Z = 0x135
  this.BTN_TL = 0x136
  this.BTN_TR = 0x137
  this.BTN_TL2 = 0x138
  this.BTN_TR2 = 0x139
  this.BTN_SELECT = 0x13a
  this.BTN_START = 0x13b
  this.BTN_MODE = 0x13c
  this.BTN_THUMBL = 0x13d
  this.BTN_THUMBR = 0x13e

  this.BTN_DIGI = 0x140
  this.BTN_TOOL_PEN = 0x140
  this.BTN_TOOL_RUBBER = 0x141
  this.BTN_TOOL_BRUSH = 0x142
  this.BTN_TOOL_PENCIL = 0x143
  this.BTN_TOOL_AIRBRUSH = 0x144
  this.BTN_TOOL_FINGER = 0x145
  this.BTN_TOOL_MOUSE = 0x146
  this.BTN_TOOL_LENS = 0x147
  this.BTN_TOOL_QUINTTAP = 0x148 /* Five fingers on trackpad */
  this.BTN_TOUCH = 0x14a
  this.BTN_STYLUS = 0x14b
  this.BTN_STYLUS2 = 0x14c
  this.BTN_TOOL_DOUBLETAP = 0x14d
  this.BTN_TOOL_TRIPLETAP = 0x14e
  this.BTN_TOOL_QUADTAP = 0x14f /* Four fingers on trackpad */

  this.BTN_WHEEL = 0x150
  this.BTN_GEAR_DOWN = 0x150
  this.BTN_GEAR_UP = 0x151

  this.KEY_OK = 0x160
  this.KEY_SELECT = 0x161
  this.KEY_GOTO = 0x162
  this.KEY_CLEAR = 0x163
  this.KEY_POWER2 = 0x164
  this.KEY_OPTION = 0x165
  this.KEY_INFO = 0x166 /* AL OEM Features/Tips/Tutorial */
  this.KEY_TIME = 0x167
  this.KEY_VENDOR = 0x168
  this.KEY_ARCHIVE = 0x169
  this.KEY_PROGRAM = 0x16a /* Media Select Program Guide */
  this.KEY_CHANNEL = 0x16b
  this.KEY_FAVORITES = 0x16c
  this.KEY_EPG = 0x16d
  this.KEY_PVR = 0x16e /* Media Select Home */
  this.KEY_MHP = 0x16f
  this.KEY_LANGUAGE = 0x170
  this.KEY_TITLE = 0x171
  this.KEY_SUBTITLE = 0x172
  this.KEY_ANGLE = 0x173
  this.KEY_ZOOM = 0x174
  this.KEY_MODE = 0x175
  this.KEY_KEYBOARD = 0x176
  this.KEY_SCREEN = 0x177
  this.KEY_PC = 0x178 /* Media Select Computer */
  this.KEY_TV = 0x179 /* Media Select TV */
  this.KEY_TV2 = 0x17a /* Media Select Cable */
  this.KEY_VCR = 0x17b /* Media Select VCR */
  this.KEY_VCR2 = 0x17c /* VCR Plus */
  this.KEY_SAT = 0x17d /* Media Select Satellite */
  this.KEY_SAT2 = 0x17e
  this.KEY_CD = 0x17f /* Media Select CD */
  this.KEY_TAPE = 0x180 /* Media Select Tape */
  this.KEY_RADIO = 0x181
  this.KEY_TUNER = 0x182 /* Media Select Tuner */
  this.KEY_PLAYER = 0x183
  this.KEY_TEXT = 0x184
  this.KEY_DVD = 0x185 /* Media Select DVD */
  this.KEY_AUX = 0x186
  this.KEY_MP3 = 0x187
  this.KEY_AUDIO = 0x188 /* AL Audio Browser */
  this.KEY_VIDEO = 0x189 /* AL Movie Browser */
  this.KEY_DIRECTORY = 0x18a
  this.KEY_LIST = 0x18b
  this.KEY_MEMO = 0x18c /* Media Select Messages */
  this.KEY_CALENDAR = 0x18d
  this.KEY_RED = 0x18e
  this.KEY_GREEN = 0x18f
  this.KEY_YELLOW = 0x190
  this.KEY_BLUE = 0x191
  this.KEY_CHANNELUP = 0x192 /* Channel Increment */
  this.KEY_CHANNELDOWN = 0x193 /* Channel Decrement */
  this.KEY_FIRST = 0x194
  this.KEY_LAST = 0x195 /* Recall Last */
  this.KEY_AB = 0x196
  this.KEY_NEXT = 0x197
  this.KEY_RESTART = 0x198
  this.KEY_SLOW = 0x199
  this.KEY_SHUFFLE = 0x19a
  this.KEY_BREAK = 0x19b
  this.KEY_PREVIOUS = 0x19c
  this.KEY_DIGITS = 0x19d
  this.KEY_TEEN = 0x19e
  this.KEY_TWEN = 0x19f
  this.KEY_VIDEOPHONE = 0x1a0 /* Media Select Video Phone */
  this.KEY_GAMES = 0x1a1 /* Media Select Games */
  this.KEY_ZOOMIN = 0x1a2 /* AC Zoom In */
  this.KEY_ZOOMOUT = 0x1a3 /* AC Zoom Out */
  this.KEY_ZOOMRESET = 0x1a4 /* AC Zoom */
  this.KEY_WORDPROCESSOR = 0x1a5 /* AL Word Processor */
  this.KEY_EDITOR = 0x1a6 /* AL Text Editor */
  this.KEY_SPREADSHEET = 0x1a7 /* AL Spreadsheet */
  this.KEY_GRAPHICSEDITOR = 0x1a8 /* AL Graphics Editor */
  this.KEY_PRESENTATION = 0x1a9 /* AL Presentation App */
  this.KEY_DATABASE = 0x1aa /* AL Database App */
  this.KEY_NEWS = 0x1ab /* AL Newsreader */
  this.KEY_VOICEMAIL = 0x1ac /* AL Voicemail */
  this.KEY_ADDRESSBOOK = 0x1ad /* AL Contacts/Address Book */
  this.KEY_MESSENGER = 0x1ae /* AL Instant Messaging */
  this.KEY_DISPLAYTOGGLE = 0x1af /* Turn display (LCD) on and off */
  this.KEY_BRIGHTNESS_TOGGLE = this.KEY_DISPLAYTOGGLE
  this.KEY_SPELLCHECK = 0x1b0 /* AL Spell Check */
  this.KEY_LOGOFF = 0x1b1 /* AL Logoff */

  this.KEY_DOLLAR = 0x1b2
  this.KEY_EURO = 0x1b3

  this.KEY_FRAMEBACK = 0x1b4 /* Consumer - transport controls */
  this.KEY_FRAMEFORWARD = 0x1b5
  this.KEY_CONTEXT_MENU = 0x1b6 /* GenDesc - system context menu */
  this.KEY_MEDIA_REPEAT = 0x1b7 /* Consumer - transport control */
  this.KEY_10CHANNELSUP = 0x1b8 /* 10 channels up (10+) */
  this.KEY_10CHANNELSDOWN = 0x1b9 /* 10 channels down (10-) */
  this.KEY_IMAGES = 0x1ba /* AL Image Browser */

  this.KEY_DEL_EOL = 0x1c0
  this.KEY_DEL_EOS = 0x1c1
  this.KEY_INS_LINE = 0x1c2
  this.KEY_DEL_LINE = 0x1c3

  this.KEY_FN = 0x1d0
  this.KEY_FN_ESC = 0x1d1
  this.KEY_FN_F1 = 0x1d2
  this.KEY_FN_F2 = 0x1d3
  this.KEY_FN_F3 = 0x1d4
  this.KEY_FN_F4 = 0x1d5
  this.KEY_FN_F5 = 0x1d6
  this.KEY_FN_F6 = 0x1d7
  this.KEY_FN_F7 = 0x1d8
  this.KEY_FN_F8 = 0x1d9
  this.KEY_FN_F9 = 0x1da
  this.KEY_FN_F10 = 0x1db
  this.KEY_FN_F11 = 0x1dc
  this.KEY_FN_F12 = 0x1dd
  this.KEY_FN_1 = 0x1de
  this.KEY_FN_2 = 0x1df
  this.KEY_FN_D = 0x1e0
  this.KEY_FN_E = 0x1e1
  this.KEY_FN_F = 0x1e2
  this.KEY_FN_S = 0x1e3
  this.KEY_FN_B = 0x1e4

  this.KEY_BRL_DOT1 = 0x1f1
  this.KEY_BRL_DOT2 = 0x1f2
  this.KEY_BRL_DOT3 = 0x1f3
  this.KEY_BRL_DOT4 = 0x1f4
  this.KEY_BRL_DOT5 = 0x1f5
  this.KEY_BRL_DOT6 = 0x1f6
  this.KEY_BRL_DOT7 = 0x1f7
  this.KEY_BRL_DOT8 = 0x1f8
  this.KEY_BRL_DOT9 = 0x1f9
  this.KEY_BRL_DOT10 = 0x1fa

  this.KEY_NUMERIC_0 = 0x200 /* used by phones, remote controls, */
  this.KEY_NUMERIC_1 = 0x201 /* and other keypads */
  this.KEY_NUMERIC_2 = 0x202
  this.KEY_NUMERIC_3 = 0x203
  this.KEY_NUMERIC_4 = 0x204
  this.KEY_NUMERIC_5 = 0x205
  this.KEY_NUMERIC_6 = 0x206
  this.KEY_NUMERIC_7 = 0x207
  this.KEY_NUMERIC_8 = 0x208
  this.KEY_NUMERIC_9 = 0x209
  this.KEY_NUMERIC_STAR = 0x20a
  this.KEY_NUMERIC_POUND = 0x20b
  this.KEY_NUMERIC_A = 0x20c /* Phone key A - HUT Telephony 0xb9 */
  this.KEY_NUMERIC_B = 0x20d
  this.KEY_NUMERIC_C = 0x20e
  this.KEY_NUMERIC_D = 0x20f

  this.KEY_CAMERA_FOCUS = 0x210
  this.KEY_WPS_BUTTON = 0x211 /* WiFi Protected Setup key */

  this.KEY_TOUCHPAD_TOGGLE = 0x212 /* Request switch touchpad on or off */
  this.KEY_TOUCHPAD_ON = 0x213
  this.KEY_TOUCHPAD_OFF = 0x214

  this.KEY_CAMERA_ZOOMIN = 0x215
  this.KEY_CAMERA_ZOOMOUT = 0x216
  this.KEY_CAMERA_UP = 0x217
  this.KEY_CAMERA_DOWN = 0x218
  this.KEY_CAMERA_LEFT = 0x219
  this.KEY_CAMERA_RIGHT = 0x21a

  this.KEY_ATTENDANT_ON = 0x21b
  this.KEY_ATTENDANT_OFF = 0x21c
  this.KEY_ATTENDANT_TOGGLE = 0x21d /* Attendant call on or off */
  this.KEY_LIGHTS_TOGGLE = 0x21e /* Reading light on or off */

  this.BTN_DPAD_UP = 0x220
  this.BTN_DPAD_DOWN = 0x221
  this.BTN_DPAD_LEFT = 0x222
  this.BTN_DPAD_RIGHT = 0x223

  this.KEY_ALS_TOGGLE = 0x230 /* Ambient light sensor */

  this.KEY_BUTTONCONFIG = 0x240 /* AL Button Configuration */
  this.KEY_TASKMANAGER = 0x241 /* AL Task/Project Manager */
  this.KEY_JOURNAL = 0x242 /* AL Log/Journal/Timecard */
  this.KEY_CONTROLPANEL = 0x243 /* AL Control Panel */
  this.KEY_APPSELECT = 0x244 /* AL Select Task/Application */
  this.KEY_SCREENSAVER = 0x245 /* AL Screen Saver */
  this.KEY_VOICECOMMAND = 0x246 /* Listening Voice Command */
  this.KEY_ASSISTANT = 0x247 /* AL Context-aware desktop assistant */

  this.KEY_BRIGHTNESS_MIN = 0x250 /* Set Brightness to Minimum */
  this.KEY_BRIGHTNESS_MAX = 0x251 /* Set Brightness to Maximum */

  this.KEY_KBDINPUTASSIST_PREV = 0x260
  this.KEY_KBDINPUTASSIST_NEXT = 0x261
  this.KEY_KBDINPUTASSIST_PREVGROUP = 0x262
  this.KEY_KBDINPUTASSIST_NEXTGROUP = 0x263
  this.KEY_KBDINPUTASSIST_ACCEPT = 0x264
  this.KEY_KBDINPUTASSIST_CANCEL = 0x265

  /* Diagonal movement keys */
  this.KEY_RIGHT_UP = 0x266
  this.KEY_RIGHT_DOWN = 0x267
  this.KEY_LEFT_UP = 0x268
  this.KEY_LEFT_DOWN = 0x269

  this.KEY_ROOT_MENU = 0x26a /* Show Device's Root Menu */
  /* Show Top Menu of the Media (e.g. DVD) */
  this.KEY_MEDIA_TOP_MENU = 0x26b
  this.KEY_NUMERIC_11 = 0x26c
  this.KEY_NUMERIC_12 = 0x26d
  /*
   * Toggle Audio Description: refers to an audio service that helps blind and
   * visually impaired consumers understand the action in a program. Note: in
   * some countries this is referred to as "Video Description".
   */
  this.KEY_AUDIO_DESC = 0x26e
  this.KEY_3D_MODE = 0x26f
  this.KEY_NEXT_FAVORITE = 0x270
  this.KEY_STOP_RECORD = 0x271
  this.KEY_PAUSE_RECORD = 0x272
  this.KEY_VOD = 0x273 /* Video on Demand */
  this.KEY_UNMUTE = 0x274
  this.KEY_FASTREVERSE = 0x275
  this.KEY_SLOWREVERSE = 0x276
  /*
   * Control a data application associated with the currently viewed channel,
   * e.g. teletext or data broadcast application (MHEG, MHP, HbbTV, etc.)
   */
  this.KEY_DATA = 0x277
  this.KEY_ONSCREEN_KEYBOARD = 0x278

  this.BTN_TRIGGER_HAPPY = 0x2c0
  this.BTN_TRIGGER_HAPPY1 = 0x2c0
  this.BTN_TRIGGER_HAPPY2 = 0x2c1
  this.BTN_TRIGGER_HAPPY3 = 0x2c2
  this.BTN_TRIGGER_HAPPY4 = 0x2c3
  this.BTN_TRIGGER_HAPPY5 = 0x2c4
  this.BTN_TRIGGER_HAPPY6 = 0x2c5
  this.BTN_TRIGGER_HAPPY7 = 0x2c6
  this.BTN_TRIGGER_HAPPY8 = 0x2c7
  this.BTN_TRIGGER_HAPPY9 = 0x2c8
  this.BTN_TRIGGER_HAPPY10 = 0x2c9
  this.BTN_TRIGGER_HAPPY11 = 0x2ca
  this.BTN_TRIGGER_HAPPY12 = 0x2cb
  this.BTN_TRIGGER_HAPPY13 = 0x2cc
  this.BTN_TRIGGER_HAPPY14 = 0x2cd
  this.BTN_TRIGGER_HAPPY15 = 0x2ce
  this.BTN_TRIGGER_HAPPY16 = 0x2cf
  this.BTN_TRIGGER_HAPPY17 = 0x2d0
  this.BTN_TRIGGER_HAPPY18 = 0x2d1
  this.BTN_TRIGGER_HAPPY19 = 0x2d2
  this.BTN_TRIGGER_HAPPY20 = 0x2d3
  this.BTN_TRIGGER_HAPPY21 = 0x2d4
  this.BTN_TRIGGER_HAPPY22 = 0x2d5
  this.BTN_TRIGGER_HAPPY23 = 0x2d6
  this.BTN_TRIGGER_HAPPY24 = 0x2d7
  this.BTN_TRIGGER_HAPPY25 = 0x2d8
  this.BTN_TRIGGER_HAPPY26 = 0x2d9
  this.BTN_TRIGGER_HAPPY27 = 0x2da
  this.BTN_TRIGGER_HAPPY28 = 0x2db
  this.BTN_TRIGGER_HAPPY29 = 0x2dc
  this.BTN_TRIGGER_HAPPY30 = 0x2dd
  this.BTN_TRIGGER_HAPPY31 = 0x2de
  this.BTN_TRIGGER_HAPPY32 = 0x2df
  this.BTN_TRIGGER_HAPPY33 = 0x2e0
  this.BTN_TRIGGER_HAPPY34 = 0x2e1
  this.BTN_TRIGGER_HAPPY35 = 0x2e2
  this.BTN_TRIGGER_HAPPY36 = 0x2e3
  this.BTN_TRIGGER_HAPPY37 = 0x2e4
  this.BTN_TRIGGER_HAPPY38 = 0x2e5
  this.BTN_TRIGGER_HAPPY39 = 0x2e6
  this.BTN_TRIGGER_HAPPY40 = 0x2e7

  /* We avoid low common keys in module aliases so they don't get huge. */
  this.KEY_MIN_INTERESTING = this.KEY_MUTE
  this.KEY_MAX = 0x2ff
  this.KEY_CNT = (this.KEY_MAX + 1)

  /*
   * Relative axes
   */

  this.REL_X = 0x00
  this.REL_Y = 0x01
  this.REL_Z = 0x02
  this.REL_RX = 0x03
  this.REL_RY = 0x04
  this.REL_RZ = 0x05
  this.REL_HWHEEL = 0x06
  this.REL_DIAL = 0x07
  this.REL_WHEEL = 0x08
  this.REL_MISC = 0x09
  this.REL_MAX = 0x0f
  this.REL_CNT = (this.REL_MAX + 1)

  /*
   * Absolute axes
   */

  this.ABS_X = 0x00
  this.ABS_Y = 0x01
  this.ABS_Z = 0x02
  this.ABS_RX = 0x03
  this.ABS_RY = 0x04
  this.ABS_RZ = 0x05
  this.ABS_THROTTLE = 0x06
  this.ABS_RUDDER = 0x07
  this.ABS_WHEEL = 0x08
  this.ABS_GAS = 0x09
  this.ABS_BRAKE = 0x0a
  this.ABS_HAT0X = 0x10
  this.ABS_HAT0Y = 0x11
  this.ABS_HAT1X = 0x12
  this.ABS_HAT1Y = 0x13
  this.ABS_HAT2X = 0x14
  this.ABS_HAT2Y = 0x15
  this.ABS_HAT3X = 0x16
  this.ABS_HAT3Y = 0x17
  this.ABS_PRESSURE = 0x18
  this.ABS_DISTANCE = 0x19
  this.ABS_TILT_X = 0x1a
  this.ABS_TILT_Y = 0x1b
  this.ABS_TOOL_WIDTH = 0x1c

  this.ABS_VOLUME = 0x20

  this.ABS_MISC = 0x28

  this.ABS_MT_SLOT = 0x2f /* MT slot being modified */
  this.ABS_MT_TOUCH_MAJOR = 0x30 /* Major axis of touching ellipse */
  this.ABS_MT_TOUCH_MINOR = 0x31 /* Minor axis (omit if circular) */
  this.ABS_MT_WIDTH_MAJOR = 0x32 /* Major axis of approaching ellipse */
  this.ABS_MT_WIDTH_MINOR = 0x33 /* Minor axis (omit if circular) */
  this.ABS_MT_ORIENTATION = 0x34 /* Ellipse orientation */
  this.ABS_MT_POSITION_X = 0x35 /* Center X touch position */
  this.ABS_MT_POSITION_Y = 0x36 /* Center Y touch position */
  this.ABS_MT_TOOL_TYPE = 0x37 /* Type of touching device */
  this.ABS_MT_BLOB_ID = 0x38 /* Group a set of packets as a blob */
  this.ABS_MT_TRACKING_ID = 0x39 /* Unique ID of initiated contact */
  this.ABS_MT_PRESSURE = 0x3a /* Pressure on contact area */
  this.ABS_MT_DISTANCE = 0x3b /* Contact hover distance */
  this.ABS_MT_TOOL_X = 0x3c /* Center X tool position */
  this.ABS_MT_TOOL_Y = 0x3d /* Center Y tool position */

  this.ABS_MAX = 0x3f
  this.ABS_CNT = (this.ABS_MAX + 1)

  /*
   * Switch events
   */

  this.SW_LID = 0x00 /* set = lid shut */
  this.SW_TABLET_MODE = 0x01 /* set = tablet mode */
  this.SW_HEADPHONE_INSERT = 0x02 /* set = inserted */
  this.SW_RFKILL_ALL = 0x03
  /* rfkill master switch, type "any"
           set = radio enabled */
  this.SW_RADIO = this.SW_RFKILL_ALL /* deprecated */
  this.SW_MICROPHONE_INSERT = 0x04 /* set = inserted */
  this.SW_DOCK = 0x05 /* set = plugged into dock */
  this.SW_LINEOUT_INSERT = 0x06 /* set = inserted */
  this.SW_JACK_PHYSICAL_INSERT = 0x07 /* set = mechanical switch set */
  this.SW_VIDEOOUT_INSERT = 0x08 /* set = inserted */
  this.SW_CAMERA_LENS_COVER = 0x09 /* set = lens covered */
  this.SW_KEYPAD_SLIDE = 0x0a /* set = keypad slide out */
  this.SW_FRONT_PROXIMITY = 0x0b /* set = front proximity sensor active */
  this.SW_ROTATE_LOCK = 0x0c /* set = rotate locked/disabled */
  this.SW_LINEIN_INSERT = 0x0d /* set = inserted */
  this.SW_MUTE_DEVICE = 0x0e /* set = device disabled */
  this.SW_PEN_INSERTED = 0x0f /* set = pen inserted */
  this.SW_MAX = 0x0f
  this.SW_CNT = (this.SW_MAX + 1)

  /*
   * Misc events
   */

  this.MSC_SERIAL = 0x00
  this.MSC_PULSELED = 0x01
  this.MSC_GESTURE = 0x02
  this.MSC_RAW = 0x03
  this.MSC_SCAN = 0x04
  this.MSC_TIMESTAMP = 0x05
  this.MSC_MAX = 0x07
  this.MSC_CNT = (this.MSC_MAX + 1)

  /*
   * LEDs
   */

  this.LED_NUML = 0x00
  this.LED_CAPSL = 0x01
  this.LED_SCROLLL = 0x02
  this.LED_COMPOSE = 0x03
  this.LED_KANA = 0x04
  this.LED_SLEEP = 0x05
  this.LED_SUSPEND = 0x06
  this.LED_MUTE = 0x07
  this.LED_MISC = 0x08
  this.LED_MAIL = 0x09
  this.LED_CHARGING = 0x0a
  this.LED_MAX = 0x0f
  this.LED_CNT = (this.LED_MAX + 1)

  /*
   * Autorepeat values
   */

  this.REP_DELAY = 0x00
  this.REP_PERIOD = 0x01
  this.REP_MAX = 0x01
  this.REP_CNT = (this.REP_MAX + 1)

  /*
   * Sounds
   */

  this.SND_CLICK = 0x00
  this.SND_BELL = 0x01
  this.SND_TONE = 0x02
  this.SND_MAX = 0x07
  this.SND_CNT = (this.SND_MAX + 1)
}()

// #endif

// ====================== conversion ended ======================

// Also map from the key code number back to the name.
var keyCodeToName = exports.keyCodeToName = {}

for (var x in inputEventCodes) {
  if (x.startsWith('KEY_')) {
    keyCodeToName[inputEventCodes[x]] = x
  }
}
