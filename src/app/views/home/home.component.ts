import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { BannerComponent } from '../../components/banner/banner.component';
import { LogoFullNameComponent } from '../../components/logo-full-name/logo-full-name.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductInfoService } from '../../services/product-info.service';
import { Product } from '../../interfaces/product-info';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    FontAwesomeModule,
    BannerComponent,
    LogoFullNameComponent,
    ProductCardComponent,
    NgForOf,
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  faBasketShopping = faBasketShopping;

  featuredProducts!: Product[];

  constructor(private productInfoService: ProductInfoService) {}

  ngOnInit() {
    this.productInfoService.getFeaturedProducts().subscribe((result) => {
      this.featuredProducts = result;
    });
  }
}
