import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModelComponent } from './alert-model/alert-model.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

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
    this.showAlert(message, AlerTypes.SUCCESS, 2000);
  }

  private showAlert(message: string, type: string, dismissTimeout?: number) {
    const bsModalRef: BsModalRef = this.modalService.show(AlertModelComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;

    if (dismissTimeout) {
      setTimeout(() => bsModalRef.hide(), dismissTimeout);
    }
  }

  showConfirm(title: string, msg: string, okBtn?: string, cancelBtn?: string) {
    const bsModalRef: BsModalRef = this.modalService.show(ConfirmModalComponent);

    bsModalRef.content.title = title;
    bsModalRef.content.msg = msg;

    if(okBtn){
      bsModalRef.content.okBtn = okBtn;
    }

    if(cancelBtn){
      bsModalRef.content.cancelBtn = cancelBtn;
    }

    return (<ConfirmModalComponent>bsModalRef.content).confirmResult;
  }
}
