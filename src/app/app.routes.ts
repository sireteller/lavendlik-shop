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
    path: 'product/:productId',
    loadComponent: () =>
      import('./views/product/product.component').then(
        (c) => c.ProductComponent,
      ),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./views/cart/cart.component').then((c) => c.CartComponent),
  },
  {
    path: 'cookies',
    loadComponent: () =>
      import('./views/cookies/cookies.component').then(
        (c) => c.CookiesComponent,
      ),
  },
  {
    path: 'terms-conditions',
    loadComponent: () =>
      import('./views/terms-conditions/terms-conditions.component').then(
        (c) => c.TermsConditionsComponent,
      ),
  },
  {
    path: 'privacy-policy',
    loadComponent: () =>
      import('./views/privacy-policy/privacy-policy.component').then(
        (c) => c.PrivacyPolicyComponent,
      ),
  },
  {
    path: '',
    title: 'Lavendlik',
    loadComponent: () =>
      import('./views/home/home.component').then((c) => c.HomeComponent),
  },
];
