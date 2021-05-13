var Trading = /** @class */ (function () {
    function Trading(date, quantity, value) {
        // _ : diz que o atributo é PRIVATE
        this._date = date;
        this._quantity = quantity;
        this._value = value;
    }
    Object.defineProperty(Trading.prototype, "date", {
        get: function () {
            return this._date;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Trading.prototype, "quantity", {
        get: function () {
            return this.__quantity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Trading.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Trading.prototype, "volume", {
        get: function () {
            return this._quantity * this._value;
        },
        enumerable: false,
        configurable: true
    });
    return Trading;
}());
