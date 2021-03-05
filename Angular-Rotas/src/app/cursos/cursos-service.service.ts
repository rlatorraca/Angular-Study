import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosServiceService {

  constructor() { }

  getCursos() {
    return [
      {id: 1, nome: 'Angular2'},
      {id: 2, nome: 'C++'},
      {id: 3, nome: 'Delphi'},
      {id: 4, nome: 'Erlang'},
      {id: 5, nome: 'F++'},
      {id: 6, nome: 'Java 16'},
      {id: 7, nome: 'PHP'},
      {id: 8, nome: 'Python'},
      {id: 9, nome: '.NET Core'}
    ]
  }

  getCurso(id: number){
    let cursos = this.getCursos();
    
    for (const c of cursos) {
      let curso = c;
      if(curso.id == id) {
        return curso;
      }
    }
    return null;
  }
}
