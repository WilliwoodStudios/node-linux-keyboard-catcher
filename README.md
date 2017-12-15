# Linux Keyboard Catcher

Keyboard Catcher reads from Linux's keyboard event queues, tracks applied modifiers and offers keyboard mapping.

Keyboard Catcher was built to provide exclusive events from a USB magnetic stripe reader, so that an Express server could deliver stripe read data over web sockets, but the foreground application would not receive and keyboard events.

This module could also be used as a keyboard logger.

## System Configuration

### Groups

Make sure that the user running node is in the same group as the `/dev/input`
devices. This is normally input.

```shell
pi@raspberrypi:~ $ ls -l /dev/input
total 0
drwxr-xr-x 2 root root     100 Dec 14 09:59 by-id
drwxr-xr-x 2 root root     100 Dec 14 09:59 by-path
crw-rw---- 1 root input 13, 64 Dec 14 09:53 event0
crw-rw---- 1 root input 13, 65 Dec 14 09:59 event1
crw-rw---- 1 root input 13, 63 Dec 14 09:53 mice
crw-rw---- 1 root input 13, 32 Dec 14 09:59 mouse0
```

### Input Device Selection

`/dev/input/by-id` can point you to which device you should be using.

In the following example, the USB magnetic stripe reader is NOT the logitech devices.

```shell
pi@raspberrypi:~ $ ls -l /dev/input/by-id
total 0
lrwxrwxrwx 1 root root 9 Dec 14 09:59 usb-Logitech_USB_Receiver-if02-event-mouse -> ../event1
lrwxrwxrwx 1 root root 9 Dec 14 09:59 usb-Logitech_USB_Receiver-if02-mouse -> ../mouse0
lrwxrwxrwx 1 root root 9 Dec 14 09:53 usb-STMicroelectronics_STM32_Joystick-if01-event-kbd -> ../event0
```

## Exported

The following are exported.

- `LinuxKeyboardCatcher` - a constructor function.
- `inputEventCodes` - a map from key code name to code.
- `keyCodeToName` - the opposite of `inputEventCodes`; a map from key code to name.
- `keyMaps` - a set of keyboard maps.

### `LinuxKeyboardCatcher`

#### `async function open(filename, exclusive)`

Opens an event stream and starts parsing the events.

- `filename` - `string` - The file to read keybord events from. eg: `/dev/input/event0`.
- `exclusive` - `boolean (optional)` - Flag indicating if the file should be opened exclusively, preventing
  other processes from receiving events from this source. Useful for a USB magnetic stripe reader, not useful
  for your main keyboard.

#### `async function close()`

Close an event stream.

#### Event `opened()`

Fired when the input stream is correctly opened.

#### Event `closed()`

Fired when the input stream is closed.

#### Event `error(error)`

Fired when there is an error.

#### Event `event(keyEvent)`

Fired when a key is released, pressed, or repeated.

##### keyEvent

A sample key event:

```javascript
{ shift: true,
  alt: false,
  control: false,
  meta: false,
  caps: false,
  mapped: 'T',
  type: 1,
  code: 20,
  value: 1,
  scanCode: 'KEY_T' }
```
- `shift` - shows if either shift key was down prior to or due to this event.
- `alt` - shows if either alt key was down prior to or due to this event.
- `control` - shows if either control key was down prior to or due to this event.
- `meta` - shows if either Option or Windows was down prior to or due to this event.
- `caps` - shows if caps lock was activated prior to or due to this event.
- `mapped` - the useable string you'd want to append to line data, or `undefined` if
             no mapping is known.
- `type` - 1 for key events.
- `code` - the numerical scan code.
- `value` - 0: key up, 1: key down, 2: key repeated.
- `scanCode` - the readable name for `code`.
