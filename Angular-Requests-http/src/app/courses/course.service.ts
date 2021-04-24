import { tap, delay, take } from 'rxjs/operators';
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

  loadById(id: string) {
    //return this.http.get(`${this.API}/${id}`).pipe(take(1))
    return this.http.get<Course>(`${this.API}/${id}`).pipe(take(1));
  }

  create(course: Course) {
    return this.http.post(this.API, course).pipe(take(1));
  }
}



