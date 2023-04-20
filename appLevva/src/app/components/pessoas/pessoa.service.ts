import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pessoa } from './pessoa';
import { Observable } from 'rxjs';

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

  editar(Pessoa: Pessoa): Observable<Pessoa> {
    const url = `${this.API}/${Pessoa.id}`
    return this.http.put<Pessoa>(url, Pessoa)
  }
  excluir(id: number): Observable<Pessoa> {
    const url = `${this.API}/${id}`
    return this.http.delete<Pessoa>(url)
  }
}