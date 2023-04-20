import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaService } from '../pessoa.service';
import { Pessoa } from '../pessoa';

import { Form, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cep } from './Cep';
import { Dados } from './Dados';

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
  cep: Cep = {
    cep: 'string',
    logradouro: 'string',
    complemento: 'string',
    bairro: 'string',
    localidade: 'string',
    uf: 'string',
    unidade: 'string',
    ibge: 'string',
    gia: 'string',
    erro: false
  }


  constructor(
    private service: PessoaService,
    private router: Router,
    private route: ActivatedRoute,
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



}


