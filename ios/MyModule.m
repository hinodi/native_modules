#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(MyModule, NSObject)

RCT_EXTERN_METHOD(addWithCallback: (NSInteger)x Y: (NSInteger)y Callback: (RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(addWithPromise: (NSInteger)x Y: (NSInteger)y resolver: (RCTPromiseResolveBlock)resolve rejecter: (RCTPromiseRejectBlock)reject)

@end
