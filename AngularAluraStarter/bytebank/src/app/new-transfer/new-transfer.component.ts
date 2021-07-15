import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss']
})
export class NewTransferComponent {

  @Output() toView = new EventEmitter<any>(); // Propage the data to other component

  value: number ;
  destination: number ;

  public transfer(): any {
    const valuesToView = { value: this.value, destination: this.destination };
    this.toView.emit(valuesToView);
    this.cleanFields();
  }

  public cleanFields(): void {
    this.value = 0;
    this.destination = 0;
  }

}
