import { Routes } from '@angular/router';
import { CategoryComponent } from './views/category/category.component';
export const routes: Routes = [
  {
    path: 'category',
    title: 'Category | Lavendlik',
    loadComponent: () =>
      import('./views/category/category.component').then(
        (c) => c.CategoryComponent,
      ),
  },
  {
    path: 'category/:categoryName',
    loadComponent: () =>
      import('./views/category/category.component').then(
        (c) => c.CategoryComponent,
      ),
  },
  {
    path: '',
    title: 'Lavendlik',
    loadComponent: () =>
      import('./views/home/home.component').then((c) => c.HomeComponent),
  },
];
