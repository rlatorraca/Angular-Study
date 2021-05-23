import { calcExecutionTime } from "../helpers/decorators/index";
import { TradeIn } from "./TradeIn";
import { MyInterfaces } from './MyInterfaces';

export class Trades implements MyInterfaces<Trades>{

    //private _trades: Array<TradeIn> = [];
    private _trades: TradeIn[] = [];

    add(tradeIn: TradeIn): void {
        this._trades.push(tradeIn);
    }

    @calcExecutionTime()
    toArray(): TradeIn[] {
        return ([] as TradeIn[]).concat(this._trades);
    }

    isEqual(trades: Trades): boolean {

        return JSON.stringify(this._trades) == JSON.stringify(trades.toArray());
    }

    toString(): void {

        console.log('-- To String in Trades --');
        console.log(JSON.stringify(this._trades));
    }

}