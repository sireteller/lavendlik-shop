import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart, CartItem } from '../interfaces/cart.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  url = '/api';

  constructor(private http: HttpClient) {}

  getCart(): Observable<Cart> {
    return this.http.get<Cart>(`${this.url}/cart`);
  }

  addToCart(item: any): Observable<Cart> {
    return this.http.post<Cart>(`${this.url}/cart/add`, item);
  }

  removeFromCart(item: CartItem): Observable<Cart> {
    return this.http.delete<Cart>(`${this.url}/cart/remove/${item.id}`);
  }
}
