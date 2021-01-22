import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples-pipes',
  templateUrl: './examples-pipes.component.html',
  styleUrls: ['./examples-pipes.component.css']
})
export class ExamplesPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Learning JavaScript in 24 hours',
    rating: 4.989232,
    numeroPaginas: 889,
    preco: 121.55,
    dataLancamento: new Date(2018, 5, 23),
    url: 'http://www.amazon.ca/books'
  };

  livros: string[] = ['Java 15', 'Next JS', 'Angular 11']

  filtro: string;

  constructor() { }

  ngOnInit(): void {
  }

  addCurso(novoCurso){
    this.livros.push(novoCurso);
  }

  obterCursos() {

    if(this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === '') {
      return this.livros;
    } else {
      return this.livros.filter(
        (v) => v.toLocaleLowerCase().includes((this.filtro.toLocaleLowerCase()))
      );
    }
   
  }

}
