import { Component, OnInit } from '@angular/core';
import { CursosServiceService } from './cursos-service.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  
  cursos: any[]
  

  constructor(private cursosService: CursosServiceService) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }

}
