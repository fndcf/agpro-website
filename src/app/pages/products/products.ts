// 📁 src/app/pages/products/products.ts
import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero';
import { ServiceCardComponent } from '../../components/service-card/service-card';
import { DataService } from '../../services/data.service';
import { Service } from '../../models/service.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, HeroComponent, ServiceCardComponent],
  templateUrl: './products.html',
  styleUrls: ['./products.scss']
})
export class Products {
  tabs = computed(() => this.dataService.productTabs());
  
  // Mock services data for products page
  productServices: Service[] = [
    {
      id: 'buildings',
      title: 'Buildings',
      description: 'Swine project consulting, development and management, construction planning and supervision, equipment suppliers of feeding systems, ventilation systems, evaporative cooling, environmental controls, sidewall curtains, heating, drinkers, finishing penning, nursery penning, gestation stalls, farrowing crates, concrete slats, plastic flooring for nurseries and farrowing crates.',
      category: 'buildings'
    },
    {
      id: 'equipments',
      title: 'Equipments',
      description: 'Complete range of agricultural equipment including feeding systems, ventilation systems, evaporative cooling, environmental controls, sidewall curtains, heating systems, water management systems, and specialized livestock housing equipment.',
      category: 'equipment'
    },
    {
      id: 'grain-storage',
      title: 'Grain Storage and Handling',
      description: 'Grain storage project consulting, development and management, equipment suppliers of Grain Silos, Hopper Tanks, bucket elevators, chain conveyors, belt conveyors, screw conveyors, distributors, automatic control systems and electrical installations.',
      category: 'grain'
    },
    {
      id: 'feed-transport',
      title: 'Feed Transportation Systems',
      description: 'Advanced feed transportation and distribution systems including automated feeding equipment, conveyor systems, feed mills, and complete turnkey feeding solutions for livestock operations.',
      category: 'equipment'
    },
    {
      id: 'ventilation',
      title: 'Ventilation Equipment',
      description: 'State-of-the-art ventilation systems including exhaust fans, inlet systems, environmental controls, cooling pads, heating systems, and complete climate control solutions.',
      category: 'equipment'
    },
    {
      id: 'confinement',
      title: 'Confinement',
      description: 'Specialized confinement systems including gestation stalls, farrowing crates, nursery penning, finishing pens, and complete housing solutions designed for optimal animal welfare and productivity.',
      category: 'equipment'
    },
    {
      id: 'flooring',
      title: 'Flooring',
      description: 'Comprehensive flooring solutions including concrete slats, plastic flooring for nurseries and farrowing crates, drainage systems, and specialized flooring for different livestock applications.',
      category: 'equipment'
    },
    {
      id: 'blueprints',
      title: 'Blue Prints',
      description: 'Professional architectural and engineering services including project design, blueprints, construction planning, technical drawings, and complete project documentation and supervision.',
      category: 'equipment'
    }
  ];

  constructor(private dataService: DataService) {}

  setActiveTab(tabId: string) {    
    // Faz scroll suave para a seção correspondente
    this.scrollToService(tabId);
  }

  private scrollToService(serviceId: string) {
    // Encontra o elemento com o ID correspondente
    const element = document.getElementById(serviceId);
    
    if (element) {
      // Calcula offset considerando apenas as tabs sticky
      const tabsHeight = document.querySelector('.tabs-container')?.clientHeight || 80;
      const extraOffset = 20; // Margem adicional para respirar
      const headerOffset = tabsHeight + extraOffset;
      
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      // Scroll suave até a posição
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Opcional: destacar temporariamente o card
      this.highlightCard(element);
    } else {
      console.warn(`Service element with ID '${serviceId}' not found`);
    }
  }

  private highlightCard(element: HTMLElement) {
    // Adiciona uma classe de destaque temporariamente
    element.classList.add('highlight-card');
    
    // Remove a classe após 2 segundos
    setTimeout(() => {
      element.classList.remove('highlight-card');
    }, 2000);
  }
}