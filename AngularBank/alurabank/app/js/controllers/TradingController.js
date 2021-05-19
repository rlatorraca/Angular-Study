System.register(["../models/index", "../views/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, index_2, TradingController, DaysOfWeek;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            TradingController = class TradingController {
                constructor() {
                    this._trades = new index_1.Trades();
                    this._tradesView = new index_2.TradesView('#tradesViews');
                    this._messageView = new index_2.MessageView('#messageView');
                    this._inputDate = $('#date');
                    this._inputQuantity = $('#quantity');
                    this._inputValue = $('#value');
                    this._tradesView.update(this._trades);
                }
                add(event) {
                    event.preventDefault();
                    let date = new Date(this._inputDate.val().replace(/-/g, '/'));
                    if (!this._businessDay(date)) {
                        this._messageView.update("Trade In just permitted in business day", "alert-danger");
                        return;
                    }
                    const tradeIn = new index_1.TradeIn(date, parseInt(this._inputQuantity.val()), parseFloat(this._inputValue.val()));
                    this._trades.add(tradeIn);
                    this._tradesView.update(this._trades);
                    this._messageView.update('Trade In properly included', 'alert-info');
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
