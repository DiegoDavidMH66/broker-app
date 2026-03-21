import { Component } from '@angular/core';
import { PagePlaceholderComponent } from '../shared/page-placeholder.component';

@Component({
  selector: 'app-metricas',
  standalone: true,
  imports: [PagePlaceholderComponent],
  template: `<app-page-placeholder
    title="Métricas y Resultados"
    description="Análisis de KPIs, métricas de rendimiento y resultados del broker."
  />`
})
export class MetricasComponent {}
