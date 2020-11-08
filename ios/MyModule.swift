import Foundation

@objc(MyModule)
class MyModule: NSObject {
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  @objc
  func addWithCallback(_ x: NSInteger, Y y: NSInteger, Callback callback: RCTResponseSenderBlock) {
//    callback([x + y]) // number
//    callback(["string"]) // string
//    callback([[100, 20, 39]]) // array
    callback([["name": "david", "age": 123 ]]) // object
  }
  
  @objc
  func addWithPromise(_ x: NSInteger, Y y: NSInteger, resolver resolve: RCTPromiseResolveBlock, rejecter reject: RCTPromiseRejectBlock) {
//    resolve(x + y)
    let error = NSError(domain: "", code: 200, userInfo: ["error": "error"])
    reject("code", "messsage", error)
  }
}
