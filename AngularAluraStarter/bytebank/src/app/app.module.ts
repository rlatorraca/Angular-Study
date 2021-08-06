import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewTransferComponent } from './new-transfer/new-transfer.component';
import { ShowTransferComponent } from './show-transfer/show-transfer.component';
import localeCAFr from '@angular/common/locales/fr-CA';

registerLocaleData( localeCAFr, 'fr-CA' );

@NgModule({
  declarations: [
    AppComponent,
    NewTransferComponent,
    ShowTransferComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-CA'},
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'CA$'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
