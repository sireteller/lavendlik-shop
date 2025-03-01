import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css',
})
export class HomeComponent {
  faBasketShopping = faBasketShopping;
}
