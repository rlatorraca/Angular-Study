import { FormDebugComponent } from './../form-debug/form-debug.component';
import { TemplateFormComponent } from './template-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FieldControlErroComponent} from '../field-control-erro/field-control-erro.component'

@NgModule({
  declarations: [
    TemplateFormComponent,
    FormDebugComponent,
    FieldControlErroComponent,
  ],
  imports: [    
    CommonModule,
    FormsModule,
   
    
  ]
})
export class TemplateFormModule { }
