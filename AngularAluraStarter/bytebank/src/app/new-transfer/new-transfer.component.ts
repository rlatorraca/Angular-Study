import { Component } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss']
})
export class NewTransferComponent {

  valor = 0 ;
  destino = 0 ;

  public transfer(): any {
    console.log('Transfering');
    console.log(this.valor);
    console.log(this.destino);
  }

}
