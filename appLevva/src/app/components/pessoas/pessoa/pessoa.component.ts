import { Component } from '@angular/core';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent {
  pessoa: Pessoa = {
    nome: 'Ana',
    cpf: '',
    sobreNome: '',
    nacionalidade: '',
    cep: '',
    estado: '',
    cidade: '',
    logradouro: '',
    email: '',
    telefone: ''
  }
}
