System.register(["../models/TradeIn", "../models/Trades", "../views/MessageView", "../views/TradesView"], function (exports_1, context_1) {
    "use strict";
    var TradeIn_1, Trades_1, MessageView_1, TradesView_1, TradingController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (TradeIn_1_1) {
                TradeIn_1 = TradeIn_1_1;
            },
            function (Trades_1_1) {
                Trades_1 = Trades_1_1;
            },
            function (MessageView_1_1) {
                MessageView_1 = MessageView_1_1;
            },
            function (TradesView_1_1) {
                TradesView_1 = TradesView_1_1;
            }
        ],
        execute: function () {
            TradingController = class TradingController {
                constructor() {
                    this._trades = new Trades_1.Trades();
                    this._tradesView = new TradesView_1.TradesView('#tradesViews');
                    this._messageView = new MessageView_1.MessageView('#messageView');
                    this._inputDate = $('#date');
                    this._inputQuantity = $('#quantity');
                    this._inputValue = $('#value');
                    this._tradesView.update(this._trades);
                }
                add(event) {
                    event.preventDefault();
                    const tradeIn = new TradeIn_1.TradeIn(new Date(this._inputDate.val().replace(/-/g, '/')), parseInt(this._inputQuantity.val()), parseFloat(this._inputValue.val()));
                    this._trades.add(tradeIn);
                    this._trades.toArray().length = 0;
                    this._tradesView.update(this._trades);
                    this._messageView.update('Trade In properly included');
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
            };
            exports_1("TradingController", TradingController);
        }
    };
});
