import { Component } from '@angular/core';
import { IonDatetime } from '@ionic/angular/standalone';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-form-reserva',
  templateUrl: './form-reserva.component.html',
  styleUrls: ['./form-reserva.component.css'],
  standalone: true,
  imports: [IonDatetime, NgIf, NgFor, NgClass]
})
export class FormReservaComponent {
  dataSelecionada: string = '';
  mensagemFechado = '';
  mensagemHorario = '';

  minDate = new Date().toISOString();
  maxDate = new Date(new Date().setMonth(new Date().getMonth() + 2)).toISOString();

  precoPorHora: number | null = null;

  feriadosFixos = ['01-01', '04-21', '05-01', '08-11', '09-07', '10-12', '11-02', '11-15', '12-08', '12-25'];
  feriadosMoveis: Date[] = [];

  horarios: string[] = [];
  horaInicio: string | null = null;
  horaFim: string | null = null;

  pistaSelecionada: number | null = null;

  // LISTA DE IDS OCUPADOS QUE VEM DO BACKEND
  horariosOcupados: string[] = [];

  constructor() {
    this.atualizarFeriadosMoveis(new Date().getFullYear());
  }

  onDateChange(event: any) {
    const data = new Date(event.detail.value);
    const diaSemana = data.getDay();

    // Segunda-feira fechado
    if (diaSemana === 1) {
      this.precoPorHora = null;
      this.horarios = [];
      this.horaInicio = null;
      this.horaFim = null;
      this.mensagemFechado = "O boliche não abre às segundas-feiras";
      setTimeout(() => this.mensagemFechado = "", 2000);
      return;
    }

    this.precoPorHora = this.calcularPreco(data);
    this.dataSelecionada = event.detail.value.split('T')[0];

    this.atualizarHorarios(data);
    this.carregarHorariosOcupados();
  }

  calcularPreco(data: Date): number {
    const dia = data.getDay();
    const ehFds = dia === 5 || dia === 6 || dia === 0;
    const ehFeriado = this.eFeriado(data);
    return (ehFds || ehFeriado) ? 120 : 90;
  }

  eFeriado(data: Date): boolean {
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const mmdd = `${mes}-${dia}`;

    if (this.feriadosFixos.includes(mmdd)) return true;

    return this.feriadosMoveis.some(feriado =>
      feriado.getFullYear() === data.getFullYear() &&
      feriado.getMonth() === data.getMonth() &&
      feriado.getDate() === data.getDate()
    );
  }

  atualizarFeriadosMoveis(ano: number) {
    this.feriadosMoveis = [];
    const pascoa = this.calcularDataPascoa(ano);

    this.feriadosMoveis.push(pascoa); // Páscoa

    const carnaval = new Date(pascoa);
    carnaval.setDate(carnaval.getDate() - 47);
    this.feriadosMoveis.push(carnaval);

    const sextaSanta = new Date(pascoa);
    sextaSanta.setDate(sextaSanta.getDate() - 2);
    this.feriadosMoveis.push(sextaSanta);

    const corpusChristi = new Date(pascoa);
    corpusChristi.setDate(corpusChristi.getDate() + 60);
    this.feriadosMoveis.push(corpusChristi);
  }

  calcularDataPascoa(ano: number): Date {
    const a = ano % 19;
    const b = Math.floor(ano / 100);
    const c = ano % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const mes = Math.floor((h + l - 7 * m + 114) / 31);
    const dia = ((h + l - 7 * m + 114) % 31) + 1;

    return new Date(ano, mes - 1, dia);
  }

  atualizarHorarios(data: Date) {
    const diaSemana = data.getDay();

    if (diaSemana === 1) {
      this.horarios = [];
    } else if (diaSemana === 0) {
      this.horarios = [
        '18:00', '18:30', '19:00', '19:30', '20:00',
        '20:30', '21:00', '21:30', '22:00', '22:30',
        '23:00'
      ];
    } else {
      this.horarios = [
        '18:00', '18:30', '19:00', '19:30', '20:00',
        '20:30', '21:00', '21:30', '22:00', '22:30',
        '23:00', '23:30', '00:00'
      ];
    }

    // Remove horários ocupados
    this.horarios = this.horarios.filter(
      hora => !this.horariosOcupados.includes(`${this.dataSelecionada}_${hora}`)
    );

    this.horaInicio = null;
    this.horaFim = null;
  }

  selecionarHorario(hora: string) {
    const id = `${this.dataSelecionada}_${hora}`; // ID único

    if (!this.horaInicio) {
      this.horaInicio = hora;
    } else if (!this.horaFim) {
      this.horaFim = hora;
      this.calcularValorFinal(this.horaInicio, this.horaFim);
    } else {
      this.horaInicio = hora;
      this.horaFim = null;
    }

    console.log("ID selecionado:", id); // ID QUE VAI PRO BACKEND
  }

  carregarHorariosOcupados() {
    if (!this.dataSelecionada) return;

    // A CHAMADA DO HTTP QUANDO ESTIVER CONECTADO COM O BANCO
    this.horariosOcupados = [
      `${this.dataSelecionada}_18:00`,
      `${this.dataSelecionada}_20:00`
    ];

    // REMOVE OS HORÁRIOS OCUPADOS
    this.horarios = this.horarios.filter(
      hora => !this.horariosOcupados.includes(`${this.dataSelecionada}_${hora}`)
    );
  }

  calcularValorFinal(inicio: string, fim: string) {
    if (!this.precoPorHora || !this.dataSelecionada) return;

    const inicioDate = new Date(`${this.dataSelecionada}T${inicio}`);
    let fimDate = new Date(`${this.dataSelecionada}T${fim}`);
    if (fim === '00:00') fimDate.setDate(fimDate.getDate() + 1);

    const diffHoras = (fimDate.getTime() - inicioDate.getTime()) / (1000 * 60 * 60);

    if (diffHoras <= 0) {
      this.mensagemHorario = "O horário de fim deve ser depois do início.";
      setTimeout(() => this.mensagemHorario = "", 2000);
      return;
    }

    const total = diffHoras * this.precoPorHora;
    const el = document.getElementById('ValorFinal');
    if (el) el.textContent = `R$ ${total.toFixed(2)}`;
  }

  selecionarPista(pista: number): void {
    this.pistaSelecionada = pista;
  }
}
