import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
  //outputs: ['mudouValor']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;
  @Input() valorSaida: number = 0;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput')
  campoValorInput: ElementRef;
  //campoValorInput: HTMLElement;
  
  incrementar(){
    console.log(this.campoValorInput.nativeElement.value);
    this.campoValorInput.nativeElement.value++
    //this.valor++;
    //this.mudouValor.emit({ novoValor: this.valor});
  }

  decrementar(){
    if(this.valor > 0 ) {
      //this.valor--;
      console.log(this.campoValorInput.nativeElement.value);
      this.campoValorInput.nativeElement.value++

    } else {
      this.valor=0;
    }
    this.mudouValor.emit({ novoValor: this.valor});
  }

  constructor() { }

  ngOnInit(): void {
  }

}
