import { Printable } from "./Printable"
export class TradeIn implements Printable{

    // ==> OLD
    // private _date: Date;
    // private _quantity: number;
    // private _value: number;

    // constructor(date: Date, quantity: number, value: number) {
    //     // _ : diz que o atributo é PRIVATE
    //     this._date = date;
    //     this._quantity = quantity;
    //     this._value = value;
    // }

    // Pode ser Construido com REANDONLY e nao precisamos do GETTERS
    // constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) {}

    // ==> NEW 
    constructor(private _date: Date, private _quantity: number, private _value: number) {
        
    }


    toString(): void {
        console.log('-- To String in TradeIn--');
        console.log(
            `Data: ${this.date}
            Quantidade: ${this.quantity}, 
            Valor: ${this.value}, 
            Volume: ${this.volume}`
        );
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
}