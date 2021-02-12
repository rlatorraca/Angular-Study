import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup; // Representa o Formulario
  

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      nome: [null],
      email: [null]
    })
  }

}
