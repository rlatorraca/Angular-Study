class TradingController {
    constructor() {
        this._trades = new Trades();
        this._tradesView = new Views.TradesView('#tradesViews');
        this._messageView = new Views.MessageView('#messageView');
        this._inputDate = $('#date');
        this._inputQuantity = $('#quantity');
        this._inputValue = $('#value');
        this._tradesView.update(this._trades);
    }
    add(event) {
        event.preventDefault();
        const tradeIn = new TradeIn(new Date(this._inputDate.val().replace(/-/g, '/')), parseInt(this._inputQuantity.val()), parseFloat(this._inputValue.val()));
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
}
