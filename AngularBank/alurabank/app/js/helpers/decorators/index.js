System.register(["./calcExecutionTime", "./domInject", "./myClassDecorator", "./throtle"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (calcExecutionTime_1_1) {
                exportStar_1(calcExecutionTime_1_1);
            },
            function (domInject_1_1) {
                exportStar_1(domInject_1_1);
            },
            function (myClassDecorator_1_1) {
                exportStar_1(myClassDecorator_1_1);
            },
            function (throtle_1_1) {
                exportStar_1(throtle_1_1);
            }
        ],
        execute: function () {
        }
    };
});
