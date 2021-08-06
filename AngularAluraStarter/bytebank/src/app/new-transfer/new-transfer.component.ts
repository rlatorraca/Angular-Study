import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionService } from './../services/transaction.service';


@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss']
})
export class NewTransferComponent {

  @Output() toView = new EventEmitter<any>(); // Propage the data to other component

  value: number ;
  destination: number ;

  constructor(private service: TransactionService, private router: Router) {}

  public transfer(): any {
    const valuesToView = { value: this.value, destination: this.destination };
    /*
    this.toView.emit(valuesToView);
    this.eraseFields();
    */

    this.service.addTransactions(valuesToView).subscribe(
      (result) => {
        console.log(result),
        this.toView.emit(result);
        this.eraseFields();
        this.router.navigateByUrl('view');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public eraseFields(): void {
    this.value = 0;
    this.destination = 0;
  }

}
