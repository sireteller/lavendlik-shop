import { Component } from '@angular/core';
import { LogoFullNameComponent } from '../logo-full-name/logo-full-name.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [LogoFullNameComponent, RouterLink],
  templateUrl: './footer.component.html',
  standalone: true,
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
