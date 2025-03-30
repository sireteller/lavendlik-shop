import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCalendarCheck,
  faFlag,
  faPenToSquare,
} from '@fortawesome/free-regular-svg-icons';
import { BannerComponent } from '../../components/banner/banner.component';
import { LogoFullNameComponent } from '../../components/logo-full-name/logo-full-name.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductInfoService } from '../../services/product-info.service';
import { Product } from '../../interfaces/product-info.interface';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
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
  iconDeliveryMethod = faFlag;
  iconDeliveryTime = faCalendarCheck;
  iconDesignPlace = faPenToSquare;

  featuredProducts!: Product[];

  constructor(private productInfoService: ProductInfoService) {}

  ngOnInit() {
    this.productInfoService.getFeaturedProducts().subscribe((result) => {
      this.featuredProducts = result;
    });
  }
}
