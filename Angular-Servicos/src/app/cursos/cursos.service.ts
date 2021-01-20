import { Injectable } from "@angular/core";

@Injectable() // Permite a Injeccao de Dependencia em outra classe que necessite
export class CursosService {

    private cursos: string[] = ['Java 14', 'Quarkus', "Angular2 v.11"];


    constructor(){
        console.log("Construtor da CursoService")
    }

    getCursos() {
        return this.cursos;
    }

    addCurso(curso: string){
        this.cursos.push(curso);
    }
}