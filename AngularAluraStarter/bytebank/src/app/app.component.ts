import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  transfered: any;

  public view($event: any): void{
    console.log($event);
    this.transfered = $event;

  }



}
