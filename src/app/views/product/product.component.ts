import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product-info';
import { ActivatedRoute } from '@angular/router';
import { ProductInfoService } from '../../services/product-info.service';
import { Title } from '@angular/platform-browser';
import { NgIf } from '@angular/common';
import { LoaderComponent } from '../../components/loader/loader.component';

@Component({
  selector: 'app-product',
  imports: [NgIf, LoaderComponent],
  templateUrl: './product.component.html',
  standalone: true,
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  productId?: string | null;
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private productInfoService: ProductInfoService,
    private title: Title,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.productId = params.get('productId');

      if (this.productId) {
        this.productInfoService
          .getProductById(this.productId)
          .subscribe((result) => {
            this.product = result;
            this.title.setTitle(
              `${this.product.name} - ${this.product.subcategory ? this.product.subcategory.name : this.product.category.displayName} | Lavendlik`,
            );
          });
      }
    });
  }
}
