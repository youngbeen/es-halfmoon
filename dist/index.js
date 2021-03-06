"use strict";

var isString = function isString(val) {
  return typeof val === 'string';
};

var isObject = function isObject(val) {
  return Object.prototype.toString.call(val) === '[object Object]';
};

if (!Array.prototype.get) {
  Array.prototype.get = function (property) {
    var keyName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    // console.log(property, keyName)
    if (property && isString(property)) {
      if (!this.length) {
        return undefined;
      }

      var sampleItem = this[0];

      if (isObject(sampleItem)) {
        // object item
        var keys = Object.keys(sampleItem);

        if (!keyName) {
          // keyName not set, auto detect it
          // NOTE keyName support priority: id > key > value
          if (keys.includes('id')) {
            keyName = 'id';
          } else if (keys.includes('key')) {
            keyName = 'key';
          } else {
            keyName = 'value';
          }
        }

        if (!keys.includes(keyName)) {
          return undefined;
        }

        return this.find(function (item) {
          return item[keyName] === property;
        });
      } else {
        // value item
        throw new Error('item must be object when invoke "get"');
      }
    } else {
      throw new Error('key must be string when invoke "get"');
    }
  };
}

if (!Array.prototype.forEachRight) {
  Array.prototype.forEachRight = function (callbackfn) {
    if (!callbackfn) {
      throw new Error('callbackfn required when invoke "forEachRight"');
    }

    if (typeof callbackfn !== 'function') {
      throw new Error('callbackfn should be function when invoke "forEachRight"');
    }

    for (var index = this.length - 1; index >= 0; index--) {
      var element = this[index];
      callbackfn(element, index);
    }
  };
}