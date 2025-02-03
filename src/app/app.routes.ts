import { Routes } from '@angular/router';
import { UserdashComponent } from './layout/userdash/userdash.component';
export const routes: Routes = [
  { path: '', redirectTo: 'userDash', pathMatch: 'full' },
  {
    path: 'userDash',
    component: UserdashComponent,
    title: 'Dashboard',
    children: [
      {
        path: 'NavBar',
        loadComponent: () =>
          import('./layout/nav/nav.component').then((m) => m.NavComponent),
        title: 'NavBar',
      },
      {
        path: 'header',
        loadComponent: () =>
          import('./layout/headr/headr.component').then((m) => m.HeadrComponent),
        title: 'header',
      },
      {
        path: 'taple',
        loadComponent: () =>
          import('./layout/taple/taple.component').then((m) => m.TapleComponent),
        title: 'Taple',
      },
      {
        path: 'footer',
        loadComponent: () =>
          import('./layout/footer/footer.component').then(
            (m) => m.FooterComponent
          ),
        title: 'footer',
      },
    ],
  },
];