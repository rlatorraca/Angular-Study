import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosServiceService } from './cursos-service.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  
  cursos: any[]
  pagina: number;
  inscricao: Subscription;
  pagTemp: number;
  

  constructor(
      private cursosService: CursosServiceService, 
      private route: ActivatedRoute,
      private router: Router) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
    )
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  proximaPagina() {
    // this.pagina++;
    this.router.navigate(
      ['cursos'],
      { queryParams: { 'page': ++this.pagina}}
    )
  }

  paginaAnterior(){
    this.pagTemp = this.pagina;;
   
    if (this.pagTemp  > 1) {
      this.pagTemp  = --this.pagina;
    } else {
      this.pagTemp = 1
    }
    this.router.navigate(
      ['cursos'],
      { queryParams: { 'page': this.pagTemp }}
    )
  }

}
