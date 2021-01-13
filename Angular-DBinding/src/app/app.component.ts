import { Component } from '@angular/core';

import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding';

  valor: number = 5;
  destruir: boolean = false;

  mudarValor(){
    this.valor++;
  }

  constructor() {
    setTheme('bs4'); // or 'bs3'
  }

  destruirView(){
    this.destruir = true;
  }
}