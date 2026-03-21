import { Component } from '@angular/core';
import { PagePlaceholderComponent } from '../shared/page-placeholder.component';

@Component({
  selector: 'app-polizas',
  standalone: true,
  imports: [PagePlaceholderComponent],
  template: `<app-page-placeholder
    title="Pólizas"
    description="Administración de pólizas vigentes, renovaciones y coberturas."
  />`
})
export class PolizasComponent {}
