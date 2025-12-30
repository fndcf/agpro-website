import { Injectable, signal, inject } from '@angular/core';
import { TabItem } from '../models/service.model';
import { TranslocoService } from '@jsverse/transloco';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private translocoService = inject(TranslocoService);

  // Product Tabs permanecem estáticos
  private productTabsSignal = signal<TabItem[]>([
    { id: 'buildings', label: 'Buildings', href: '#buildings', active: false },
    { id: 'equipments', label: 'Equipments', href: '#equipments', active: false },
    {
      id: 'grain-storage',
      label: 'Grain Storage & Handling',
      href: '#grain-storage',
      active: false,
    },
    { id: 'feed-transport', label: 'Feed Transportation', href: '#feed-transport', active: false },
    { id: 'ventilation', label: 'Ventilation Equipment', href: '#ventilation', active: false },
    { id: 'confinement', label: 'Confinement', href: '#confinement', active: false },
    { id: 'flooring', label: 'Flooring', href: '#flooring', active: false },
    { id: 'blueprints', label: 'Blue Prints', href: '#blueprints', active: false },
  ]);

  // Getter para product tabs
  get productTabs() {
    return this.productTabsSignal.asReadonly();
  }

  // Home Services - retorna chaves de tradução
  homeServices() {
    return [
      {
        id: 'swine',
        titleKey: 'homepage.services.swine.title',
        descriptionKey: 'homepage.services.swine.description',
        get title() {
          return this.titleKey;
        },
        get description() {
          return this.descriptionKey;
        },
      },
      {
        id: 'poultry',
        titleKey: 'homepage.services.poultry.title',
        descriptionKey: 'homepage.services.poultry.description',
        get title() {
          return this.titleKey;
        },
        get description() {
          return this.descriptionKey;
        },
      },
      {
        id: 'grain',
        titleKey: 'homepage.services.grainStorage.title',
        descriptionKey: 'homepage.services.grainStorage.description',
        get title() {
          return this.titleKey;
        },
        get description() {
          return this.descriptionKey;
        },
      },
    ];
  }

  // Stats - retorna chaves de tradução
  stats() {
    return [
      {
        number: '30+',
        labelKey: 'mission.stats.yearsExperience',
        descriptionKey: 'mission.stats.yearsExperienceDesc',
      },
      {
        number: '500+',
        labelKey: 'mission.stats.projectsCompleted',
        descriptionKey: 'mission.stats.projectsCompletedDesc',
      },
      {
        number: '25+',
        labelKey: 'mission.stats.countriesServed',
        descriptionKey: 'mission.stats.countriesServedDesc',
      },
    ];
  }
}
