import { HttpClient } from '@angular/common/http';
import { DropdownService } from './services/dropdown.service';
import { FieldControlErroComponent } from './field-control-erro/field-control-erro.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    FormDebugComponent,
    FieldControlErroComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FormDebugComponent,
    FieldControlErroComponent   
  ],
  providers:[ DropdownService ]
})
export class SharedModule { }
