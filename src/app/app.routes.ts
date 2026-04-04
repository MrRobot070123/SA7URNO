import { Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/layout/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/home/home').then(m => m.HomeComponent),
      },
      {
        path: 'cotizaciones',
        loadComponent: () =>
          import('./pages/cotizaciones/cotizaciones').then(m => m.CotizacionesComponent),
      },
      {
        path: 'clientes',
        loadComponent: () =>
          import('./pages/clientes/clientes').then(m => m.ClientesComponent),
      },
      {
        path: 'servicios',
        loadComponent: () =>
          import('./pages/servicios/servicios').then(m => m.ServiciosComponent),
      },
      {
        path: 'ejecutivos',
        loadComponent: () =>
          import('./pages/ejecutivos/ejecutivos').then(m => m.EjecutivosComponent),
      }
    ]
  }
];