class TradingController {
    // ==> GENERIC
    // private _inputDate: Element;
    // private _inputQuantity: Element;
    // private _inputValue: Element;

    // Specific
    private _inputDate: HTMLInputElement;
    private _inputQuantity: HTMLInputElement;
    private _inputValue: HTMLInputElement;

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