class TradingController {
    constructor() {
        this._trades = new Trades();
        this._tradesView = new TradesView('#tradesViews');
        this._messageView = new MessageView('#messageView');
        this._inputDate = document.querySelector('#date');
        this._inputQuantity = document.querySelector('#quantity');
        this._inputValue = document.querySelector('#value');
        // atualiza a view para exibir os dados do modelo, vazio
        this._tradesView.update(this._trades);
    }
    add(event) {
        event.preventDefault();
        const tradeIn = new TradeIn(new Date(this._inputDate.value.replace(/-/g, '/')), // switch -' to ','
        parseInt(this._inputQuantity.value), parseFloat(this._inputValue.value));
        this._trades.add(tradeIn);
        // apaga o array
        this._trades.toArray().length = 0; // acabou de apagar!
        // this._trades.toArray().forEach(trade => {
        //     console.log(trade.date);
        //     console.log(trade.quantity);
        //     console.log(trade.value);
        //     console.log(trade.volume);
        // });
        //console.log(tradeIn);
        // depois de adicionar, atualiza a view novamente para refletir os dados
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
