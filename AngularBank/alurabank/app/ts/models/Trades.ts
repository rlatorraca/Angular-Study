class Trades {
    
    //private _trades: Array<TradeIn> = [];
    private _trades: TradeIn[] = [];
    
    add (tradeIn: TradeIn): void {
        this._trades.push(tradeIn);
    }

    toArray(): TradeIn[] {
        return [].concat(this._trades);
    }

}