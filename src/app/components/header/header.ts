// 📁 src/app/components/header/header.ts
import { Component, OnInit, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { I18nService, Language } from '../../services/i18n.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;

  // Computed signal para traduções
  translations = computed(() => this.i18nService.currentTranslations());
  currentLanguage = computed(() => this.i18nService.currentLanguage());

  constructor(private i18nService: I18nService) {}

  ngOnInit() {
    // Inicializa o idioma salvo no localStorage
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
      url: 'https://www.facebook.com/AgproInternational' 
    },
    { 
      icon: 'assets/icons/instagram.svg', 
      title: 'Instagram', 
      url: 'https://www.instagram.com/agpro_international' 
    }
  ];

  // Navigation items - agora usando computed
  navItems = computed(() => [
    { 
      label: this.translations().header.home, 
      route: '/', 
      exact: true 
    },
    { 
      label: this.translations().header.mission, 
      route: '/mission', 
      exact: false 
    },
    { 
      label: this.translations().header.products, 
      route: '/products', 
      exact: false 
    },
    { 
      label: this.translations().header.projects, 
      route: '/projects', 
      exact: false 
    },
    { 
      label: this.translations().header.contact, 
      route: '/contact', 
      exact: false 
    }
  ]);

  // Language flags - Usando emojis em vez de SVG complexo
  languages = [
    {
      code: 'es' as Language,
      title: 'Español',
      flagUrl: 'https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f1ea-1f1f8.svg'
    },
    {
      code: 'en' as Language,
      title: 'English', 
      flagUrl: 'https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f1fa-1f1f8.svg'
    },
    {
      code: 'pt' as Language,
      title: 'Português',
      flagUrl: 'https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f1e7-1f1f7.svg'
    }
  ];
}