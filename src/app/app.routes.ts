import { Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { CategoryComponent } from './views/category/category.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Lavendlik',
    loadComponent: () =>
      import('./views/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'category',
    title: 'Category | Lavendlik',
    loadComponent: () =>
      import('./views/category/category.component').then(
        (c) => c.CategoryComponent,
      ),
  },
];
