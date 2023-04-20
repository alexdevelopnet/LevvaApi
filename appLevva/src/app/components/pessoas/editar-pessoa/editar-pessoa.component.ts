import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';
import { PessoaService } from '../pessoa.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css']
})
export class EditarPessoaComponent   implements OnInit {

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
    this.service.buscarPorId(parseInt(id!)).subscribe((Pessoa) => {
      this.pessoa = Pessoa
    })
  }
  editarPessoa() {
    this.service.editar(this.pessoa).subscribe((Pessoa) => {
      this.router.navigate(['/'])
    })
  }
  cancelar() {
    this.router.navigate(['/'])
  }
}