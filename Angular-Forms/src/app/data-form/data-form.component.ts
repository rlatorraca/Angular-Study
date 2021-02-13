import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup; // Representa o Formulario
  

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: [null, [Validators.email, Validators.required]]
    })
  }

  onSubmit() {
    console.log(this.formulario.value);
    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
    .subscribe(dados => {
      console.log(dados)
      
      // reinicialzia o Formulario.
      //this.formulario.reset();
    },
      (error: any)=> alert('erro')
    );
  }

  resetarForm(){
    this.formulario.reset();
  }

  aplicaCSSDeErro(field) {
    return {
      'is-invalid': this.verificaIfFieldValidAndTouched(field),
      'has-feedback': this.verificaIfFieldValidAndTouched(field)
    }
  }

  verificaIfFieldValidAndTouched(field){
    return !this.formulario.get(field).valid && this.formulario.get(field).touched;
  }

  verificaEmailInvalido(){
    let emailField = this.formulario.get('email');


    if(emailField.errors){
      return emailField.errors['email'] && emailField.touched;
    }
  }

}
