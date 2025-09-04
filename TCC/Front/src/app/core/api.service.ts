// No seu sistema de boliche, o api.service.ts deve conter todas as chamadas HTTP para a API do backend.

// O que deve conter no seu api.service.ts:
// Configuração básica:

// URL base da API (vinda do environment)
// Injeção do HttpClient
// Métodos genéricos:

// GET, POST, PUT, DELETE para operações CRUD básicas
// Tratamento de erros centralizado
// Métodos específicos do boliche:

// Gestão de pistas (getLanes, bookLane)
// Gestão de reservas (getBookings)
// Autenticação (login)
// Helpers:

// Cabeçalhos HTTP com token JWT
// Manipulação de tokens
// Tratamento de erros


// // src/app/core/services/api.service.ts
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { Observable, catchError, throwError } from 'rxjs';
// import { environment } from '../../../environments/environment';

// @Injectable({ providedIn: 'root' })
// export class ApiService {
//   private readonly apiUrl = environment.apiUrl;

//   constructor(private http: HttpClient) {}

//   // Métodos genéricos para CRUD
//   get<T>(endpoint: string, params?: any): Observable<T> {
//     const httpParams = new HttpParams({ fromObject: params });
//     return this.http.get<T>(`${this.apiUrl}/${endpoint}`, { params: httpParams })
//       .pipe(catchError(this.handleError));
//   }

//   post<T>(endpoint: string, body: any): Observable<T> {
//     return this.http.post<T>(`${this.apiUrl}/${endpoint}`, body, this.getHeaders())
//       .pipe(catchError(this.handleError));
//   }

//   put<T>(endpoint: string, body: any): Observable<T> {
//     return this.http.put<T>(`${this.apiUrl}/${endpoint}`, body, this.getHeaders())
//       .pipe(catchError(this.handleError));
//   }

//   delete<T>(endpoint: string): Observable<T> {
//     return this.http.delete<T>(`${this.apiUrl}/${endpoint}`, this.getHeaders())
//       .pipe(catchError(this.handleError));
//   }

//   // Métodos específicos para o sistema de boliche
//   getLanes(): Observable<any[]> {
//     return this.get<any[]>('lanes');
//   }

//   bookLane(bookingData: any): Observable<any> {
//     return this.post('bookings', bookingData);
//   }

//   getBookings(date: string): Observable<any[]> {
//     return this.get<any[]>('bookings', { date });
//   }

//   // Métodos de autenticação
//   login(credentials: { username: string, password: string }): Observable<any> {
//     return this.post('auth/login', credentials);
//   }

//   // Métodos privados
//   private getHeaders() {
//     return {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${this.getToken()}`
//       })
//     };
//   }

//   private getToken(): string {
//     return localStorage.getItem('token') || '';
//   }

//   private handleError(error: any) {
//     console.error('API Error:', error);
//     return throwError(() => new Error(error.message || 'Server error'));
//   }
// }
