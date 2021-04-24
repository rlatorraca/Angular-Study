import { Course } from './../list-courses/Course';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CourseService } from '../course.service';

@Injectable({
  providedIn: 'root'
})
export class CourseResolverGuard implements Resolve<Course> {
  constructor(private service: CourseService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }

    return of({
      id: undefined,
      name: undefined
    });
  }
}
