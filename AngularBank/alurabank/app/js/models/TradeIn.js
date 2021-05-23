System.register([], function (exports_1, context_1) {
    "use strict";
    var TradeIn;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            TradeIn = class TradeIn {
                constructor(_date, _quantity, _value) {
                    this._date = _date;
                    this._quantity = _quantity;
                    this._value = _value;
                }
                isEqual(tradeIn) {
                    return this.date.getDate() == tradeIn.date.getDate()
                        && this.date.getMonth() == tradeIn.date.getMonth()
                        && this.date.getFullYear() == tradeIn.date.getFullYear();
                }
                toString() {
                    console.log('-- To String in TradeIn--');
                    console.log(`Data: ${this.date}
            Quantidade: ${this.quantity}, 
            Valor: ${this.value}, 
            Volume: ${this.volume}`);
                }
                get date() {
                    return this._date;
                }
                get quantity() {
                    return this._quantity;
                }
                get value() {
                    return this._value;
                }
                get volume() {
                    return this._quantity * this._value;
                }
            };
            exports_1("TradeIn", TradeIn);
        }
    };
});
