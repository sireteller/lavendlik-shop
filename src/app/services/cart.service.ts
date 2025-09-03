import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, of } from 'rxjs';
import { Cart, CartItem, AddToCartRequest } from '../interfaces/cart.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  url = '/api';
  private readonly cartSubject = new BehaviorSubject<Cart | null>(null);
  public readonly cart$ = this.cartSubject.asObservable();

  constructor(private http: HttpClient) { }

  loadCart(): void {
    this.http
      .get<Cart>(`${this.url}/cart`)
      .pipe(
        catchError((error) => {
          console.error("Failed to load cart:", error);
          return of(null);
        }),
      )
      .subscribe((cart) => {
        this.cartSubject.next(cart);
      });
  }

  addToCart(item: AddToCartRequest): void {
    this.http
      .post<Cart>(`${this.url}/cart/add`, item)
      .pipe(
        catchError((error) => {
          console.error("Failed to add to cart:", error);
          return of(null);
        }),
      )
      .subscribe((cart) => {
        if (cart) {
          cart.openPreview = true;
          this.cartSubject.next(cart);
        }
      });
  }

  removeFromCart(item: CartItem): void {
    this.http
      .delete<Cart>(`${this.url}/cart/remove/${item.id}`)
      .pipe(
        catchError((error) => {
          console.error("Failed to remove from cart:", error);
          return of(null);
        }),
      )
      .subscribe((cart) => {
        if (cart) {
          this.cartSubject.next(cart);
        }
      });
  }
}
