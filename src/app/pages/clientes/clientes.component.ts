import { Component } from '@angular/core';
import { PagePlaceholderComponent } from '../shared/page-placeholder.component';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [PagePlaceholderComponent],
  template: `<app-page-placeholder
    title="Clientes"
    description="Directorio de clientes, productores y beneficiarios."
  />`
})
export class ClientesComponent {}
