import { AlunosGuard } from './guards/alunos.guard';
import { CursosGuard } from './guards/curso.auth';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
//import { CursosComponent } from './cursos/cursos.component';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

const routes: Routes = [
  {path: 'cursos', 
    loadChildren: () => import ('./cursos/cursos.module').then(m => m.CursosModule),
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard],
  },
  {path: 'alunos', 
    loadChildren: () => import ('./alunos/alunos.module').then(m => m.AlunosModule),
    canActivate: [AuthGuard] ,
    canActivateChild: [AlunosGuard],
  },
  //{path: 'curso/:id', component: CursoDetalheComponent},
  {path: 'login', component: LoginComponent},
  //{path: 'naoencontrado', component: CursoNaoEncontradoComponent}
  {path: '', 
    component: HomeComponent,
    canActivate: [AuthGuard]  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Conta as rotas de toda aplicacao
  exports: [RouterModule]
})
export class AppRoutingModule { }
