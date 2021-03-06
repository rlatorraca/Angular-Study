import { AlunosService } from './../alunos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IFormaCanDeactivate } from 'src/app/guards/iform.canDeactivate';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, IFormaCanDeactivate {

  aluno: any;
  inscricao: Subscription;
  private formMudou: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService,
  ) { }



  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunosService.getAluno(id);
        console.log(this.aluno.nome);

        if (this.aluno === null){
          this.aluno= {};
        }
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  onInput(){
    this.formMudou = true;
    console.log("Form Aluno mudou o nome");
  }

  podeMudarRota() {
    if(this.formMudou){
      confirm("Tem certeza que seja sair dessa página?")
    }

    return true;
  }

  podeDesativar() {
    this.podeMudarRota();
  }

}
