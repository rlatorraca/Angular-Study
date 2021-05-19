System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function CalcExecutionTime() {
        return function (target, propertyKey, descriptor) {
            const originalMethod = descriptor.value;
            descriptor.value = function (...args) {
                const retorno = originalMethod.apply(this, args);
                return retorno;
            };
            return descriptor;
        };
    }
    exports_1("CalcExecutionTime", CalcExecutionTime);
    return {
        setters: [],
        execute: function () {
        }
    };
});
