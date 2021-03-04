import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(private http: HttpClient) { }

  consultaCEP(cep: string){

    //let cep = this.formulario.get('endereco.cep').value;
    // Nova variavvel cep somente com digitos
    cep = cep.replace(/\D/g, '');
    console.log(cep)

    //Verifica se o campo CEP possui valior inforamdo
    if (cep != "") {

      //this.resetaDadosForm(form);
      // Expressao para validar o CEP
      var validaCEP = /^[0-9]{8}$/;

      //Valida o formato do CEP
      if (validaCEP.test(cep)){
        
       return this.http.get(`https://viacep.com.br/ws/${cep}/json`);
        
      }

    }

    return of({})
  }

}
