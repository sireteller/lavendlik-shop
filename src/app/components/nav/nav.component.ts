import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProductInfoService } from '../../services/product-info.service';
import { LogoComponent } from '../logo/logo.component';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Category } from '../../interfaces/product-info';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-nav',
  imports: [
    RouterLink,
    RouterLinkActive,
    LogoComponent,
    FontAwesomeModule,
    NgForOf,
  ],
  templateUrl: './nav.component.html',
  standalone: true,
  styleUrl: './nav.component.css',
})
export class NavComponent implements OnInit {
  faBasketShopping = faBasketShopping;
  categories: Category[] = [];

  constructor(private productInfoService: ProductInfoService) {}

  ngOnInit() {
    this.productInfoService.getCategories().subscribe((result) => {
      this.categories = result;
    });
  }
}
