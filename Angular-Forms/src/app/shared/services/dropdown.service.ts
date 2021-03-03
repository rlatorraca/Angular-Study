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
}
