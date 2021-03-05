import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";


@Injectable()
export class AlunosGuard implements CanActivateChild{

        canActivateChild(
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {
            //return this.permissions.canActivate(this.currentUser, route.params.id);

            //console.log(route);
            //console.log(state);


            if (state.url.includes('edit')) {
                //alert('Usuário sem permissão de edição');
                //return false;
            }
            return true;
        }
}