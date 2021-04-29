import { HttpClient } from '@angular/common/http';
import { CrudService } from './../shared/crud-service';
import { Injectable } from '@angular/core';
import { Course } from './list-courses/Course';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Course2Service extends CrudService<Course>{

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}courses`);
  }

  loadByID(id: string) {
    return null;
  }
}
