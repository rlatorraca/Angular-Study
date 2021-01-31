import { AlunosDeactivateGuard } from './../guards/alunos-deactivate.guard';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosService } from './alunos.service';
import { AlunosRoutingModule } from './alunos.routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AlunosComponent } from './alunos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AlunosRoutingModule
    ],
    exports: [AlunosRoutingModule],
    declarations: [AlunosComponent, AlunoFormComponent, AlunoDetalheComponent],
    providers: [AlunosService, AlunosDeactivateGuard],
})
export class AlunosModule { }

/*
Ocomando para criar o componente AlunoDetalheComponent e associá-lo com o módulo AlunosModule seria:
ng g c 'alunos/aluno-detalhe' -m 'alunos.module'
ou
ng g c 'alunos/aluno-detalhe' --module='alunos.module'
*/