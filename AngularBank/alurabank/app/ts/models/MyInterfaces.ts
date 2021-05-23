import { Equal, Printable } from './index';

export interface MyInterfaces<T> extends Printable, Equal<T>  { }