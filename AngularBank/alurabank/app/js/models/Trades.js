System.register(["../helpers/decorators/CalcExecutionTime"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var CalcExecutionTime_1, Trades;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (CalcExecutionTime_1_1) {
                CalcExecutionTime_1 = CalcExecutionTime_1_1;
            }
        ],
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
            __decorate([
                CalcExecutionTime_1.CalcExecutionTime()
            ], Trades.prototype, "toArray", null);
            exports_1("Trades", Trades);
        }
    };
});
