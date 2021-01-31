import { AlunoFormComponent } from './../alunos/aluno-form/aluno-form.component';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { IFormaCanDeactivate } from './iform.canDeactivate';


@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IFormaCanDeactivate> {
        
        canDeactivate(
            component: IFormaCanDeactivate,
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {
            console.log("Acionado Deactivate Guarda de rotas")
            
            //return component.podeMudarRota ? component.podeMudarRota() : true;
            return component.podeDesativar ? component.podeDesativar() : true;
    }
}
