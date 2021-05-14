class Trades {
    constructor() {
        //private _trades: Array<TradeIn> = [];
        this._trades = [];
    }
    add(tradeIn) {
        this._trades.push(tradeIn);
    }
    toArray() {
        return [].concat(this._trades);
    }
}
