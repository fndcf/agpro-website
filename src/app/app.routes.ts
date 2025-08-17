// 📁 src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
    title: 'AgPro Inc - Excellence in Agribusiness'
  },
  { 
    path: 'mission', 
    loadComponent: () => import('./pages/mission/mission').then(m => m.Mission),
    title: 'Our Mission - AgPro Inc'
  },
  { 
    path: 'products', 
    loadComponent: () => import('./pages/products/products').then(m => m.Products),
    title: 'Products & Services - AgPro Inc'
  },
  { 
    path: 'projects', 
    loadComponent: () => import('./pages/projects/projects').then(m => m.Projects),
    title: 'Projects - AgPro Inc'
  },
  { 
    path: 'contact', 
    loadComponent: () => import('./pages/contact/contact').then(m => m.Contact),
    title: 'Contact Us - AgPro Inc'
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];