import { calcExecutionTime } from "../helpers/decorators/index";
import { TradeIn } from "./TradeIn";

export class Trades {

    //private _trades: Array<TradeIn> = [];
    private _trades: TradeIn[] = [];

    add(tradeIn: TradeIn): void {
        this._trades.push(tradeIn);
    }

    @calcExecutionTime()
    toArray(): TradeIn[] {
        return ([] as TradeIn[]).concat(this._trades);
    }

}