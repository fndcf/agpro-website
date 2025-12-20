import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { ToastComponent } from './components/toast/toast';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';
import { I18nService } from './services/i18n.service';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ToastComponent],
  template: `
    <div class="app-container min-h-screen flex flex-col">
      <app-header class="header-fixed"></app-header>
      <main class="main-content flex-grow">
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
      <app-toast></app-toast>
    </div>
  `,
  styleUrls: ['./app.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller,
    private i18nService: I18nService,
    private seoService: SeoService
  ) {}

  ngOnInit() {
    this.i18nService.initializeLanguage();
    this.seoService.init();

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (event.url.includes('#')) {
          const fragment = event.url.split('#')[1];
          setTimeout(() => this.viewportScroller.scrollToAnchor(fragment), 100);
        } else {
          this.viewportScroller.scrollToPosition([0, 0]);
        }
      });
  }
}