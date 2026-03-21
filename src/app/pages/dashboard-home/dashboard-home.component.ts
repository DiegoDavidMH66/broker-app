import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface KpiCard {
  title: string;
  value: string;
  change: string;
  changeType: 'up' | 'down' | 'neutral';
  icon: string;
  color: string;
}

interface RecentActivity {
  type: 'solicitud' | 'siniestro' | 'poliza';
  description: string;
  time: string;
  status: string;
  statusColor: string;
}

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.css'
})
export class DashboardHomeComponent {
  kpis: KpiCard[] = [
    {
      title: 'Solicitudes Activas',
      value: '124',
      change: '+12% vs mes anterior',
      changeType: 'up',
      icon: 'solicitudes',
      color: 'primary'
    },
    {
      title: 'Pólizas Vigentes',
      value: '2,847',
      change: '+5.3% vs mes anterior',
      changeType: 'up',
      icon: 'polizas',
      color: 'accent'
    },
    {
      title: 'Siniestros Abiertos',
      value: '18',
      change: '-8% vs mes anterior',
      changeType: 'down',
      icon: 'siniestros',
      color: 'warning'
    },
    {
      title: 'Prima Total (USD)',
      value: '$4.2M',
      change: '+15.7% vs mes anterior',
      changeType: 'up',
      icon: 'prima',
      color: 'success'
    }
  ];

  recentActivities: RecentActivity[] = [
    { type: 'solicitud', description: 'Solicitud #2847 — Seguro de Trigo, La Pampa (250 ha)', time: 'Hace 12 min', status: 'En revisión', statusColor: 'warning' },
    { type: 'siniestro', description: 'Siniestro #189 — Granizo en cultivo de Soja, Santa Fe', time: 'Hace 45 min', status: 'Peritaje', statusColor: 'danger' },
    { type: 'poliza', description: 'Póliza #5621 — Renovación automática aprobada', time: 'Hace 1 hora', status: 'Aprobada', statusColor: 'success' },
    { type: 'solicitud', description: 'Solicitud #2846 — Seguro Multi-riesgo, Córdoba (180 ha)', time: 'Hace 2 horas', status: 'Pendiente', statusColor: 'neutral' },
    { type: 'siniestro', description: 'Siniestro #188 — Sequía prolongada, cultivo de Maíz', time: 'Hace 3 horas', status: 'Documentación', statusColor: 'warning' },
  ];

  quickActions = [
    { label: 'Nueva Solicitud', route: '/dashboard/solicitudes', icon: 'plus' },
    { label: 'Registrar Siniestro', route: '/dashboard/siniestros', icon: 'alert' },
    { label: 'Ver Reportes', route: '/dashboard/reportes', icon: 'chart' },
    { label: 'Generar Métricas', route: '/dashboard/metricas', icon: 'metrics' },
  ];
}
