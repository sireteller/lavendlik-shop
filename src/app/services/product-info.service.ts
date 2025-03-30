import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category, Product } from '../interfaces/product-info.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductInfoService {
  url = 'http://bee.local:5005/api';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.url}/category`);
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${this.url}/category/${category}/products`,
    );
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.url}/product/${id}`);
  }

  getFeaturedProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/product/featured`);
  }
}
