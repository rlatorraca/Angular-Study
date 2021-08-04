export interface Transferencia {
  id?: string;
  value: number;
  destination: number | string;
  date?: Date;
}
