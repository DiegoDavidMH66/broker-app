import { Component } from '@angular/core';
import { PagePlaceholderComponent } from '../shared/page-placeholder.component';

@Component({
  selector: 'app-solicitudes',
  standalone: true,
  imports: [PagePlaceholderComponent],
  template: `<app-page-placeholder
    title="Solicitudes de Seguro"
    description="Gestión de solicitudes de seguro agrícola: creación, seguimiento y aprobación."
  />`
})
export class SolicitudesComponent {}
