// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { BehaviorSubject, Observable, tap } from 'rxjs';
// import { ApiService } from './api.service';
// depende da url da api

// @Injectable({ providedIn: 'root' })
// export class AuthService {
//   private currentUserSubject = new BehaviorSubject<any>(null);
//   public currentUser$ = this.currentUserSubject.asObservable();

//   constructor(
//     private api: ApiService,
//     private router: Router
//   ) {
//     // Recupera usuário do localStorage ao iniciar
//     const user = localStorage.getItem('currentUser');
//     if (user) {
//       this.currentUserSubject.next(JSON.parse(user));
//     }
//   }

//   login(username: string, password: string): Observable<any> {
//     return this.api.login({ username, password }).pipe(
//       tap((response) => {
//         if (response.token) {
//           // Armazena o token e informações do usuário
//           localStorage.setItem('token', response.token);
//           localStorage.setItem('currentUser', JSON.stringify(response.user));
//           this.currentUserSubject.next(response.user);
//         }
//       })
//     );
//   }

//   logout(): void {
//     // Remove dados de autenticação
//     localStorage.removeItem('token');
//     localStorage.removeItem('currentUser');
//     this.currentUserSubject.next(null);
//     this.router.navigate(['/login']);
//   }

//   getToken(): string | null {
//     return localStorage.getItem('token');
//   }

//   isAuthenticated(): boolean {
//     return !!this.getToken();
//   }

//   isAdmin(): boolean {
//     const user = this.currentUserSubject.value;
//     return user && user.role === 'ADMIN';
//   }

//   getCurrentUser(): any {
//     return this.currentUserSubject.value;
//   }
// }
