class Trading {

    constructor(date, quantity, value) {
        // _ : diz que o atributo é PRIVATE
        this._date = date;
        this._quantity = quantity;
        this._value = value;
    }

    get date() {
        return this._date;
    }

    get quantity() {
        return this.__quantity;
    }

    get value() {
        return this._value;
    }

    get volume() {

        return this._quantity * this._value;
    }
}