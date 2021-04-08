import { FormArray, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-form',
  template: '<div></div>',
})
export abstract class BaseFormComponent implements OnInit {

  formulario: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  abstract submit();

  onSubmit() {
    if (this.formulario.valid) {
      this.submit();
    } else {
      console.log("Invalido")
      this.verificaAsValidacoesDoFormulario(this.formulario);

    }
  }

  verificaAsValidacoesDoFormulario(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach(
      campo => {
        console.log(campo);
        const controle = formGroup.get(campo);
        controle.markAsDirty();
        controle.markAsTouched();
        if (controle instanceof FormGroup || controle instanceof FormArray) {
          this.verificaAsValidacoesDoFormulario(controle);
        }
      }
    );
  }

  resetarForm() {
    this.formulario.reset();
  }

  verificaEmailInvalido() {
    let emailField = this.formulario.get('email');


    if (emailField.errors) {
      return emailField.errors['email'] && emailField.touched;
    }
  }

  verificaRequired(field: string) {
    return (
      this.formulario.get(field).hasError('required') &&
      (this.formulario.get(field).touched || this.formulario.get(field).dirty)
    );
  }

  aplicaCSSDeErro(field: string) {
    return {
      'is-invalid': this.verificaIfFieldValidAndTouched(field),
      'has-feedback': this.verificaIfFieldValidAndTouched(field)
    }
  }

  verificaIfFieldValidAndTouched(field: string) {
    return !this.formulario.get(field).valid && (this.formulario.get(field).touched || this.formulario.get(field).dirty);
  }




}
