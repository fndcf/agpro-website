import { Component, OnInit, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { I18nService, Language } from '../../services/i18n.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, TranslocoModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;

  currentLanguage = computed(() => this.i18nService.currentLanguage());

  constructor(private i18nService: I18nService) {}

  ngOnInit() {
    this.i18nService.initializeLanguage();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  changeLanguage(lang: Language) {
    this.i18nService.setLanguage(lang);
  }

  // Links de redes sociais
  socialLinks = [
    {
      icon: 'assets/icons/facebook.svg',
      title: 'Facebook',
      url: 'https://www.facebook.com/AgproInternational',
    },
    {
      icon: 'assets/icons/instagram.svg',
      title: 'Instagram',
      url: 'https://www.instagram.com/agpro_international',
    },
  ];

  // Navigation items - usando chaves de tradução
  navItems = [
    { labelKey: 'header.home', route: '/', exact: true },
    { labelKey: 'header.mission', route: '/mission', exact: false },
    // { labelKey: 'header.projects', route: '/projects', exact: false },
    { labelKey: 'header.contact', route: '/contact', exact: false },
  ];

  // Language flags
  languages = [
    {
      code: 'es' as Language,
      title: 'Español',
      flagUrl:
        'https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f1ea-1f1f8.svg',
    },
    {
      code: 'en' as Language,
      title: 'English',
      flagUrl:
        'https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f1fa-1f1f8.svg',
    },
    {
      code: 'pt' as Language,
      title: 'Português',
      flagUrl:
        'https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f1e7-1f1f7.svg',
    },
  ];

  // Método para scroll suave para o topo
  scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  // TrackBy functions para otimização de ngFor
  trackBySocialLink(index: number, social: { url: string }): string {
    return social.url;
  }

  trackByLanguage(index: number, lang: { code: Language }): string {
    return lang.code;
  }

  trackByNavItem(index: number, item: { route: string }): string {
    return item.route;
  }
}
