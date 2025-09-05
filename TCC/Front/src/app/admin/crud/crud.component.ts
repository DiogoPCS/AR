import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { IonCard, IonCardContent, IonDatetime, IonIcon, IonCol, IonRow, IonItem, IonButton, IonPicker, IonPickerColumn, IonPickerColumnOption, IonList, IonCardHeader, IonCardTitle } from "@ionic/angular/standalone";
import { CrudService } from '../../core/services/crud.service';
import { MessageService } from '../../core/services/message.service';
import { Aluno } from './crud.interface';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-modificar-bloqueio',
  imports: [FormsModule, IonicModule],
  standalone: true,
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent{

  aluno: Aluno = {
    id: null,
    nome: null,
    idade: null
  }

  lista_alunos: Aluno[] = [];

  filtrado_por_idade: Aluno[] = [];

  constructor(
    public crudService: CrudService, //importando o serviço que irá comunicar a API, assim que a página é construída
    public messageService: MessageService
  ){}

  salvar() {
    if (this.aluno.id) //se tem id edita
      this.editar();

    if (!this.aluno.id) //se não tem id cadastra
      this.cadastrar();
  }

  cadastrar() { 
    this.crudService.post('/aluno/cadastrar', this.aluno).subscribe(resposta => {
      console.log(resposta);
      this.todos();
    });

  }

  todos() { 
    this.crudService.get('/aluno/todos').subscribe(resposta => {
      console.log(resposta)
      this.messageService.show(resposta.message);
      this.lista_alunos = resposta.lista_alunos;
    });
  }

  filtrarPorIdade() { 
    this.crudService.post('/aluno/filtrar-por-idade', this.aluno).subscribe(resposta => {
      this.messageService.show(resposta.message);
      this.lista_alunos = resposta.lista_alunos;
    });
  }

  editar() {
    this.crudService.put('/aluno/editar', this.aluno).subscribe(resposta => {
      this.messageService.show(resposta.message);
      this.todos();
    });

  }

  remover(aluno: any) {
    this.crudService.delete(`/aluno/remover/${aluno.id}`).subscribe(resposta => {
      this.messageService.show(resposta.message);
      this.todos();
    });

   }


   selecionar(aluno: Aluno) {
    this.aluno = {...aluno}; //faz isso para criar uma nova cópia do aluno e atribuir ao objeto this.aluno
   }

  
}
