import { TradeIn, Trades } from "../models/index";
import { MessageView, TradesView } from "../views/index";

export class TradingController {
    // ==> GENERIC
    // private _inputDate: Element;
    // private _inputQuantity: Element;
    // private _inputValue: Element;

    // Specific
    // private _inputDate: HTMLInputElement;
    // private _inputQuantity: HTMLInputElement;
    // private _inputValue: HTMLInputElement;

    // Using Jquery
    private _inputDate: JQuery;
    private _inputQuantity: JQuery;
    private _inputValue: JQuery;

    private _trades: Trades = new Trades();
    private _tradesView = new TradesView('#tradesViews');
    private _messageView = new MessageView('#messageView');

    constructor() {
        // this._inputDate = <HTMLInputElement>document.querySelector('#date');
        // this._inputQuantity = <HTMLInputElement>document.querySelector('#quantity');
        // this._inputValue = <HTMLInputElement>document.querySelector('#value');

        // Using Jquery
        this._inputDate = $('#date');
        this._inputQuantity = $('#quantity');
        this._inputValue = $('#value');
        // atualiza a view para exibir os dados do modelo, vazio
        this._tradesView.update(this._trades);
    }

    add(event: Event) {
        event.preventDefault();
        const t1 = performance.now();
        const tradeIn = new TradeIn(
            // new Date(this._inputDate.value.replace(/-/g, '/')), // switch -' to ','
            // parseInt(this._inputQuantity.value),
            // parseFloat(this._inputValue.value)

            //Using Jquery
            new Date(this._inputDate.val().replace(/-/g, '/')), // switch -' to ','
            parseInt(this._inputQuantity.val()),
            parseFloat(this._inputValue.val())
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
        this._tradesView.update(this._trades, );
        this._messageView.update('Trade In properly included');
        const t2 = performance.now();
        console.log(`Tempo de execução do método adiciona(): ${(t2 - t1) / 1000} segundos`);
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