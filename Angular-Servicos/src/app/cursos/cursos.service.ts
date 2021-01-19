import { Injectable } from "@angular/core";

@Injectable() // Permite a Injeccao de Dependencia em outra classe que necessite
export class CursosService {
    getCursos() {
        return ['Java 14', 'Quarkus', "Angular2 v.11"];
    }
}