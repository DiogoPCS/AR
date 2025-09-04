import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cadastrar',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent {
  nome = '';
  email = '';
  senha = '';
  telefone = '';
  senhaVerificada = '';
  emailVerificado = '';
  mensagemSenhasDiferentes = '';
  mensagemEmailsDiferentes = '';
  mensagemSucesso = '';
  constructor(private router: Router) { }
  Cadastrar() {
    if (this.senha !== this.senhaVerificada) {
      this.mensagemSenhasDiferentes = "Senhas não coincidem";
      setTimeout(() => {
        this.mensagemSenhasDiferentes = "";
      }, 3000);
      return;
    }
    if (this.email !== this.emailVerificado) {
      this.mensagemEmailsDiferentes = "Emails não coincidem";
      setTimeout(() => {
        this.mensagemEmailsDiferentes = "";
      }, 3000);
      return;
    }
    this.mensagemSucesso = "Cadastrado com sucesso";
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1000);
  }
}