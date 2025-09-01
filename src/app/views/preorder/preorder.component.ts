import { Component } from '@angular/core';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-preorder',
  imports: [FaIconComponent, NgForOf],
  templateUrl: './preorder.component.html',
  standalone: true,
  styleUrl: './preorder.component.css',
})
export class PreorderComponent {
  iconThreadInfo = faCircleHalfStroke;
  iconModelInfo = faCircleUser;
  images = [
    { imageUrl: './install-wizard-7.jpg' },
    { imageUrl: './install-wizard-8.jpg' },
    { imageUrl: './install-wizard-1.jpg' },
    { imageUrl: './install-wizard-2.jpg' },
    { imageUrl: './install-wizard-3.jpg' },
    { imageUrl: './install-wizard-4.jpg' },
    { imageUrl: './install-wizard-5.jpg' },
    { imageUrl: './install-wizard-6.jpg' },
  ];
}
