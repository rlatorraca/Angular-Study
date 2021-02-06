import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  
  usuario: any = {
    nome: "Rodrigo",
    email: "rodrigo@email.com.ca"
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(form) {
    console.log(this.usuario);
    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
      .subscribe(dados => console.log(dados));
  }

  verificaIfFieldValidAndTouched(field){
    return !field.valid && field.touched;
  }

  aplicaCSSDeErro(field) {
    return {
      'is-invalid': this.verificaIfFieldValidAndTouched(field),
      'has-feedback': this.verificaIfFieldValidAndTouched(field)
    }
  }

  consultCEP(cep, form){

    // Nova variavvel cep somente com digitos
    cep = cep.replace(/\D/g, '');

    //Verifica se o campo CEP possui valior inforamdo
    if(cep != "") {

      this.resetaDadosForm(form);
      // Expressao para validar o CEP
      var validaCEP = /^[0-9]{8}$/;

      //Valida o formato do CEP
      if (validaCEP.test(cep)){

        this.http.get(`https://viacep.com.br/ws/${cep}/json`)
            .subscribe(dados => this.populaDadosForma(dados, form)); 
        
      }

    }
  }

  populaDadosForma(dados, formulario){

    /*
    formulario.setValue({
      nome: formulario.value.nome,
      email: formulario.value.email,
      endereco: {
        cep: dados.cep,
        numero: '',
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      } 
    }); */

    formulario.form.patchValue({
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

  resetaDadosForm(formulario){

    formulario.form.patchValue({
      endereco: {
        cep: null,
        complemento: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null
      } 
    });
    
  }
}
