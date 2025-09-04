import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { IonCard, IonCardContent, IonDatetime, IonIcon, IonCol, IonRow, IonItem, IonButton, IonLabel } from "@ionic/angular/standalone";
import { CrudService } from '../../core/services/crud.service';
// Importando a biblioteca moment.js
import moment from 'moment';
import { Bloqueio, Bloqueios } from './bloqueio.interface';


@Component({
  selector: 'app-modificar-bloqueio',
  imports: [IonButton, IonCol, FormsModule, IonIcon, IonDatetime, IonCard, IonCardContent, IonRow, IonCol, IonItem, IonButton],
  standalone: true,
  templateUrl: './modificar-bloqueio.component.html',
  styleUrl: './modificar-bloqueio.component.css'
})
export class ModificarBloqueioComponent{
  showForm: boolean = false;
  // novoBloqueio: string = ''; substituido por bloqueio: object = {}
  editIndex: number | null = null;
  
  data_atual: any; //any porque aceita qualquer tipo de dados. string, number, boolean, etc.
  
  bloqueios: Bloqueios | [] = []; // Array da interface de bloqueios, para manter o mesmo padrão com o model do back-end

  bloqueio: Bloqueio = { //essa interface é igual a migration do laravel
    data_inicial: null,
    data_final: null,
    dia_semana: null,
    recorrencia: null, 
    pista: null
  }

  constructor(
    public crudService: CrudService //importando o serviço que irá comunicar a API, assim que a página é construída
  ){
    // Pega a data ao construir a página
      this.data_atual = moment().format('DD/MM/YYYY HH:mm:ss');
  }

  abrirForm() {
    this.showForm = true;
    // this.bloqueio = '';
    this.editIndex = null;
  }

  cancelar() {
    this.showForm = false;
    // this.novoBloqueio = '';
    this.editIndex = null;
  }

  salvarBloqueio() {
    // if (this.novoBloqueio.trim() === '') return;

    // if (this.editIndex !== null) {
    //   // edição
    //   this.bloqueios[this.editIndex] = this.novoBloqueio;
    // } else {
    //   // nova Bloqueio
    //   this.bloqueios.push(this.novoBloqueio);
    // }

    // this.cancelar();
  }

  excluirBloqueio(index: number) {
    // this.bloqueios.splice(index, 1);
  }

  editarBloqueio(index: number) {
    this.editIndex = index;
    // this.novoBloqueio = this.bloqueios[index];
    this.showForm = true;
  }

  setInicio(event: any) {
    this.bloqueio.data_inicial = event.detail.value;
  }

  setFim(event: any) {
    this.bloqueio.data_final = event.detail.value;
  }
}
