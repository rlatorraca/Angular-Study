System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function myClassDecorator() {
        return function (constructor) {
            const original = constructor;
            const novo = function (...args) {
                console.log("Building a instance with NEW: " + original.name);
                return new original(...args);
            };
            novo.prototype = original.prototype;
            return novo;
        };
    }
    exports_1("myClassDecorator", myClassDecorator);
    return {
        setters: [],
        execute: function () {
        }
    };
});
