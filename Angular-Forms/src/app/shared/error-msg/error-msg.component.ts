import { FormValidation } from './../form-validation';
import { FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css']
})
export class ErrorMsgComponent implements OnInit {

  //@Input() mostraErro: boolean;
  //@Input() msgErro: string;

  @Input() control: FormControl;
  @Input() labelField: string;

  constructor() { }

  ngOnInit(): void {

  }

  get errorMesssage() {

    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return FormValidation.getErrorMessage(this.labelField, propertyName, this.control.errors[propertyName])
      }
    }
    return null;
  }

}
