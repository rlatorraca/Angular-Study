import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service'

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
   // providers: [CursosService]
})
export class CursosComponent implements OnInit {
  
  cursos: string[] = [];
  //cursosService: CursosService

  // Injecao de Dependencia no Angular2  é feito no construtor
  // O "private" no constructor faz com que cursosService seja 
  //    um atributo da classe CursosComponent automaticamente
  constructor(private cursosService: CursosService) { 
    /*
    this.cursosService = new CursosService(); //injecao de dependencia manual
    */
   //this.cursosService = _cursosService;
  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }


}
