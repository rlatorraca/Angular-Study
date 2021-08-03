import { Injectable } from '@angular/core';

// Essa classe pode ser invocada pelo Constructor
@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private transactionList: any[];

  constructor() {
    this.transactionList = [];
  }


  get transactions(): any {
    return this.transactionList;
  }

  addTransactions(transaction: any): any{
    this.manipulateData(transaction);
    this.transactionList.push(transaction);
  }

  private manipulateData(transaction: any): any {
    transaction.date = new Date();
  }

}
