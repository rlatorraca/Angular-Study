import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Transferencia } from '../model/transferencia.model';

// Essa classe pode ser invocada pelo Constructor
@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private transactionList: any[];
  private url = 'http://localhost:3000/transferencias/';

  constructor(private httpClient: HttpClient) {
    this.transactionList = [];
  }

  allTransactions(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  get transactions(): any {
    return this.transactionList;
  }

  addTransactions(transaction: Transferencia): Observable<Transferencia> {
    this.manipulateData(transaction);
    /*this.transactionList.push(transaction);*/
    return this.httpClient.post<Transferencia>(this.url, transaction);
  }

  private manipulateData(transaction: any): any {
    transaction.date = new Date();
  }

}
