import { EstadoBrasil } from './../shared/models/EstadoBrasil.model';
import { DropdownService } from './../shared/services/dropdown.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup; // Representa o Formulario
  estados: EstadoBrasil;

  

  constructor(private formBuilder: FormBuilder, 
              private http: HttpClient, 
              private dropDownService: DropdownService,
              private consultaService: ConsultaCepService) { }

  ngOnInit(): void {
    /* Usando FormGroup
    this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null),
      enndereco: new FormGroup({
        cep: new FormGroup(null)
      })
    })
    */

    // Populate the dropdowns
    //this.estados=[];
    this.dropDownService.getEstadosBrasil()
      .subscribe( (resposta: EstadoBrasil)=>  {     
          this.estados = resposta;
          console.log(this.estados);
        });
        
    // Usando FormBuilder
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: [null, [Validators.email, Validators.required]],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required],
      })
      
    })
  }

  consultaCEP(){

    let cep = this.formulario.get('endereco.cep').value;

    if(cep != null && cep !== ''){
    
      this.consultaService.consultaCEP(cep)
        .subscribe(dados => this.populaDadosForm(dados));
        
    }
  }

  populaDadosForm(dados){

   this.formulario.patchValue({
      endereco: {
        cep: dados.cep,
        numero: dados.numero,
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
      } 
    })
  } 

  onSubmit() {
    console.log(this.formulario.value);
    
    if(this.formulario.valid){
      this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .subscribe(dados => {
        console.log(dados)
        
        // reinicialzia o Formulario.
        //this.formulario.reset();
      },
        (error: any)=> alert('erro')
      );
    } else {
      console.log("Invalido")
      this.verificaAsValidacoesDoFormulario(this.formulario);
      
    }
   
  }

  verificaAsValidacoesDoFormulario(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(
      campo => {
        console.log(campo);
        const controle = formGroup.get(campo);
        controle.markAsDirty();        
        if (controle instanceof FormGroup){
          this.verificaAsValidacoesDoFormulario(controle);
        }
      }
    );
  }

  resetarForm(){
    this.formulario.reset();
  }

  aplicaCSSDeErro(field: string) {
    return {
      'is-invalid': this.verificaIfFieldValidAndTouched(field),
      'has-feedback': this.verificaIfFieldValidAndTouched(field)
    }
  }

  verificaIfFieldValidAndTouched(field: string){
    return !this.formulario.get(field).valid && (this.formulario.get(field).touched || this.formulario.get(field).dirty);
  }

  verificaEmailInvalido(){
    let emailField = this.formulario.get('email');


    if(emailField.errors){
      return emailField.errors['email'] && emailField.touched;
    }
  }

}
