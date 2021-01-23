import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Conta as rotas de toda aplicacao
  exports: [RouterModule]
})
export class AppRoutingModule { }
