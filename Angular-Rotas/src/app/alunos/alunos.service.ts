import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: any[] = [
    { id: 1, nome: 'Aline Chagas', email: 'alinechagas@gmail.com.br'},
    { id: 2, nome: 'Barbara Paz', email: 'bpaz@gmail.com.br'},
    { id: 3, nome: 'Dinomir Cantareira', email: 'dinomir@gmail.com'},
    { id: 4, nome: 'Edvaldo Robson', email: 'edrob@gmail.com.jp'},
    { id: 5, nome: 'Marcos Pinga', email: 'pinga2000@gmail.com.ca'},
    { id: 6, nome: 'Nicanor Geraldo Chagas', email: 'nica_76s@gmail.com'},
    { id: 7, nome: 'Otaviano Silva', email: 'tatasilva@gmail.com.br'},
    { id: 8, nome: 'Pedro Paulo Prachedes', email: 'ppchedes@gmail.com.br'},
    { id: 9, nome: 'Silvia Maria Quintana', email: 'smquintana@gmail.com.br'},
    { id: 10, nome: 'Xinata Pergomo', email: 'xixipergomo@gmail.com.ru'},
    

  ]

  constructor() { }

  getAlunos(){
    return this.alunos;
  }

  getAluno(id){
    for( let i=0; i < this.alunos.length; i++) {
      let aluno = this.alunos[i];
      if (aluno.id == id) {
        return aluno;
      }
    }
    return null;
  }
}
