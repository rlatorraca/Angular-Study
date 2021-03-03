import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EstadoBrasil } from '../models/EstadoBrasil.model';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }

  getEstadosBrasil(){
    return this.http.get('assets/dados/estadosBrasil.json') ;
  }
}
