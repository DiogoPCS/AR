import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Jogador {
  id?: number;
  Nome: string;
  qnt_pontos: number;
  categoria: 'homem' | 'mulher' | 'crianca';
}

@Injectable({
  providedIn: 'root'
})
export class RankingService {
  private apiUrl = 'http://localhost:8000/api/rankings';


  constructor(private http: HttpClient) { }

  getJogadores(): Observable<Jogador[]> {
    return this.http.get<Jogador[]>(this.apiUrl);
  }

  addJogador(jogador: Jogador): Observable<any> {
    const payload = {
      Nome: jogador.Nome,
      qnt_pontos: jogador.qnt_pontos,
      categoria: jogador.categoria
    };
    return this.http.post(this.apiUrl, payload);
  }


  updateJogador(id: number, jogador: Jogador): Observable<any> {
    const payload = {
      Nome: jogador.Nome,
      qnt_pontos: jogador.qnt_pontos,
      categoria: jogador.categoria
    };
    return this.http.put(`${this.apiUrl}/${id}`, payload);
  }

  deleteJogador(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
