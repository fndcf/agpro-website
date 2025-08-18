// 📁 src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
    title: 'AgPro International'
  },
  { 
    path: 'mission', 
    loadComponent: () => import('./pages/mission/mission').then(m => m.Mission),
    title: 'Our Mission - AgPro International'
  },
  { 
    path: 'products', 
    loadComponent: () => import('./pages/products/products').then(m => m.Products),
    title: 'Products & Services - AgPro International'
  },
  { 
    path: 'projects', 
    loadComponent: () => import('./pages/projects/projects').then(m => m.Projects),
    title: 'Projects - AgPro International'
  },
  { 
    path: 'contact', 
    loadComponent: () => import('./pages/contact/contact').then(m => m.Contact),
    title: 'Contact Us - AgPro International'
  },
  { 
    path: 'under-construction', 
    loadComponent: () => import('./pages/under-construction/under-construction').then(m => m.UnderConstruction),
    title: 'Under Construction - AgPro International'
  },
  { 
    path: 'privacy-policy', 
    loadComponent: () => import('./pages/privacy-policy/privacy-policy').then(m => m.PrivacyPolicy),
    title: 'Privacy Policy - AgPro International'
  },
  { 
    path: 'terms-of-service', 
    loadComponent: () => import('./pages/terms-of-service/terms-of-service').then(m => m.TermsOfService),
    title: 'Terms of Service - AgPro International'
  },
  { 
    path: 'sitemap', 
    loadComponent: () => import('./pages/sitemap/sitemap').then(m => m.Sitemap),
    title: 'Sitemap - AgPro International'
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];