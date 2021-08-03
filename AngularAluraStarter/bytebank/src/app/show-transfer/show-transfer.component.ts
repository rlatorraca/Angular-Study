import { TransactionService } from './../services/transaction.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-transfer',
  templateUrl: './show-transfer.component.html',
  styleUrls: ['./show-transfer.component.scss']
})
export class ShowTransferComponent implements OnInit {

  //@Input()
  transfered: any[];

  constructor(private service: TransactionService) { }

  ngOnInit() {
    this.transfered = this.service.transactions;
  }

}
