import { EstadoBrasil } from './../models/EstadoBrasil.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }

  getEstadosBrasil(){
    return this.http.get<EstadoBrasil>('assets/dados/estadosBrasil.json') ;
  }


  getCargos(){
    return [
      {nome: 'Developer', level: 'JR I', desc: "Jr Developer I"},
      {nome: 'Developer', level: 'JR II', desc: "Jr Developer II"},
      {nome: 'Developer', level: 'JR III', desc: "Jr Developer III"},
      {nome: 'Developer', level: 'PL I ', desc: "Pleno Developer I"},
      {nome: 'Developer', level: 'PL II', desc: "Pleno Developer II"},
      {nome: 'Developer', level: 'PL III', desc: "Pleno Developer III"},
      {nome: 'Developer', level: 'SR I', desc: "Senior Developer I"},
      {nome: 'Developer', level: 'SR II', desc: "Senior Developer II"},
      {nome: 'Developer', level: 'SR III', desc: "Senior Developer III"},
    ]
  }

  getTecnologias(){
    return [
      {nome: 'java', desc: "JAVA"},
      {nome: 'net', desc: ".NET"},
      {nome: 'python', desc: "Python"},
      {nome: 'elixir', desc: "Elixir"},
      {nome: 'c', desc: "C language"},
      {nome: 'c++', desc: "C++ language"},
      {nome: 'js', desc: "Vanilla Java Script"},

    ]
  }

  getNewsletter() {
    return [
      {nome: 'y', desc: "Yes"},
      {nome: 'n', desc: "No"},
    ]
  }
}
