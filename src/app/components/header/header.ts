// 📁 src/app/components/header/header.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
  isMenuOpen = false;
  currentLanguage = 'en';

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  changeLanguage(lang: string) {
    this.currentLanguage = lang;
    // Aqui você pode implementar a lógica de internacionalização
    console.log('Language changed to:', lang);
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

  

  // Navigation items
  navItems = [
    { label: 'Home', route: '/', exact: true },
    { label: 'Our Mission', route: '/mission', exact: false },
    { label: 'Products and Services', route: '/products', exact: false },
    { label: 'Projects', route: '/projects', exact: false },
    { label: 'Contacts', route: '/contact', exact: false }
  ];

  // Language flags - Usando emojis em vez de SVG complexo
  languages = [
    {
      code: 'es',
      title: 'Español',
      flagUrl: 'https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f1ea-1f1f8.svg'
    },
    {
      code: 'en',
      title: 'English', 
      flagUrl: 'https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f1fa-1f1f8.svg'
    },
    {
      code: 'pt',
      title: 'Português',
      flagUrl: 'https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f1e7-1f1f7.svg'
    }
  ];
}