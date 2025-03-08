import { Component, Input } from '@angular/core';
import { Color } from '../../interfaces/product-info';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [NgForOf],
  templateUrl: './product-card.component.html',
  standalone: true,
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input({ required: true }) category!: string;
  @Input({ required: true }) colors!: Color[];
  @Input({ required: true }) imgSrc!: string;
  @Input({ required: true }) price!: string;
  @Input({ required: true }) productName!: string;
}
