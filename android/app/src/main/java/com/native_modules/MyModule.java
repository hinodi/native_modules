package com.native_modules;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;

public class MyModule extends ReactContextBaseJavaModule {
    public MyModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "MyModule";
    }

    @ReactMethod
    public void addWithCallback(int x, int y, Callback callback) {
//        callback.invoke(x + y); // number
//        callback.invoke("string"); // string

//        WritableArray writableArray = Arguments.createArray();
//        writableArray.pushInt(100);
//        writableArray.pushInt(20);
//        writableArray.pushInt(39);
//        callback.invoke(writableArray); // array

        WritableMap writableMap = Arguments.createMap();
        writableMap.putString("name", "david");
        writableMap.putInt("age", 123);
        callback.invoke(writableMap); // object
    }

    @ReactMethod
    public void addWithPromise(int x, int y, Promise promise) {
//        promise.resolve(x + y);

        WritableMap writableMap = Arguments.createMap();
        writableMap.putString("error", "error");

        Exception exception = new Exception("message");

        promise.reject("code", exception, writableMap);
    }
}