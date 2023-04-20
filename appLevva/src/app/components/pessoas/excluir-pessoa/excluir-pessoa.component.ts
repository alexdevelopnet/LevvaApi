import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-excluir-pessoa',
  templateUrl: './excluir-pessoa.component.html',
  styleUrls: ['./excluir-pessoa.component.css']
})
export class ExcluirPessoaComponent implements OnInit {

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
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((pessoa) => {
      this.pessoa = pessoa
    })
  }

    excluirPessoa() {
      if (this.pessoa.id) {
        this.service.excluir(this.pessoa.id).subscribe(() => {
          this.router.navigate(['/listarPessoa'])
        })
      }
    }
    cancelar() {
      this.router.navigate(['/'])
    }
  }
