import { Transferencia } from '../model/transferencia.model';
import { TransactionService } from './../services/transaction.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-transfer',
  templateUrl: './show-transfer.component.html',
  styleUrls: ['./show-transfer.component.scss']
})
export class ShowTransferComponent implements OnInit {

  /*@Input()*/
  transactionsList: any[];

  constructor(private service: TransactionService) { }

  ngOnInit(): void {
   this.service.allTransactions().subscribe(
     (transactions: Transferencia[]) => {
        console.table(transactions);
        this.transactionsList = transactions;
   });
  }

}
