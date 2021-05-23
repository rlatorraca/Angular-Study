System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function printer(...objects) {
        objects.forEach(tradeobject => tradeobject.toString());
    }
    exports_1("printer", printer);
    return {
        setters: [],
        execute: function () {
        }
    };
});
