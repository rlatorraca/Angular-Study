import { TradeIn } from "./TradeIn";

export class Trades {
    
    //private _trades: Array<TradeIn> = [];
    private _trades: TradeIn[] = [];
    
    add (tradeIn: TradeIn): void {
        this._trades.push(tradeIn);
    }

    toArray(): TradeIn[] {
        return ([] as TradeIn[]).concat(this._trades);
    }

}