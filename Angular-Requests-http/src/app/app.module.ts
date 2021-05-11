import { UploadFileModule } from './upload-file/upload-file.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesModule } from './courses/courses.module';
import { UnsubscribeRxjsModule } from './unsubscribe-rxjs/unsubscribe-rxjs.module';
import { SharedModule } from './shared/shared.module';

import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoursesModule,
    HttpClientModule,
    UnsubscribeRxjsModule,
    SharedModule,
    ModalModule.forRoot(),
    UploadFileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
