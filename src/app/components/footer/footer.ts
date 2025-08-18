// 📁 src/app/components/footer/footer.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  footerLinks = {
    products: [
      { label: 'Buildings', route: '/products', fragment: 'buildings' },
      { label: 'Equipments', route: '/products', fragment: 'equipments' },
      { label: 'Grain Storage', route: '/products', fragment: 'grain-storage' },
      { label: 'Feed Transportation', route: '/products', fragment: 'feed-transport' }
    ],
    company: [
      { label: 'Our Mission', route: '/mission', fragment: null },
      { label: 'Projects', route: '/projects', fragment: null },
      { label: 'Contacts', route: '/contact', fragment: null }
    ]
  };

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

  // Método para scroll suave para o topo
  scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}