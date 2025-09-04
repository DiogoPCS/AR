import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-verificar-reservas',
  imports: [NgFor],
  templateUrl: './verificar-reservas.component.html',
  styleUrl: './verificar-reservas.component.css'
})


export class VerificarReservasComponent {

  reservas: { 
    nome: string; 
    telefone: string; 
    email: string; 
    numeroDePistas: number; 
    horario: string; 
  }[] = [
    { nome: 'Nome 1', telefone: '123456789', email: 'email1@example.com', numeroDePistas: 2, horario: '10:00' },
    { nome: 'Nome 2', telefone: '987654321', email: 'email2@example.com', numeroDePistas: 1, horario: '11:00' }
  ];


  excluirReserva(index: number) {
    this.reservas.splice(index, 1);
  }

}