/**
 * This extension finds and exports two OS constants:
 *   EVIOCGRAB - An ioctl operation that requests exclusive access to a
 *               resource.
 *   sizeofInputEvent - The C sizeof(struct input_event) - which changes
 *                      size depending on the platforms time size. For example,
 *                      This will different on a 32 bit RaspberryPI compared to
 *                      a 64 bit desktop.
 */
#include <nan.h>
#include <linux/input.h>

namespace com {
namespace williwoodstudios {
namespace linuxkeyboardcatcher {

void Init(v8::Local<v8::Object> exports) {
  int sizeOfInputEvent = sizeof(struct input_event);
  exports->Set(Nan::New("EVIOCGRAB").ToLocalChecked(),
               Nan::New<v8::Number>(EVIOCGRAB));
  exports->Set(Nan::New("sizeofInputEvent").ToLocalChecked(),
               Nan::New<v8::Number>(sizeOfInputEvent));
}

NODE_MODULE(PlatformConstants, Init)

}
}
}
