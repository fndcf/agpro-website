import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';
import { I18nService } from './services/i18n.service';

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
export class AppComponent implements OnInit {
  title = 'AgPro International';

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller,
    private i18nService: I18nService
  ) {}

  ngOnInit() {
    // Inicializa o idioma salvo
    this.i18nService.initializeLanguage();
    
    // Escuta mudanças de rota e gerencia scroll
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // Se há fragment na URL, scroll para o elemento
        if (event.url.includes('#')) {
          const fragment = event.url.split('#')[1];
          setTimeout(() => {
            this.viewportScroller.scrollToAnchor(fragment);
          }, 100);
        } else {
          // Se não há fragment, scroll para o topo
          this.viewportScroller.scrollToPosition([0, 0]);
        }
      });
  }
}