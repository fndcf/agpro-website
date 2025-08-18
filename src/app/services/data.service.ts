// 📁 src/app/services/data.service.ts
import { Injectable, signal, computed, inject } from '@angular/core';
import { Stat, TabItem } from '../models/service.model';
import { HomeService } from '../models/home.model';
import { I18nService } from './i18n.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private i18nService = inject(I18nService);
  
  // Stats agora são computed baseados nas traduções
  stats = computed<Stat[]>(() => {
    const translations = this.i18nService.currentTranslations().homepage.stats;
    return [
      {
        number: '30+',
        label: translations.yearsExperience,
        description: translations.yearsExperienceDesc
      },
      {
        number: '500+',
        label: translations.projectsCompleted,
        description: translations.projectsCompletedDesc
      },
      {
        number: '25+',
        label: translations.countriesServed,
        description: translations.countriesServedDesc
      }
    ];
  });

  // Home Services agora são computed baseados nas traduções
  homeServices = computed<HomeService[]>(() => {
    const translations = this.i18nService.currentTranslations().homepage.services;
    return [
      {
        id: 'swine',
        title: translations.swine.title,
        description: translations.swine.description
      },
      {
        id: 'poultry',
        title: translations.poultry.title,
        description: translations.poultry.description
      },
      {
        id: 'grain',
        title: translations.grainStorage.title,
        description: translations.grainStorage.description
      }
    ];
  });

  // Product Tabs permanecem estáticos por enquanto
  private productTabsSignal = signal<TabItem[]>([
    { id: 'buildings', label: 'Buildings', href: '#buildings', active: false },
    { id: 'equipments', label: 'Equipments', href: '#equipments', active: false },
    { id: 'grain-storage', label: 'Grain Storage & Handling', href: '#grain-storage', active: false },
    { id: 'feed-transport', label: 'Feed Transportation', href: '#feed-transport', active: false },
    { id: 'ventilation', label: 'Ventilation Equipment', href: '#ventilation', active: false },
    { id: 'confinement', label: 'Confinement', href: '#confinement', active: false },
    { id: 'flooring', label: 'Flooring', href: '#flooring', active: false },
    { id: 'blueprints', label: 'Blue Prints', href: '#blueprints', active: false }
  ]);

  // Getter para product tabs
  get productTabs() {
    return this.productTabsSignal.asReadonly();
  }
}