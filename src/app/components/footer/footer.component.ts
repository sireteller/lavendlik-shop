import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { LogoFullNameComponent } from '../logo-full-name/logo-full-name.component';

@Component({
  selector: 'app-footer',
  imports: [LogoComponent, LogoFullNameComponent],
  templateUrl: './footer.component.html',
  standalone: true,
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
