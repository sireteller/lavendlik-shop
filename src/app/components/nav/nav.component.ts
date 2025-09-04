import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProductInfoService } from '../../services/product-info.service';
import { LogoComponent } from '../logo/logo.component';
import {
  faBasketShopping,
  faBars,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Category } from '../../interfaces/product-info.interface';
import { NgForOf, NgIf } from '@angular/common';
import { CartPreviewComponent } from '../cart-preview/cart-preview.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-nav',
  imports: [
    RouterLink,
    RouterLinkActive,
    LogoComponent,
    FontAwesomeModule,
    CartPreviewComponent
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent implements OnInit {
  // TODO: refresh browser on reroute or move focus to new title (focus must not move to title if no rerouting occurred
  // ie if someone navigated to the page via an external link or the page was simply refreshed)

  faBasketShopping = faBasketShopping;
  faBars = faBars;
  faXmark = faXmark;

  cartItemTotal: number = 0;
  categories: Category[] = [];

  @ViewChild('dialog') dialog?: ElementRef;
  @ViewChild('cartPreview') cartPreview?: ElementRef;

  constructor(
    private productInfoService: ProductInfoService,
    private cartService: CartService,
  ) { }

  ngOnInit() {
    this.productInfoService.getCategories().subscribe((result) => {
      let categories: Category[] = [];

      result.forEach((category) => {
        this.productInfoService
          .getProductsByCategory(category.name)
          .subscribe((catResult) => {
            if (catResult.length > 0) {
              categories.push(category);
            }
          });
      });

      this.categories = categories;
    });

    this.cartService.cart$.subscribe((result) => {
      let total = 0;

      if (!!result) {
        result.items.forEach((item) => {
          total += item.amount;
        });
      }

      this.cartItemTotal = total;
    });
  }

  // TODO: lock body scrolling when opened
  openDialog() {
    this.dialog?.nativeElement.showModal();
  }

  // TODO: close dialog on backdrop click/tap
  // 4 future: https://web.dev/blog/web-platform-07-2025?hl=en#the_closedby_attribute_of_the_dialog_element
  closeDialog() {
    this.dialog?.nativeElement.close();
  }
}
