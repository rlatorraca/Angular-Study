import { TransactionService } from './services/transaction.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  /*transactions: any[] = [];*/

  constructor(private service: TransactionService) {}

  /*
  public view($event: any): void{
    this.service.addTransactions($event);
    console.log($event);

  }
  */



}
