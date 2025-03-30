import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInfoService } from '../../services/product-info.service';
import { Product } from '../../interfaces/product-info.interface';
import { NgForOf, NgIf } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { LoaderComponent } from '../../components/loader/loader.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-category',
  imports: [NgForOf, NgIf, LoaderComponent, ProductCardComponent],
  templateUrl: './category.component.html',
  standalone: true,
  styleUrl: './category.component.css',
})
export class CategoryComponent implements OnInit {
  protected categoryName?: string | null;
  categoryDisplayName?: string;
  products!: Product[];

  constructor(
    private route: ActivatedRoute,
    private productInfoService: ProductInfoService,
    private title: Title,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.categoryName = params.get('categoryName');

      if (this.categoryName) {
        this.productInfoService
          .getProductsByCategory(this.categoryName)
          .subscribe((result) => {
            this.products = result;
            this.categoryDisplayName =
              this.products.length > 0
                ? this.products[0].category.displayName
                : '404';
            this.title.setTitle(`${this.categoryDisplayName} | Lavendlik`);
          });
      }
    });
  }
}
