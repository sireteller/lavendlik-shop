import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart, CartItem } from '../interfaces/cart.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  url = '/api';
  subject = new BehaviorSubject<Cart | null>(null);
  cartObservable;

  constructor(private http: HttpClient) {
    this.cartObservable = this.subject.asObservable();
  }

  loadCart(): void {
    this.http.get<Cart>(`${this.url}/cart`).subscribe((cart) => {
      this.subject.next(cart);
    });
  }

  addToCart(item: any): void {
    this.http.post<Cart>(`${this.url}/cart/add`, item).subscribe((cart) => {
      cart.openPreview = true;
      this.subject.next(cart);
    });
  }

  removeFromCart(item: CartItem): void {
    this.http
      .delete<Cart>(`${this.url}/cart/remove/${item.id}`)
      .subscribe((cart) => {
        this.subject.next(cart);
      });
  }
}
