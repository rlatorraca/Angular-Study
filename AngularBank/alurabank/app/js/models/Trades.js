System.register(["../helpers/decorators/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var index_1, Trades;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
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
                isEqual(trades) {
                    return JSON.stringify(this._trades) == JSON.stringify(trades.toArray());
                }
                toString() {
                    console.log('-- To String in Trades --');
                    console.log(JSON.stringify(this._trades));
                }
            };
            __decorate([
                index_1.calcExecutionTime(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", []),
                __metadata("design:returntype", Array)
            ], Trades.prototype, "toArray", null);
            exports_1("Trades", Trades);
        }
    };
});
