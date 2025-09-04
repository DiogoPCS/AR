import { Component, OnInit } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RankingService, Jogador } from '../../services/ranking.service';

@Component({
  selector: 'app-modificar-ranking',
  imports: [NgClass, NgFor, NgIf, FormsModule],
  templateUrl: './modificar-ranking.component.html',
  styleUrls: ['./modificar-ranking.component.css']
})
export class ModificarRankingComponent implements OnInit {

  jogadores: Jogador[] = [];
  mostrarFormulario = false;
  editarJogadorId: number | null = null;

  novoJogador: Jogador = {
    Nome: '',
    qnt_pontos: 0, 
    categoria: 'homem'
  };

  constructor(private rankingService: RankingService) { }

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

  abrirFormulario(categoria: 'homem' | 'mulher' | 'crianca') {
    this.novoJogador = { Nome: '', qnt_pontos: 0, categoria };
    this.editarJogadorId = null;
    this.mostrarFormulario = true;
  }

  adicionarJogador() {
    this.rankingService.addJogador(this.novoJogador).subscribe({
      next: () => this.carregarJogadores(),
      error: (err) => console.error('Erro ao adicionar jogador:', err)
    });
    this.mostrarFormulario = false;
    this.editarJogadorId = null;
  }

  apagarJogador(jogador: Jogador) {
    if (jogador.id) {
      this.rankingService.deleteJogador(jogador.id).subscribe(() => {
        this.carregarJogadores();
      });
    }
  }

  editarJogador(jogador: Jogador) {
    this.novoJogador = { ...jogador };
    this.editarJogadorId = jogador.id!;
    this.mostrarFormulario = true;
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
