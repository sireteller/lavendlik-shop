import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCalendarCheck,
  faFlag,
  faPenToSquare,
} from '@fortawesome/free-regular-svg-icons';
import { PreorderComponent } from '../preorder/preorder.component';

@Component({
  selector: 'app-home',
  imports: [FontAwesomeModule, PreorderComponent],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css',
})
export class HomeComponent {
  iconDeliveryMethod = faFlag;
  iconDesignPlace = faPenToSquare;
}
