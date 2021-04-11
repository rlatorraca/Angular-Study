import { CourseService } from './../course.service';
import { Component, OnInit } from '@angular/core';
import { Course } from './Course';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.scss']
})
export class ListCoursesComponent implements OnInit {


  courses: Course[] = [];

  constructor(private service: CourseService) { }

  ngOnInit(): void {
    this.service.list()
     .subscribe(dados => this.courses = dados);
  }

}
