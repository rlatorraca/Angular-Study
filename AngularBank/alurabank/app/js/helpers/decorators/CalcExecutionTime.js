System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function CalcExecutionTime() {
        return function (target, propertyKey, descriptor) {
            const originalMethod = descriptor.value;
            descriptor.value = function (...args) {
                console.log('-----------------------');
                console.log(`Method Parameters ${propertyKey}: ${JSON.stringify(args)}`);
                const t1 = performance.now();
                const result = originalMethod.apply(this, args);
                console.log(`Method Result : ${JSON.stringify(result)}`);
                const t2 = performance.now();
                console.log(`${propertyKey} spent ${t2 - t1} ms`);
                console.log('-----------------------');
                return result;
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
