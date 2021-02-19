import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup; // Representa o Formulario
  

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    /* Usando FormGroup
    this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null),
      enndereco: new FormGroup({
        cep: new FormGroup(null)
      })
    })
    */

    // Usando FormBuilder
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: [null, [Validators.email, Validators.required]],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required],
      })
      
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

  aplicaCSSDeErro(field: string) {
    return {
      'is-invalid': this.verificaIfFieldValidAndTouched(field),
      'has-feedback': this.verificaIfFieldValidAndTouched(field)
    }
  }

  verificaIfFieldValidAndTouched(field: string){
    return !this.formulario.get(field).valid && this.formulario.get(field).touched;
  }

  verificaEmailInvalido(){
    let emailField = this.formulario.get('email');


    if(emailField.errors){
      return emailField.errors['email'] && emailField.touched;
    }
  }

}
