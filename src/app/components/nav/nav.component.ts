import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive, LogoComponent],
  templateUrl: './nav.component.html',
  standalone: true,
  styleUrl: './nav.component.css',
})
export class NavComponent {}
