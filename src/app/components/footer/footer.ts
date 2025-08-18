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
      { label: 'Buildings', route: '/products' },
      { label: 'Equipments', route: '/products' },
      { label: 'Grain Storage', route: '/products' },
      { label: 'Feed Transportation', route: '/products' }
    ],
    company: [
      { label: 'Our Mission', route: '/mission' },
      { label: 'Projects', route: '/projects' },
      { label: 'Contacts', route: '/contact' }
    ]
  };

  socialLinks = [
    { icon: '📘', title: 'Facebook', url: '#' },
    { icon: '💼', title: 'LinkedIn', url: '#' },
    { icon: '📸', title: 'Instagram', url: '#' }
  ];
}