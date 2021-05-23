System.register(["./Printable"], function (exports_1, context_1) {
    "use strict";
    var Printable_1, TradeIn;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Printable_1_1) {
                Printable_1 = Printable_1_1;
            }
        ],
        execute: function () {
            TradeIn = class TradeIn extends Printable_1.Printable {
                constructor(_date, _quantity, _value) {
                    super();
                    this._date = _date;
                    this._quantity = _quantity;
                    this._value = _value;
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
