import { CoursesFormComponent } from './courses-form/courses-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCoursesComponent } from './list-courses/list-courses.component';

const routes: Routes = [
  { path: '', component: ListCoursesComponent },
  { path: 'new', component: CoursesFormComponent },
  { path: 'edit/:id', component: CoursesFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
