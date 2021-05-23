System.register(["../helpers/decorators/index", "../models/index", "../views/index", "../service/index", "../helpers/index"], function (exports_1, context_1) {
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
    var index_1, index_2, index_3, index_4, index_5, TradingController, DaysOfWeek;
    var __moduleName = context_1 && context_1.id;
    function myClassErrorDecorator() {
        throw new Error("Function not implemented.");
    }
    function CalcExecutionTimeError(arg0) {
        throw new Error("Function not implemented.");
    }
    function forEach(arg0) {
        throw new Error("Function not implemented.");
    }
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (index_4_1) {
                index_4 = index_4_1;
            },
            function (index_5_1) {
                index_5 = index_5_1;
            }
        ],
        execute: function () {
            TradingController = class TradingController {
                constructor() {
                    this._trades = new index_2.Trades();
                    this._tradesView = new index_3.TradesView('#tradesViews');
                    this._messageView = new index_3.MessageView('#messageView');
                    this._service = new index_4.TradeInService();
                    this._tradesView.update(this._trades);
                }
                add() {
                    let date = new Date(this._inputDate.val().replace(/-/g, '/'));
                    if (!this._businessDay(date)) {
                        this._messageView.update("Trade In just permitted in business day", "alert-danger");
                        return;
                    }
                    const tradeIn = new index_2.TradeIn(date, parseInt(this._inputQuantity.val()), parseFloat(this._inputValue.val()));
                    this._trades.add(tradeIn);
                    index_5.printer(tradeIn, this._trades);
                    this._tradesView.update(this._trades);
                    this._messageView.update('Trade In properly included', 'alert-info');
                }
                importDataFromAPI() {
                    const isServerRunning = (res) => {
                        if (res.ok) {
                            return res;
                        }
                        throw new Error(res.statusText);
                    };
                    this._service
                        .getTradesService(isServerRunning)
                        .then((trades) => {
                        trades.forEach(trade => this._trades.add(trade));
                        this._tradesView.update(this._trades);
                    });
                }
                get inputDate() {
                    return this._inputDate;
                }
                get inputQuantity() {
                    return this._inputQuantity;
                }
                get inputValue() {
                    return this._inputValue;
                }
                _businessDay(date) {
                    return date.getDay() != DaysOfWeek.Saturday && date.getDay() != DaysOfWeek.Sunday;
                }
            };
            __decorate([
                index_1.domInject('#date'),
                __metadata("design:type", Object)
            ], TradingController.prototype, "_inputDate", void 0);
            __decorate([
                index_1.domInject('#quantity'),
                __metadata("design:type", Object)
            ], TradingController.prototype, "_inputQuantity", void 0);
            __decorate([
                index_1.domInject('#value'),
                __metadata("design:type", Object)
            ], TradingController.prototype, "_inputValue", void 0);
            __decorate([
                index_1.throttle(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", []),
                __metadata("design:returntype", void 0)
            ], TradingController.prototype, "add", null);
            __decorate([
                index_1.throttle(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", []),
                __metadata("design:returntype", void 0)
            ], TradingController.prototype, "importDataFromAPI", null);
            TradingController = __decorate([
                index_1.myClassDecorator(),
                __metadata("design:paramtypes", [])
            ], TradingController);
            exports_1("TradingController", TradingController);
            (function (DaysOfWeek) {
                DaysOfWeek[DaysOfWeek["Sunday"] = 0] = "Sunday";
                DaysOfWeek[DaysOfWeek["Monday"] = 1] = "Monday";
                DaysOfWeek[DaysOfWeek["Tuesday"] = 2] = "Tuesday";
                DaysOfWeek[DaysOfWeek["Wednesday"] = 3] = "Wednesday";
                DaysOfWeek[DaysOfWeek["Thursday"] = 4] = "Thursday";
                DaysOfWeek[DaysOfWeek["Friday"] = 5] = "Friday";
                DaysOfWeek[DaysOfWeek["Saturday"] = 6] = "Saturday";
            })(DaysOfWeek || (DaysOfWeek = {}));
        }
    };
});
