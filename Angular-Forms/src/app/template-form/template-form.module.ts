import { SharedModule } from './../shared/shared.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormDebugComponent } from '../shared/form-debug/form-debug.component';
import { TemplateFormComponent } from './template-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FieldControlErroComponent} from '../shared/field-control-erro/field-control-erro.component'

@NgModule({
  declarations: [
    TemplateFormComponent,
    
  ],
  imports: [    
    CommonModule,
    FormsModule, 
    HttpClientModule,
    SharedModule
  ]
})
export class TemplateFormModule { }
