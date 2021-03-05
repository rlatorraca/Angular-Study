import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';

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

  constructor(private http: HttpClient, 
              private consultaService: ConsultaCepService) { }

  ngOnInit(): void {
  }

  onSubmit(formulario) {
    console.log(this.usuario);
    this.http.post('https://httpbin.org/post', JSON.stringify(formulario.value))
      .subscribe(dados => {
        console.log(dados)
      
        // reinicializar o formulario
        formulario.form.reset();
      });
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
    if(cep != null && cep !== ''){
      this.consultaService.consultaCEP(cep)
            .subscribe(dados => this.populaDadosForma(dados, form)); 
        
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
