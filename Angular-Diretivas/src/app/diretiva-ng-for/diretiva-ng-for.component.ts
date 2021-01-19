import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-for',
  templateUrl: './diretiva-ng-for.component.html',
  styleUrls: ['./diretiva-ng-for.component.css']
})
export class DiretivaNgForComponent implements OnInit {

  cursos: string[] = ["Angular 10", "Java 14", "Quarkus", "JS"]

  constructor() { }

  ngOnInit(): void {
    for(let j=0; j < this.cursos.length; j++){
      let curso = this.cursos[j];
    }
  }

}
