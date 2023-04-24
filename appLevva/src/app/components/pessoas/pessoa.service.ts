import { Observable } from "rxjs";
import { Pessoa } from "./pessoa";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

 
 

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private readonly API = 'https://localhost:44390/api/pessoa'
  private readonly URLCEP = 'http://viacep.com.br/ws/';

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
 
  getConsultarCep(cep: string) {
    return this.http.get(`${this.URLCEP}${cep}/json`)
  }
}