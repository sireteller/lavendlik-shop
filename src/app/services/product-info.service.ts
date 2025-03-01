import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/product-info';

@Injectable({
  providedIn: 'root',
})
export class ProductInfoService {
  url = 'http://bee.local:5005/api';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.url}/category`);
  }

  getProductsByCategory(category: string): Observable<any> {
    return this.http.get(`${this.url}/category/${category}/products`);
  }
}
