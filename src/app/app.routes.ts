import { Routes } from '@angular/router';
export const routes: Routes = [
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
