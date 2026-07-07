import {Routes} from '@angular/router';
import {About} from './about/about';

export const routes: Routes = [
  {
    path: 'about',
    component: About
  },
  {
    path: '**',
    redirectTo: 'about',
    pathMatch: 'full'
  },
];
