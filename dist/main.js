(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (factory());
}(this, (function () { 'use strict';

    var a = {
      fu: function () {
        console.log('这是我的第一个npm包');
      }
    };
    module.exports = a; // 把a暴漏出去

})));
