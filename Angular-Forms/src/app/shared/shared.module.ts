import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DropdownService } from './services/dropdown.service';
import { FieldControlErroComponent } from './field-control-erro/field-control-erro.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ErrorMsgComponent } from './error-msg/error-msg.component';



@NgModule({
  declarations: [
    FormDebugComponent,
    FieldControlErroComponent,
    ErrorMsgComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    FormDebugComponent,
    FieldControlErroComponent,
    ErrorMsgComponent
  ],
  providers: []
})
export class SharedModule { }
