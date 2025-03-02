import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInfoService } from '../../services/product-info.service';
import { Product } from '../../interfaces/product-info';
import { NgForOf } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-category',
  imports: [NgForOf],
  templateUrl: './category.component.html',
  standalone: true,
  styleUrl: './category.component.css',
})
export class CategoryComponent implements OnInit {
  protected categoryName?: string | null;
  categoryDisplayName?: string;
  products: Product[] = [];

  @ViewChild('heading') heading?: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private productInfoService: ProductInfoService,
    private title: Title,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.categoryName = params.get('categoryName');
      setTimeout(() => {
        this.heading?.nativeElement?.focus();
      });

      if (this.categoryName) {
        this.productInfoService
          .getProductsByCategory(this.categoryName)
          .subscribe((result) => {
            this.products = result;
            this.categoryDisplayName = this.products[0].category.displayName;
            this.title.setTitle(`${this.categoryDisplayName} | Lavendlik`);
          });
      }
    });
  }
}
