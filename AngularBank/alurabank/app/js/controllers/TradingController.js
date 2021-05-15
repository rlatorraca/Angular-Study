class TradingController {
    constructor() {
        this._trades = new Trades();
        this._tradesView = new TradesView('#tradesViews');
        this._inputDate = document.querySelector('#date');
        this._inputQuantity = document.querySelector('#quantity');
        this._inputValue = document.querySelector('#value');
        this._tradesView.update();
    }
    adicionar(event) {
        event.preventDefault();
        const tradeIn = new TradeIn(new Date(this._inputDate.value.replace(/-/g, '/')), // switch -' to ','
        parseInt(this._inputQuantity.value), parseFloat(this._inputValue.value));
        this._trades.add(tradeIn);
        // apaga o array
        this._trades.toArray().length = 0; // acabou de apagar!
        this._trades.toArray().forEach(trade => {
            console.log(trade.date);
            console.log(trade.quantity);
            console.log(trade.value);
            console.log(trade.volume);
        });
        console.log(tradeIn);
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
