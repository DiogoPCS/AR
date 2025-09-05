import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { IonCard, IonCardContent, IonDatetime, IonIcon, IonCol, IonRow, IonItem, IonButton, IonPicker, IonPickerColumn, IonPickerColumnOption, IonList, IonCardHeader, IonCardTitle } from "@ionic/angular/standalone";
import { CrudService } from '../../core/services/crud.service';
// Importando a biblioteca moment.js
import moment from 'moment';
import { Bloqueio, Bloqueios } from './bloqueio.interface';
import { MessageService } from '../../core/services/message.service';


@Component({
  selector: 'app-modificar-bloqueio',
  imports: [IonCardTitle, IonList, IonButton, IonCol, FormsModule, IonIcon, IonDatetime, IonCardTitle, IonCard, IonCardHeader, IonCardContent, IonRow, IonCol, IonItem, IonButton, IonPicker, IonPickerColumn, IonPickerColumnOption],
  standalone: true,
  templateUrl: './modificar-bloqueio.component.html',
  styleUrl: './modificar-bloqueio.component.css'
})
export class ModificarBloqueioComponent{
  showFormPeriodo: boolean = false;
  showFormDiaSemana: boolean = false;
  // novoBloqueio: string = ''; substituido por bloqueio: object = {}
  editIndex: number | null = null;
  
  data_atual: any; //any porque aceita qualquer tipo de dados. string, number, boolean, etc.
  
  bloqueios: Bloqueio[] = []; // Array da interface de bloqueios, para manter o mesmo padrão com o model do back-end

  bloqueio: Bloqueio = { //essa interface é igual a migration do laravel
    data_inicial: null,
    data_final: null,
    dia_semana: null,
    recorrencia: null, 
    pista: null
  }

  constructor(
    public crudService: CrudService, //importando o serviço que irá comunicar a API, assim que a página é construída
    public messageService: MessageService
  ){
    // Pega a data ao construir a página
      this.data_atual = moment();
      this.messageService.show(`Exemplo de message - ${this.data_atual.format('MMMM Do YYYY, h:mm:ss a')}`, 4000, 'warning'); //4000 milisegundos

      this.crudService.get('/bloqueio/todos').subscribe(resp => {
      console.log(resp.bloqueios);
      // this.bloqueios.push({...this.bloqueio});
      this.bloqueios = resp.bloqueios;
    });
  }

  abrirFormPeriodo() {
    this.showFormPeriodo = true;
    this.showFormDiaSemana = false;
    this.bloqueio.data_inicial = this.data_atual.format();
    this.bloqueio.data_final = this.data_atual.clone().add(1, 'hours').format();
    this.bloqueio.dia_semana = null;
    this.bloqueio.recorrencia = null;
    this.bloqueio.pista = null;
    this.editIndex = null;
  }

   abrirFormDiaSemana() {
    this.showFormDiaSemana = true;
    this.showFormPeriodo = false;
    this.bloqueio.data_inicial = null;
    this.bloqueio.data_final = null;
    this.bloqueio.dia_semana = null;
    this.bloqueio.recorrencia = null;
    this.bloqueio.pista = null;
    this.editIndex = null;
  }

  cancelarPeriodo() {
    this.showFormPeriodo = false;
    // this.novoBloqueio = '';
    this.editIndex = null;
  }

  cancelarDiaSemana() {
    this.showFormDiaSemana = false;
    // this.novoBloqueio = '';
    this.editIndex = null;
  }

  salvarBloqueio() {
    //Apenas para Teste
    this.bloqueio.pista = 'Pista 1';
    if (this.bloqueio.dia_semana) {
      this.crudService.post('/bloqueio/adicionar', this.bloqueio).subscribe(resp => {
      console.log(resp.bloqueios);
      this.bloqueios = resp.bloqueios;
      this.messageService.show(resp.message, 3000, 'success');
      // this.bloqueios.push({...this.bloqueio});
    });
    }
      

    if (!this.bloqueio.data_inicial) return;
    if (!this.bloqueio.data_final) return;

    this.crudService.post('/bloqueio/adicionar', this.bloqueio).subscribe(resp => {
      console.log(resp.bloqueios);
      // this.bloqueios.push({...this.bloqueio});
      this.bloqueios = resp.bloqueios;
      this.messageService.show(resp.message, 3000, 'success');
    });


    // if (this.editIndex !== null) {
    //   // edição
    //   this.bloqueios[this.editIndex] = this.novoBloqueio;
    // } else {
    //   // nova Bloqueio
    //   this.bloqueios.push(this.novoBloqueio);
    // }

    // this.cancelar();
  }

  selecionarDiaSemana(event: any){
    this.bloqueio.dia_semana = event.detail.value;
  }

  excluirBloqueio(index: number) {
    // this.bloqueios.splice(index, 1);
  }

  editarBloqueio(index: number) {
    this.editIndex = index;
    // this.novoBloqueio = this.bloqueios[index];
    this.showFormPeriodo = true;
  }

  setInicio(event: any) {
    this.bloqueio.data_inicial = event.detail.value;
  }

  setFim(event: any) {
    this.bloqueio.data_final = event.detail.value;
  }
}
