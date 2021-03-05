import { AlunosDeactivateGuard } from './../guards/alunos-deactivate.guard';
import { CanDeactivate } from '@angular/router';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

const alunosRoutes = [
    //{ path: 'alunos', component: AlunosComponent, children: [
    { path: '', component: AlunosComponent, children: [
        { path: 'novo', component: AlunoFormComponent},
        { path: ':id', component: AlunoDetalheComponent},
        { path: ':id/edit', component: AlunoFormComponent, 
            canDeactivate: [AlunosDeactivateGuard]
        } ,
    ]},    
   
];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule{}