import { Component } from '@angular/core';
import { PagePlaceholderComponent } from '../shared/page-placeholder.component';

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [PagePlaceholderComponent],
  template: `<app-page-placeholder
    title="Configuración"
    description="Ajustes generales del sistema, usuarios y preferencias."
  />`
})
export class ConfiguracionComponent {}
