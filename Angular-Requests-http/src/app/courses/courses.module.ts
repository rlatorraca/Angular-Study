import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { UnsubscribeRxjsModule } from '../unsubscribe-rxjs/unsubscribe-rxjs.module';


@NgModule({
  declarations: [
    ListCoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    UnsubscribeRxjsModule
  ]
})
export class CoursesModule { }
