import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      nome: [null],
      email: [null]
    })
  }

  onSubmit() {
    console.log(this.formulario.value);
    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
    .subscribe(dados => {
      console.log(dados)
      
      // reinicialzia o Formulario.
      this.formulario.reset();
    },
      (error: any)=> alert('erro')
    );
  }

  resetarForm(){
    this.formulario.reset();
  }

}
