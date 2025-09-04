import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { IonButton, IonRow, IonCol, IonList, IonItem, IonLabel, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonInput } from "@ionic/angular/standalone";

@Component({
  selector: 'app-modificar-pista',
  imports: [IonInput, IonCardHeader, IonLabel, IonItem, IonList, IonCol, IonRow, FormsModule, IonIcon, IonButton, IonCard, IonCardTitle, IonCardContent],
  standalone: true,
  templateUrl: './modificar-pista.component.html',
  styleUrl: './modificar-pista.component.css'
})
export class ModificarPistaComponent{
  pistas: string[] = ['Pista 1', 'Pista 2']; // já começa com duas
  showForm: boolean = false;
  novaPista: string = '';
  editIndex: number | null = null;

  abrirForm() {
    this.showForm = true;
    this.novaPista = '';
    this.editIndex = null;
  }

  cancelar() {
    this.showForm = false;
    this.novaPista = '';
    this.editIndex = null;
  }

  salvarPista() {
    if (this.novaPista.trim() === '') return;

    if (this.editIndex !== null) {
      // edição
      this.pistas[this.editIndex] = this.novaPista;
    } else {
      // nova pista
      this.pistas.push(this.novaPista);
    }

    this.cancelar();
  }

  excluirPista(index: number) {
    this.pistas.splice(index, 1);
  }

  editarPista(index: number) {
    this.editIndex = index;
    this.novaPista = this.pistas[index];
    this.showForm = true;
  }
}
