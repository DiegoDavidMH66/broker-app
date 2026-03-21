import { Component } from '@angular/core';
import { PagePlaceholderComponent } from '../shared/page-placeholder.component';

@Component({
  selector: 'app-siniestros',
  standalone: true,
  imports: [PagePlaceholderComponent],
  template: `<app-page-placeholder
    title="Gestión de Siniestros"
    description="Registro, seguimiento y resolución de siniestros agrícolas."
  />`
})
export class SiniestrosComponent {}
