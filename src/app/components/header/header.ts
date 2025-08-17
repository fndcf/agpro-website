// 📁 src/app/components/header/header.component.ts
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
}