// 📁 src/app/app.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div class="app-container min-h-screen flex flex-col">
      <app-header class="header-fixed"></app-header>
      <main class="main-content flex-grow">
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styleUrls: ['./app.scss']
})
export class AppComponent {
  title = 'AgPro Inc - Excellence in Agribusiness';
}