import { Injectable, signal, computed } from '@angular/core';
import { Router } from '@angular/router';

export interface User {
  id: string;
  email: string;
  nombre: string;
  apellido: string;
  rol: 'admin' | 'broker' | 'agente' | 'analista';
  avatar?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser = signal<User | null>(null);

  readonly user = this.currentUser.asReadonly();
  readonly isAuthenticated = computed(() => !!this.currentUser());

  constructor(private router: Router) {
    const stored = localStorage.getItem('agroseguro_user');
    if (stored) {
      try {
        this.currentUser.set(JSON.parse(stored));
      } catch {
        localStorage.removeItem('agroseguro_user');
      }
    }
  }

  login(email: string, _password: string): Promise<boolean> {
    // Simulación de login — reemplazar con llamada HTTP real
    return new Promise((resolve) => {
      setTimeout(() => {
        const user: User = {
          id: '1',
          email,
          nombre: 'Diego',
          apellido: 'Martínez',
          rol: 'admin'
        };
        this.currentUser.set(user);
        localStorage.setItem('agroseguro_user', JSON.stringify(user));
        resolve(true);
      }, 800);
    });
  }

  logout(): void {
    this.currentUser.set(null);
    localStorage.removeItem('agroseguro_user');
    this.router.navigate(['/auth/login']);
  }

  requestPasswordReset(_email: string): Promise<boolean> {
    // Simulación — reemplazar con llamada HTTP real
    return new Promise((resolve) => {
      setTimeout(() => resolve(true), 1000);
    });
  }
}
