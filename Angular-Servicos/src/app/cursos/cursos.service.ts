
import { Injectable , EventEmitter} from "@angular/core";

import { LogService } from "../shared/log.service";


@Injectable() // Permite a Injeccao de Dependencia em outra classe que necessite
export class CursosService {

    private cursos: string[] = ['Java 14', 'Quarkus', "Angular2 v.11"];

    emitirCursoCriado = new EventEmitter();
    static criouNovoCurso = new EventEmitter(); // Static => nao precisa instanciar para acessa-lo



    constructor(private logService: LogService){
        console.log("Construtor da CursoService")
    }

    getCursos() {
        this.logService.consoleLog("Pegando a Lista de Cursos")
        return this.cursos;
    }

    addCurso(curso: string){
        this.logService.consoleLog(`Criando um novo curso de nome : ${curso}`);
        this.cursos.push(curso);
        //this.emitirCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso);
    }
}