export class Trades {
    constructor() {
        this._trades = [];
    }
    add(tradeIn) {
        this._trades.push(tradeIn);
    }
    toArray() {
        return [].concat(this._trades);
    }
}
