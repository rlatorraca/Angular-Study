import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  transfereds: any[] = [];

  public view($event: any): void{
    console.log($event);
    const transfer = { ...$event, date: new Date()};
    this.transfereds.push(transfer);

  }



}
