import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive, LogoComponent, FontAwesomeModule],
  templateUrl: './nav.component.html',
  standalone: true,
  styleUrl: './nav.component.css',
})
export class NavComponent {
  faBasketShopping = faBasketShopping;
}
