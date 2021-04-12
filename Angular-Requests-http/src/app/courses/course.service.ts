import { tap, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from './list-courses/Course';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  //private readonly API = `http://localhost:3000/courses`;
  private readonly API = `${environment.API}courses`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Course[]>(this.API)
      .pipe(
        delay(3000),
        tap(console.log)
      );
  }
}



