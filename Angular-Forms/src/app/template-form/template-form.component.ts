import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form) {
    console.log(this.usuario);
  }

}
