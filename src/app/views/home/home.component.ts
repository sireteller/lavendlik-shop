import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { BannerComponent } from '../../components/banner/banner.component';
import { LogoFullNameComponent } from '../../components/logo-full-name/logo-full-name.component';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    FontAwesomeModule,
    BannerComponent,
    LogoFullNameComponent,
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css',
})
export class HomeComponent {
  faBasketShopping = faBasketShopping;
}
