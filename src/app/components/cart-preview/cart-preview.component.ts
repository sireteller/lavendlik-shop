import { Component, ElementRef, ViewChild } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-cart-preview',
  imports: [FaIconComponent],
  templateUrl: './cart-preview.component.html',
  standalone: true,
  styleUrl: './cart-preview.component.css',
})
export class CartPreviewComponent {
  faXmark = faXmark;

  @ViewChild('dialog') dialog?: ElementRef;

  // TODO: lock body scrolling when opened
  open() {
    this.dialog?.nativeElement.showModal();
  }

  // TODO: close dialog on backdrop click/tap
  close() {
    this.dialog?.nativeElement.close();
  }
}
