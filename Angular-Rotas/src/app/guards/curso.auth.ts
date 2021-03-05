import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";


@Injectable()
export class CursosGuard implements CanActivateChild{

        canActivateChild(
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {
            //return this.permissions.canActivate(this.currentUser, route.params.id);
            return true;
        }
}
