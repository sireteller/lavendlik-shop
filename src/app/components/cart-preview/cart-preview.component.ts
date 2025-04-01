import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faTrashCan, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../interfaces/cart.interface';
import { NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-preview',
  imports: [FaIconComponent, NgForOf, RouterLink],
  templateUrl: './cart-preview.component.html',
  standalone: true,
  styleUrl: './cart-preview.component.css',
})
export class CartPreviewComponent implements OnInit {
  faXmark = faXmark;
  iconRemoveItem = faTrashCan;

  items: CartItem[] = [];
  totalPrice: number = 0;

  @ViewChild('dialog') dialog?: ElementRef;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.loadCart();

    this.cartService.cartObservable.subscribe((result) => {
      if (!!result && result.openPreview) {
        this.open();
      }

      this.items = result ? result.items : [];
      this.totalPrice = result ? result.totalPrice : 0;
    });
  }

  // TODO: lock body scrolling when opened
  open() {
    this.dialog?.nativeElement.showModal();
  }

  // TODO: close dialog on backdrop click/tap
  close() {
    this.dialog?.nativeElement.close();
  }

  removeItem(item: CartItem) {
    this.cartService.removeFromCart(item);
  }
}
