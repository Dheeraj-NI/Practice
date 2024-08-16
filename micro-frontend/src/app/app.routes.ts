import { Routes } from '@angular/router';
import { DesignSystemComponent } from './design-system/design-system.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'designs',
    component: DesignSystemComponent,
  },
];
