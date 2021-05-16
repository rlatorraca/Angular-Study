class TradingController {
    // ==> GENERIC
    // private _inputDate: Element;
    // private _inputQuantity: Element;
    // private _inputValue: Element;

    // Specific
    private _inputDate: HTMLInputElement;
    private _inputQuantity: HTMLInputElement;
    private _inputValue: HTMLInputElement;
    private _trades: Trades = new Trades();
    private _tradesView = new TradesView('#tradesViews');
    private _messageView = new MessageView('#messageView');

    constructor() {
        this._inputDate = <HTMLInputElement>document.querySelector('#date');
        this._inputQuantity = <HTMLInputElement>document.querySelector('#quantity');
        this._inputValue = <HTMLInputElement>document.querySelector('#value');
         // atualiza a view para exibir os dados do modelo, vazio
        this._tradesView.update(this._trades);        
    }

    add(event: Event) {
        event.preventDefault();

        const tradeIn = new TradeIn(
            new Date(this._inputDate.value.replace(/-/g, '/')), // switch -' to ','
            parseInt(this._inputQuantity.value),
            parseFloat(this._inputValue.value)
        );
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