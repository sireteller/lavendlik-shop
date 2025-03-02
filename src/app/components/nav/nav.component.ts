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
  faBars = faBars;
  faXmark = faXmark;

  categories: Category[] = [];
  dialogExpanded: string = 'false';

  @ViewChild('dialog') dialog?: ElementRef;

  constructor(private productInfoService: ProductInfoService) {}

  ngOnInit() {
    this.productInfoService.getCategories().subscribe((result) => {
      this.categories = result;
    });
  }

  openDialog() {
    this.dialog?.nativeElement.showModal();
    this.dialogExpanded = 'true';
  }

  closeDialog() {
    this.dialog?.nativeElement.close();
  }

  onDialogClose() {
    this.dialogExpanded = 'false';
  }
}
