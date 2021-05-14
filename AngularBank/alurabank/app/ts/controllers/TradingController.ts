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

    constructor() {
        this._inputDate = <HTMLInputElement>document.querySelector('#date');
        this._inputQuantity = <HTMLInputElement>document.querySelector('#quantity');
        this._inputValue = <HTMLInputElement>document.querySelector('#value');
    }

    adicionar(event: Event) {
        event.preventDefault();

        const tradeIn = new TradeIn(
            new Date(this._inputDate.value.replace(/-/g, '/')), // switch -' to ','
            parseInt(this._inputQuantity.value),
            parseFloat(this._inputValue.value)
        );
        this._trades.add(tradeIn);
        
        // apaga o array
        this._trades.paraArray().length = 0; // acabou de apagar!
        
        this._trades.toArray().forEach(trade =>{
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