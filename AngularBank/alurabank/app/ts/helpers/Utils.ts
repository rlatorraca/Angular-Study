import { Printable } from '../models/index';

export function printer(...objects: Printable[]) {

    objects.forEach(tradeobject => tradeobject.toString());
}