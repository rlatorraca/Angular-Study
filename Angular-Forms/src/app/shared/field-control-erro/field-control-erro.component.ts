import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-control-erro',
  templateUrl: './field-control-erro.component.html',
  styleUrls: ['./field-control-erro.component.css']
})
export class FieldControlErroComponent implements OnInit {

  @Input() mostraErro: boolean;
  @Input() msgErro: string;


  constructor() { }

  ngOnInit(): void {
  }

}
