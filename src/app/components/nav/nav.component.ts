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
import { NgForOf } from '@angular/common';
import { CartPreviewComponent } from '../cart-preview/cart-preview.component';

@Component({
  selector: 'app-nav',
  imports: [
    RouterLink,
    RouterLinkActive,
    LogoComponent,
    FontAwesomeModule,
    NgForOf,
    CartPreviewComponent,
  ],
  templateUrl: './nav.component.html',
  standalone: true,
  styleUrl: './nav.component.css',
})
export class NavComponent implements OnInit {
  // TODO: refresh browser on reroute or move focus to new title (focus must not move to title if no rerouting occurred
  // ie if someone navigated to the page via an external link or the page was simply refreshed)

  faBasketShopping = faBasketShopping;
  faBars = faBars;
  faXmark = faXmark;

  categories: Category[] = [];

  @ViewChild('dialog') dialog?: ElementRef;
  @ViewChild('cartPreview') cartPreview?: ElementRef;

  constructor(private productInfoService: ProductInfoService) {}

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
  }

  // TODO: lock body scrolling when opened
  openDialog() {
    this.dialog?.nativeElement.showModal();
  }

  // TODO: close dialog on backdrop click/tap
  closeDialog() {
    this.dialog?.nativeElement.close();
  }
}
