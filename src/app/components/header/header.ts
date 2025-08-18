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
    { icon: '📘', title: 'Facebook', url: '#' },
    { icon: '💼', title: 'LinkedIn', url: '#' },
    { icon: '📸', title: 'Instagram', url: '#' }
  ];

  // Navigation items
  navItems = [
    { label: 'Home', route: '/', exact: true },
    { label: 'Our Mission', route: '/mission', exact: false },
    { label: 'Products and Services', route: '/products', exact: false },
    { label: 'Projects', route: '/projects', exact: false },
    { label: 'Contacts', route: '/contact', exact: false }
  ];

  // Language flags with proper SVG data
  languages = [
    {
      code: 'es',
      title: 'Español',
      flag: `<svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="16" fill="#C60B1E"/>
        <rect y="5.33" width="24" height="5.33" fill="#FFC400"/>
        <rect y="10.67" width="24" height="5.33" fill="#C60B1E"/>
      </svg>`
    },
    {
      code: 'en',
      title: 'English',
      flag: `<svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="16" fill="#012169"/>
        <path d="M0 0L24 16M24 0L0 16" stroke="#FFFFFF" stroke-width="1.5"/>
        <path d="M12 0V16M0 8H24" stroke="#FFFFFF" stroke-width="2.5"/>
        <path d="M12 0V16M0 8H24" stroke="#C8102E" stroke-width="1.5"/>
      </svg>`
    },
    {
      code: 'pt',
      title: 'Português',
      flag: `<svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="16" fill="#009739"/>
        <path d="M0 8L12 2L24 8L12 14L0 8Z" fill="#FEDD00"/>
        <circle cx="12" cy="8" r="3" fill="#012169"/>
      </svg>`
    }
  ];
}