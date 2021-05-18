System.register(["./TradeIn", "./Trades"], function (exports_1, context_1) {
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
            function (TradeIn_1_1) {
                exportStar_1(TradeIn_1_1);
            },
            function (Trades_1_1) {
                exportStar_1(Trades_1_1);
            }
        ],
        execute: function () {
        }
    };
});
