import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExamplesPipesComponent } from './examples-pipes/examples-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';

import { SettingsService } from './settings.service'

import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { FiltroArrayPipe } from './filtro-array.pipe';
import { FormsModule } from '@angular/forms';
registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    ExamplesPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    // Por harding code
    // {
    //   provide: LOCALE_ID, 
    //   useValue: 'pt-BR'
    // }

    // Por Servico
    SettingsService,
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: (settingsService) => settingsService.getLocale()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
