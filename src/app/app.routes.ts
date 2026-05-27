import {Routes} from '@angular/router';
import {Main} from './main/main';

export const routes: Routes = [
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    component: Main
  }
];
