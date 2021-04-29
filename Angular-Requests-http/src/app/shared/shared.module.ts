import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModelComponent } from './alert-model/alert-model.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';



@NgModule({
  declarations: [
    AlertModelComponent,
    ConfirmModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertModelComponent
  ],
  entryComponents: [AlertModelComponent]
})
export class SharedModule { }
