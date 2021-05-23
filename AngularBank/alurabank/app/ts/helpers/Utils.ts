import { TradeIn } from "../models/index";

export function printer(...objects: any[]) {

    objects.forEach(tradeobject => tradeobject.toString());
}