import { PessoaService } from '../pessoa.service';
import { Pessoa } from '../pessoa';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-criar-pessoa',
  templateUrl: './criar-pessoa.component.html',
  styleUrls: ['./criar-pessoa.component.css']
})
export class CriarPessoaComponent implements OnInit {

  formulario!: FormGroup;


  pessoa: Pessoa = {
    id: 0,
    cpf: '',
    nome: '',
    sobreNome: '',
    nacionalidade: '',
    logradouro: '',
    cep: '',
    estado: '',
    cidade: '',
    email: '',
    telefone: ''
  }
   
  constructor(
    private service: PessoaService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {

  }
  criarPessoa() {
    console.log(this.formulario);
    if (this.formulario.valid) {
      this.service.criar(this.pessoa).subscribe(() => {
        this.router.navigate(['/listarpessoa'])
      })
    }
  }
  cancelar() {
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
     
    nome:[''] ,
    sobrenome: [''],
    nacionalidade:[''],
    logradouro: [''],
    cep: ['',Validators.compose([
      Validators.required,
      Validators.pattern(/^[0-9]{5}-[0-9]{3}$/)
      
    ])],
    estado: [''],
    cidade: [''],
    email: [''],
    telefone: [''],
       
      
      
    })

  }

  consultarCep(ev: any, f: NgForm) {
    const cep = ev.target.value;
    if (cep !== "") {
      this.service.getConsultarCep(cep).subscribe((resultado) => {
        console.log(resultado);
        this.populandoEndereco(resultado, f);
      });
    }
  }

  populandoEndereco(dados: any, f: NgForm) {
    f.form.patchValue({
      logradouro: dados.logradouro,
      complemento: dados.complemento,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf,

    })
  }


}


