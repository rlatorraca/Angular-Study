System.register([], function (exports_1, context_1) {
    "use strict";
    var Trades;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Trades = class Trades {
                constructor() {
                    this._trades = [];
                }
                add(tradeIn) {
                    this._trades.push(tradeIn);
                }
                toArray() {
                    return [].concat(this._trades);
                }
            };
            exports_1("Trades", Trades);
        }
    };
});
