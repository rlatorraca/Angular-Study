import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModelComponent } from './alert-model/alert-model.component';

export enum AlerTypes {
  DANGER = 'danger',
  SECONDARY = 'secondary',
  PRIMARY = 'primary',
  WARNING = 'warning',
  INFO = 'info',
  LIGHT = 'light',
  DARK = 'dark',
  SUCCESS = 'success'

};

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  constructor(private modalService: BsModalService) { }

  showAlertDanger(message: string) {
    this.showAlert(message, AlerTypes.DANGER);
  }

  showAlertSuccess(message: string) {
    this.showAlert(message, AlerTypes.SUCCESS);
  }

  private showAlert(message: string, type: string) {
    const bsModalRef: BsModalRef = this.modalService.show(AlertModelComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;
  }

}
