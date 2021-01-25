import { AlunosModule } from './alunos/alunos.modules';
import { CursosModule } from './cursos/cursos.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
//import { AlunoFormComponent } from './alunos/aluno-form/aluno-form.component';
//import { AlunoDetalheComponent } from './alunos/aluno-detalhe/aluno-detalhe.component';
//import { AlunosComponent } from './alunos/alunos.component';
//import { CursosComponent } from './cursos/cursos.component';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,

    // AlunosComponent,
    //CursosComponent,
    //CursoDetalheComponent,
    //CursoNaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    CursosModule,
    AppRoutingModule,
    AlunosModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
