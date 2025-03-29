import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product-info';
import { ActivatedRoute } from '@angular/router';
import { ProductInfoService } from '../../services/product-info.service';
import { Title } from '@angular/platform-browser';
import { NgForOf, NgIf } from '@angular/common';
import { LoaderComponent } from '../../components/loader/loader.component';

@Component({
  selector: 'app-product',
  imports: [NgIf, LoaderComponent, NgForOf],
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

  colorIsDark(hex: string) {
    /* Copied from https://github.com/scottcorgan/contrast and modified to match my needs */
    const rgb = this.hexToRgb(hex);
    const o = Math.round((rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000);

    return o <= 180;
  }

  /* Copied from https://github.com/scottcorgan/hex-to-rgb and modified to match my needs */
  private hexToRgb(hex: string) {
    /* Remove hash */
    hex = hex.substring(1);

    /* Expand hex */
    if (hex.length === 3) {
      hex = hex
        .split('')
        .reduce(function (accum, value) {
          // @ts-ignore
          return accum.concat([value, value]);
        }, [])
        .join('');
    }

    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return [r, g, b];
  }
}
