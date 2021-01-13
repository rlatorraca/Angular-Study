import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css']
})
export class CicloDeVidaComponent implements OnInit, 
      OnChanges,DoCheck,AfterContentChecked,AfterContentInit, 
      AfterViewChecked {

  @Input()
  valorInicial: number = 10;

  constructor() { 
    console.log('No construtor');
  }

  ngOnInit(): void {
    console.log('No ngOnInit');
  }
  ngOnChanges() {
    console.log('No ngOnChanges') ;
  }
  ngDoCheck() {
    console.log('No ngDoCheck') ;
  }

  ngOnDestroy() {
    console.log('No ngOnDestroy') ;
  }

  ngAfterContentChecked() {
    console.log('No ngAfterContentChecked');
  }

  ngAfterContentInit() {
    console.log('No ngAfterContentInit');
  }

  ngAfterViewChecked() {
    console.log('No ngAfterViewChecked');
  }

  ngAfterViewInit() {
    console.log('No ngAfterViewInit');
  }
  
  private log(hook: string){
    console.log('Valor do hoook :' + hook)
  }

}
