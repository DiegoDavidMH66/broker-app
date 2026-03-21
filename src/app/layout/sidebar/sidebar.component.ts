import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';

interface MenuItem {
  label: string;
  icon: string;
  route: string;
  badge?: number;
}

interface MenuGroup {
  title: string;
  items: MenuItem[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isCollapsed = signal(false);

  menuGroups: MenuGroup[] = [
    {
      title: 'Principal',
      items: [
        { label: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
      ]
    },
    {
      title: 'Gestión',
      items: [
        { label: 'Solicitudes', icon: 'solicitudes', route: '/dashboard/solicitudes', badge: 12 },
        { label: 'Pólizas', icon: 'polizas', route: '/dashboard/polizas' },
        { label: 'Siniestros', icon: 'siniestros', route: '/dashboard/siniestros', badge: 3 },
        { label: 'Clientes', icon: 'clientes', route: '/dashboard/clientes' },
      ]
    },
    {
      title: 'Análisis',
      items: [
        { label: 'Reportes', icon: 'reportes', route: '/dashboard/reportes' },
        { label: 'Métricas', icon: 'metricas', route: '/dashboard/metricas' },
      ]
    },
    {
      title: 'Sistema',
      items: [
        { label: 'Configuración', icon: 'configuracion', route: '/dashboard/configuracion' },
      ]
    }
  ];

  constructor(public authService: AuthService) {}

  toggleCollapse(): void {
    this.isCollapsed.update(v => !v);
  }
}
