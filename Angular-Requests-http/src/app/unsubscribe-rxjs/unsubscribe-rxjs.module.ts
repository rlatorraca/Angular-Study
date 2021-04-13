import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnsubscribeRxjsRoutingModule } from './unsubscribe-poc/unsubscribe-rxjs-routing.module';
import { PocAsyncComponent } from './components/poc-async.component';
import { PocTakeUntilComponent } from './components/poc-take-until.component';
import { PocUnsubComponent } from './components/poc-unsub.component';
import { PocComponent } from './components/poc.component';
import { PocBaseComponent } from './poc-base/poc-base.component';
import { UnsubscribePocComponent } from './unsubscribe-poc/unsubscribe-poc.component';
import { PocTakeComponent } from './components/poc-take.component';



@NgModule({
  imports: [
    CommonModule,
    UnsubscribeRxjsRoutingModule
  ],
  declarations: [
    UnsubscribePocComponent,
    PocComponent,
    PocAsyncComponent,
    PocTakeUntilComponent,
    PocBaseComponent,
    PocUnsubComponent,
    PocBaseComponent,
    PocTakeComponent
  ]
})
export class UnsubscribeRxjsModule { }
