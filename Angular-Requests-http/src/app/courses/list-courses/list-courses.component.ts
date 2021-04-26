import { AlertModalService } from './../../shared/alert-modal.service';
import { Observable, Subject } from 'rxjs';
import { CourseService } from './../course.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Course } from './Course';
import { catchError, delay, switchMap, take } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { Location } from '@angular/common';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModelComponent } from 'src/app/shared/alert-model/alert-model.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.scss']
})
export class ListCoursesComponent implements OnInit {

  //bsModalRef: BsModalRef;
  deleteModalRef: BsModalRef;

  @ViewChild('deleteModal') deleteModal: any;
  //@ViewChild('deleteModal', { static: true }) deleteModal:any;

  //courses: Course[] = [];
  courses$!: Observable<Course[]>;
  error$ = new Subject<boolean>();

  courseSelected : Course;

  constructor(private service: CourseService,
    private alertModalService: AlertModalService,
    private router: Router,
    private location: Location,
    private route: ActivatedRoute,
    private modalService: BsModalService
  ) {

  }

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
          //this.error$.next(true);
          this.handle_Error();
          return EMPTY;
        })
      );

    // this.service.list().subscribe(
    //   data => { console.log(data) },
    //   error => console.error(error),
    //   () => console.log('Observable complete!')

    // );
  }

  handle_Error() {
    this.alertModalService.showAlertDanger('Error loading course(s) / program(s). You could try later.');
    //this.bsModalRef = this.modalService.show(AlertModelComponent);
    //this.bsModalRef.content.type = 'danger';
    //this.bsModalRef.content.message = 'Error loading course(s) / program(s). You could try later.';
  }

  onEdit(id: any) {
    this.router.navigate(['edit', id], { relativeTo: this.route })
  }

  onDelete(course: Course) {
    this.courseSelected = course;
    //this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'});
    const result$ = this.alertModalService.showConfirm('Confirm', 'Do you want to DELETE course / program?', 'Yes', 'Cancel')
    result$.asObservable()
      .pipe(
        take(1),
        switchMap(result => result ?  this.service.delete(this.courseSelected) : EMPTY)
      ).subscribe(
        success => {
          this.onRefresh();
        },
        error => {
          this.alertModalService.showAlertDanger('Error DELETING course(s) / program(s). You could try later.');
        },
       
      );
  }

  onConfirmDelete() {
    this.service.delete(this.courseSelected)
    .subscribe(
      success => {
        this.onRefresh();
        this.alertModalService.showAlertSuccess("Successfully Deleted");
        this.deleteModalRef.hide();
      },
      error => {
        this.alertModalService.showAlertDanger('Error DELETING course(s) / program(s). You could try later.');
        this.deleteModalRef.hide();
      },
      () => console.log('DELETING is complete')
    );
  }

  onDeclineDelete(){
    this.deleteModalRef.hide();
  }

}
