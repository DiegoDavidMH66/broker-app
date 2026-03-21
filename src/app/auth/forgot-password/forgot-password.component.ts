import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  email = '';
  isLoading = signal(false);
  isSent = signal(false);
  errorMessage = signal('');

  constructor(private authService: AuthService) {}

  async onSubmit(): Promise<void> {
    if (!this.email) {
      this.errorMessage.set('Ingrese su correo electrónico');
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set('');

    try {
      await this.authService.requestPasswordReset(this.email);
      this.isSent.set(true);
    } catch {
      this.errorMessage.set('Error al enviar el correo. Intente nuevamente.');
    } finally {
      this.isLoading.set(false);
    }
  }
}
