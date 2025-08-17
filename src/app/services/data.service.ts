// 📁 src/app/services/data.service.ts
import { Injectable, signal } from '@angular/core';
import { Service, Stat, TabItem } from '../models/service.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  // Usando signals para reatividade moderna
  private statsSignal = signal<Stat[]>([
    {
      number: '30+',
      label: 'Years of Experience',
      description: 'Decades serving the agribusiness industry',
      icon: '🏆'
    },
    {
      number: '500+',
      label: 'Projects Completed',
      description: 'Successful implementations worldwide',
      icon: '🚀'
    },
    {
      number: '25+',
      label: 'Countries Served',
      description: 'International presence and expertise',
      icon: '🌍'
    }
  ]);

  private homeServicesSignal = signal<Service[]>([
    {
      id: 'swine',
      title: 'Swine',
      description: 'Swine project consulting, development and management, construction planning and supervision, equipment suppliers of feeding systems, ventilation systems, evaporative cooling, environmental controls, sidewall curtains, heating, drinkers, finishing penning, nursery penning, gestation stalls, farrowing crates.',
      category: 'swine',
      icon: '🐷'
    },
    {
      id: 'poultry',
      title: 'Poultry',
      description: 'Poultry project consulting, development and management, construction planning and supervision, equipment suppliers of feeding systems, ventilation systems, evaporative cooling, environmental controls, sidewall curtains, heating, drinkers, nest systems.',
      category: 'poultry',
      icon: '🐔'
    },
    {
      id: 'grain',
      title: 'Grain Storage',
      description: 'Grain storage project consulting, development and management, construction planning and supervision, equipment suppliers of Grain Silos, Hopper Tanks, bucket elevators, chain conveyors, belt conveyors, screw conveyors, distributors.',
      category: 'grain',
      icon: '🌾'
    }
  ]);

  private productTabsSignal = signal<TabItem[]>([
    { id: 'buildings', label: 'Buildings', href: '#buildings', active: true },
    { id: 'equipments', label: 'Equipments', href: '#equipments', active: false },
    { id: 'grain-storage', label: 'Grain Storage & Handling', href: '#grain-storage', active: false },
    { id: 'feed-transport', label: 'Feed Transportation', href: '#feed-transport', active: false },
    { id: 'ventilation', label: 'Ventilation Equipment', href: '#ventilation', active: false },
    { id: 'confinement', label: 'Confinement', href: '#confinement', active: false },
    { id: 'flooring', label: 'Flooring', href: '#flooring', active: false },
    { id: 'blueprints', label: 'Blue Prints', href: '#blueprints', active: false }
  ]);

  // Getters que retornam signals (reativo)
  get stats() {
    return this.statsSignal.asReadonly();
  }

  get homeServices() {
    return this.homeServicesSignal.asReadonly();
  }

  get productTabs() {
    return this.productTabsSignal.asReadonly();
  }

  // Métodos para atualizar dados
  updateTabActive(activeId: string) {
    this.productTabsSignal.update(tabs => 
      tabs.map(tab => ({
        ...tab,
        active: tab.id === activeId
      }))
    );
  }
}
