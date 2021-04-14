import { Observable, Subject } from 'rxjs';
import { CourseService } from './../course.service';
import { Component, OnInit } from '@angular/core';
import { Course } from './Course';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.scss']
})
export class ListCoursesComponent implements OnInit {


  //courses: Course[] = [];
  courses$!: Observable<Course[]>;
  error$ = new Subject<boolean>();

  constructor(private service: CourseService) { }

  ngOnInit(): void {
    //this.service.list()
    // .subscribe(data => this.courses = data);
    this.onRefresh();

  }

  onRefresh() {
    this.courses$ = this.service.list()
      .pipe(
        catchError(error => {
          console.error(error);
          this.error$.next(true);
          return EMPTY;
        })
      );

    this.service.list().subscribe(
      data => { console.log(data) },
      error => console.error(error),
      () => console.log('Observable complete!')

    );
  }

}
