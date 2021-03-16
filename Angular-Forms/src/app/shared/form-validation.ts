import { FormArray, FormControl, FormGroup } from "@angular/forms";

export class FormValidation {

  static requiredMinCheckbox(min = 1) {
    const validator = (formArray: FormArray) => {
      /* Programacao Estruturada
      const values = formArray.controls;
      let totalCheckecd = 0;
      for (let i = 0; i < values.length; i++){
        if (values[i].value){
          totalCheckecd += 1;
        }
      }
      return totalCheckecd >= min ? null : { required: true }; */


      /* Programacao Funcional */
      const totalCheckecd = formArray.controls
        .map(v => v.value)
        .reduce((total, current) => current ? (total + current) : total, 0);
      return totalCheckecd >= min ? null : { required: true };
    };
    return validator;
  }

  static cepValidator(control: FormControl) {

    const cep = control.value;
    if (cep && cep != '') {
      const validacep = /^[0-9]{8}$/;
      return validacep.test(cep) ? null : { cepInvalido: true };
    }

    return null
  }

  static equalsTo(otherfield: string) {
    const validator = (formControl: FormControl) => {

      if (otherfield == null) {
        throw new Error("It is mandatory informa a field to compare");
      }

      if (!formControl.root || !(<FormGroup>formControl.root).controls) {
        return null
      }

      const field = (<FormGroup>formControl.root).get(otherfield);

      if (!field) {
        throw new Error('It is need to informa valid field');
      }
      console.log(field.value);
      console.log(formControl.value);

      if (field.value !== formControl.value) {
        return { equalsTo: otherfield };
      }
      return validator;
    };

    return validator;
  }

  static getErrorMessage(fieldName: string, validatorName: string, validatorValue?: any) {
    const config = {
      'required': `${fieldName} is mandatory.`,
      'minlength': `${fieldName} needs at least ${validatorValue.requiredLength} characters.`,
      'maxlength': `${fieldName} can have maximum ${validatorValue.requiredLength} characters.`,
      'cepInvalido': 'CEP inválido.'
    }
    return config[validatorName];

  }
}