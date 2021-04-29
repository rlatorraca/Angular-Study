import { AlertModalService } from './../../shared/alert-modal.service';
import { CourseService } from './../course.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { concatMap, map, switchMap } from 'rxjs/operators';
import { Course2Service } from '../course2.service';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.scss']
})
export class CoursesFormComponent implements OnInit {

  form: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder,
    private service: Course2Service,
    private modal: AlertModalService,
    private location: Location,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    // this.route.params.subscribe(
    //   (params: any) => {
    //     const id = params['id'];
    //     const course$ = this.service.loadById(id);
    //     course$.subscribe(course => {
    //       this.updateForm(course);
    //     });
    //   }

    // )

    // this.route.params
    //   .pipe(
    //     map((params: any) => params['id']),
    //     switchMap((id: string) => this.service.loadById(id))
    //     //switchMap((course => obterAulas(id))

    //     // concatMap => ordem da requisicao importa
    //     // mergeMap => ordem nao importa
    //     // exhaustMap => casos de login (solicita e espera a resposta)
    //   )
    //   .subscribe(course => this.updateForm(course));


    const course = this.route.snapshot.data['course'];


    this.form = this.fb.group({
      id: [course.id],
      name: [course.name, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    });

  }

  // updateForm(course: any) {
  //   this.form.patchValue({
  //     id: course.id,
  //     name: course.name
  //   })
  // }

  get name() { return this.form.get('name'); }

  hasError(field: string) {
    return this.form.get(field)?.errors;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid) {

      let msgSuccess = 'Good job! Course / Program CREATED successfully';
      let msgSError = 'Oops...some wrong when CREATING a course / program';

      if (this.form.value.id) {
        msgSuccess = 'Good job! Course / Program UPDATED successfully';
        msgSError = 'Oops...some wrong when UPDATING a course / program'
      }

      this.service.save(this.form.value).subscribe(
        success => {
          this.modal.showAlertSuccess(msgSuccess);
          this.location.back();
        },
        error => this.modal.showAlertDanger(msgSError),
        () => console.log('Updating is complete')
      );

      /*
    if (this.form.valid) {
      if(this.form.value.id) {
        // Update Course
        this.service.update(this.form.value).subscribe(
          success => {
            this.modal.showAlertSuccess('Good job! Course / Program updated successfully');
            this.location.back();
          },
          error => this.modal.showAlertDanger('Oups...some wrong when updating a course / program'),
          () => console.log('Updating is complete')
        );
      } else {
        // Create Course
        this.service.create(this.form.value).subscribe(
          success => {
            this.modal.showAlertSuccess('Good job! Course / Program created');
            this.location.back();
          },
          error => this.modal.showAlertDanger('Oups...some wrong when creating a course / program'),
          () => console.log('Creating is complete')
        );
      }
      */
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
    console.log('onCancel');
  }

}
