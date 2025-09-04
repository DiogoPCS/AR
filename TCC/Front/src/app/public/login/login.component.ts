import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  nome = '';
  email = '';
  senha = '';
  mensagemSucesso = '';
  mensagemErro = '';

  constructor(private router: Router) {}

  Logar() {
    if (!this.email || !this.senha) {
      this.mensagemErro = 'Email e senha são obrigatórios';
      this.mensagemSucesso = '';
      return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
    if (!emailValido) {
      this.mensagemErro = 'Formato de email inválido';
      this.mensagemSucesso = '';
      return;
    }

    this.mensagemErro = '';
    this.mensagemSucesso = 'Logado com sucesso';

    setTimeout(() => {
      this.router.navigate(['/formReserva']);
    }, 1000);
  }
}

