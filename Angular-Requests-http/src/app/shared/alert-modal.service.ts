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
  // showConfirm(arg0: string, arg1: string, arg2: string, arg3: string) {
  //   throw new Error('Method not implemented.');
  // }

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

  showConfirm(title: string, msg: string, okTxt?: string, cancelTxt?: string) {
    const bsModalRef: BsModalRef = this.modalService.show(ConfirmModalComponent);
    bsModalRef.content.title = title;
    bsModalRef.content.msg = msg;

    if (okTxt) {
      bsModalRef.content.okTxt = okTxt;
    }

    if (cancelTxt) {
      bsModalRef.content.cancelTxt = cancelTxt;

    }

    return (<ConfirmModalComponent>bsModalRef.content).confirmResult;
  }

}
