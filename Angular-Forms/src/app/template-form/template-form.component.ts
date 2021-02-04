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

  verificaIfFieldValidAndTouched(field){
    return !field.valid && field.touched;
  }

  aplicaCSSDeErro(field) {
    return {
      'is-invalid': this.verificaIfFieldValidAndTouched(field),
      'has-feedback': this.verificaIfFieldValidAndTouched(field)
    }
  }

}
