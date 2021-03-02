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

  consultaCEP(){

    let cep = this.formulario.get('endereco.cep').value;
    // Nova variavvel cep somente com digitos
    cep = cep.replace(/\D/g, '');

    //Verifica se o campo CEP possui valior inforamdo
    if (cep != "") {

      //this.resetaDadosForm(form);
      // Expressao para validar o CEP
      var validaCEP = /^[0-9]{8}$/;

      //Valida o formato do CEP
      if (validaCEP.test(cep)){

        this.http.get(`https://viacep.com.br/ws/${cep}/json`)
            .subscribe(dados => this.populaDadosForm(dados)); 
        
      }

    }
  }

  populaDadosForm(dados){

   this.formulario.patchValue({
      endereco: {
        cep: dados.cep,
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      } 
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
