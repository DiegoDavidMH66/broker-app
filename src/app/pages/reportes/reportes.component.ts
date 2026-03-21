import { Component } from '@angular/core';
import { PagePlaceholderComponent } from '../shared/page-placeholder.component';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [PagePlaceholderComponent],
  template: `<app-page-placeholder
    title="Reportes"
    description="Generación de reportes de producción, siniestralidad y rendimiento."
  />`
})
export class ReportesComponent {}
