import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pessoa } from './pessoa';
import { Observable } from 'rxjs';
import { Cep } from './criar-pessoa/Cep';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private readonly API = 'https://localhost:44390/api/pessoa'

  constructor(private http: HttpClient) { }

  listar(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.API)
  }
  buscarPorId(id: number): Observable<Pessoa> {
    const url = `${this.API}/${id}`
    return this.http.get<Pessoa>(url)
  }
  criar(Pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.API, Pessoa)
  }

  editar(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.put<Pessoa>(this.API, pessoa)
  }
  excluir(id: number): Observable<Pessoa> {
    const url = `${this.API}/${id}`
    return this.http.delete<Pessoa>(url)
  }
  buscar(cep: string): Observable<Cep> {
    {
      return this.http.get<Cep>(`https://viacep.com.br/ws/${cep}/json/`)
    }
  }

  consultaCEP() {

    
        return this.http.get(`//viacep.com.br/ws/${"08656000"}/json`);
    
    
    return of({});
  }
}