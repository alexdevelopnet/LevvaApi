import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaService } from '../pessoa.service';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-criar-pessoa',
  templateUrl: './criar-pessoa.component.html',
  styleUrls: ['./criar-pessoa.component.css']
})
export class CriarPessoaComponent implements OnInit {

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

  ngOnInit(): void {

  }
  constructor(
    private service: PessoaService,
    private router: Router

  ) {
 
  }
  criarPessoa() {
    this.service.criar(this.pessoa).subscribe(() => {
      this.router.navigate(['/listarpessoa'])
    })
  }

  cancelar() {
    this.router.navigate(['/'])
  }
}
