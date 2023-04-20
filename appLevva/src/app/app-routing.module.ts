import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PessoaComponent } from './components/pessoas/pessoa/pessoa.component';
import { CriarPessoaComponent } from './components/pessoas/criar-pessoa/criar-pessoa.component';
import { ListarPessoaComponent } from './components/pessoas/listar-pessoa/listar-pessoa.component';
import { ExcluirPessoaComponent } from './components/pessoas/excluir-pessoa/excluir-pessoa.component';
import { EditarPessoaComponent } from './components/pessoas/editar-pessoa/editar-pessoa.component';

const routes: Routes = [
  {
    path: '',
    component: PessoaComponent
  },
  {
    path: 'criarpessoa',
    component: CriarPessoaComponent
  },
  {
    path: 'listarpessoa',
    component: ListarPessoaComponent
  },
  {
    path: 'pessoas/excluirPessoa/:id',
    component: ExcluirPessoaComponent
  },
  {
    path: 'pessoas/editarPessoa/:id',
    component: EditarPessoaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
