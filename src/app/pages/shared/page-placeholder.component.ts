import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-placeholder',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="placeholder-page">
      <div class="placeholder-header">
        <h1>{{ title() }}</h1>
        <p>{{ description() }}</p>
      </div>
      <div class="placeholder-body">
        <div class="placeholder-icon">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="3"/>
            <line x1="9" y1="3" x2="9" y2="21"/>
            <line x1="3" y1="9" x2="21" y2="9"/>
          </svg>
        </div>
        <h3>Módulo en desarrollo</h3>
        <p>Esta sección estará disponible próximamente. Estamos trabajando para brindarte la mejor experiencia.</p>
      </div>
    </div>
  `,
  styles: [`
    .placeholder-page {
      max-width: 1400px;
      margin: 0 auto;
      animation: fadeIn 0.4s ease-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .placeholder-header {
      margin-bottom: 2rem;
    }
    .placeholder-header h1 {
      font-family: var(--font-heading);
      font-size: 1.75rem;
      font-weight: 700;
      color: var(--color-text-primary);
      letter-spacing: -0.02em;
      margin-bottom: 0.375rem;
    }
    .placeholder-header p {
      font-size: 0.92rem;
      color: var(--color-text-secondary);
    }
    .placeholder-body {
      background: var(--color-surface);
      border: 1px solid var(--color-border-light);
      border-radius: var(--radius-lg);
      padding: 4rem 2rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
    .placeholder-icon {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: var(--color-primary-50);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-primary-200);
      margin-bottom: 0.5rem;
    }
    .placeholder-body h3 {
      font-family: var(--font-heading);
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--color-text-primary);
    }
    .placeholder-body p {
      font-size: 0.9rem;
      color: var(--color-text-secondary);
      max-width: 400px;
      line-height: 1.6;
    }
  `]
})
export class PagePlaceholderComponent {
  title = input('');
  description = input('');
}
