import { Component, OnInit } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RankingService, Jogador } from '../../services/ranking.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css'],
  imports: [NgClass]
})
export class RankingComponent implements OnInit {
  jogadores: Jogador[] = [];

  constructor(private rankingService: RankingService) {}

  ngOnInit(): void {
    this.carregarJogadores();
  }

  carregarJogadores() {
    this.rankingService.getJogadores().subscribe(data => {
      this.jogadores = data.map(j => ({
        ...j,
        qnt_pontos: Number(j.qnt_pontos)
      }));
    });
  }

  // GETTERS para ranking por categoria
  get homensOrdenados(): Jogador[] {
    return this.jogadores
      .filter(j => j.categoria === 'homem')
      .sort((a, b) => b.qnt_pontos - a.qnt_pontos);
  }

  get mulheresOrdenadas(): Jogador[] {
    return this.jogadores
      .filter(j => j.categoria === 'mulher')
      .sort((a, b) => b.qnt_pontos - a.qnt_pontos);
  }

  get criancasOrdenadas(): Jogador[] {
    return this.jogadores
      .filter(j => j.categoria === 'crianca')
      .sort((a, b) => b.qnt_pontos - a.qnt_pontos);
  }
}
