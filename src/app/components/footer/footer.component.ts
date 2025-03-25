import { Component } from '@angular/core';
import { LogoFullNameComponent } from '../logo-full-name/logo-full-name.component';

@Component({
  selector: 'app-footer',
  imports: [LogoFullNameComponent],
  templateUrl: './footer.component.html',
  standalone: true,
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
