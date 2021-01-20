
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';

import { CursosService } from './cursos/cursos.service';
import { CriarCursoModule} from './criar-curso/criar-curso.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CriarCursoModule,
    CursosModule
  ],
  //providers: [CursosService], // Servicos sao declarado aqui, ficando disponivel (a instanciacao) para toda aplicaca pois esta em app.modules.ts
  bootstrap: [AppComponent]
})
export class AppModule { }
