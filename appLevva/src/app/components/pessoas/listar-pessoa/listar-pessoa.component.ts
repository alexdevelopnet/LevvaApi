import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrls: ['./listar-pessoa.component.css']
})
export class ListarPessoaComponent implements OnInit {

  listaPessoas: Pessoa[]=[];

  constructor(private service: PessoaService) { }

  ngOnInit(): void {
    this.service.listar()
      .subscribe((listaPessoas) => {
        this.listaPessoas = listaPessoas;
      })
  }
}
