import { Component, OnInit, Input, Output } from '@angular/core';



@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.css']
  styles: [
    `
    .marcarDesmarcar {
      background-color: yellow;
      font-weight: bold;
    }
    `
  ]
})
export class DataBindingComponent implements OnInit {

  url: string = "http://www.rlsp.com.br";
  urlImagem: string = "https://homepages.cae.wisc.edu/~ece533/images/airplane.png";
  cursoAngular: boolean = true;
  valorDaEntradaTexto: string;
  valorSalvo: string;
  isMouseOver: boolean;
  nome: string = "Joãozinho";
  nomeDoCurso: string = "Angular 11";
  valorInicial: number = 10;

 
  valorMostrado: number = this.valorInicial;

  pessoa: any = {
    nome: 'Renato',
    idade: 33
  }

  aoMudarValor(evento){
    console.log(evento.novoValor);
    this.valorMostrado = evento.novoValor;
    
  }

  onMouseOverOuOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  botaoClicado(){
    alert("O botao foi clicado usando Event Binding");
  }

  mostreNoConsoleAoDigitar(evento: KeyboardEvent){
    this.valorDaEntradaTexto = (<HTMLInputElement>evento.target).value;

  }

  salvarValorDigitado(valor){
    this.valorSalvo = valor;
  }


  getCurtiuCurso(){
    return true;
  }

  getValor(x,y){
    return x+y;
  }

  constructor() { }

  ngOnInit(): void {

  }

}
