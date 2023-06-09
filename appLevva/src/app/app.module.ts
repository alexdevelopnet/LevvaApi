
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ModalModule} from 'ngx-bootstrap/modal';

import { PessoaComponent } from './components/pessoas/pessoa/pessoa.component';
import { CriarPessoaComponent } from './components/pessoas/criar-pessoa/criar-pessoa.component';
import { EditarPessoaComponent } from './components/pessoas/editar-pessoa/editar-pessoa.component';
import { ExcluirPessoaComponent } from './components/pessoas/excluir-pessoa/excluir-pessoa.component';
import { ListarPessoaComponent } from './components/pessoas/listar-pessoa/listar-pessoa.component';
import { CabecalhoComponent } from './components/pessoas/cabecalho/cabecalho.component';
import { RodapeComponent } from './components/pessoas/rodape/rodape.component';
import {PessoaService} from './components/pessoas/pessoa.service'
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [	
    AppComponent,
    CabecalhoComponent,
      RodapeComponent,
      PessoaComponent,
      CriarPessoaComponent,
      EditarPessoaComponent,
      ExcluirPessoaComponent,
      ListarPessoaComponent
      
   ],
  imports: [
    
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ModalModule.forRoot() ,
     PessoaService
  ],
  providers: [HttpClientModule, PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
