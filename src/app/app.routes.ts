import {Routes} from '@angular/router';
import {About} from './about/about';
import {Education} from './education/education';

export const routes: Routes = [
  {
    path: 'about',
    component: About
  },
  {
    path: 'education',
    component: Education
  },
  {
    path: '**',
    redirectTo: 'about',
    pathMatch: 'full'
  },
];
