import { Routes } from '@angular/router';
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
