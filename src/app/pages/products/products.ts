import { Component, computed, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero';
import { ServiceCardComponent } from '../../components/service-card/service-card';
import { DataService } from '../../services/data.service';
import { Service } from '../../models/service.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, HeroComponent, ServiceCardComponent],
  templateUrl: './products.html',
  styleUrls: ['./products.scss']
})
export class Products implements OnInit, OnDestroy{
  tabs = computed(() => this.dataService.productTabs());
  private fragmentSubscription?: Subscription;
  
  // Imagem fallback caso alguma imagem específica não esteja disponível
  fallbackImage = 'assets/images/colageagpro.gif';
  
  // Mock services data for products page - ATUALIZADO COM IMAGENS
  productServices: Service[] = [
    {
      id: 'buildings',
      title: 'Buildings',
      description: 'Swine project consulting, development and management, construction planning and supervision, equipment suppliers of feeding systems, ventilation systems, evaporative cooling, environmental controls, sidewall curtains, heating, drinkers, finishing penning, nursery penning, gestation stalls, farrowing crates, concrete slats, plastic flooring for nurseries and farrowing crates.',
      category: 'buildings',
      image: 'assets/images/services/buildings.jpg'
    },
    {
      id: 'equipments',
      title: 'Equipments',
      description: 'Complete range of agricultural equipment including feeding systems, ventilation systems, evaporative cooling, environmental controls, sidewall curtains, heating systems, water management systems, and specialized livestock housing equipment.',
      category: 'equipment',
      image: 'assets/images/services/equipments.jpg'
    },
    {
      id: 'grain-storage',
      title: 'Grain Storage and Handling',
      description: 'Grain storage project consulting, development and management, equipment suppliers of Grain Silos, Hopper Tanks, bucket elevators, chain conveyors, belt conveyors, screw conveyors, distributors, automatic control systems and electrical installations.',
      category: 'grain',
      image: 'assets/images/services/grain-storage.jpg'
    },
    {
      id: 'feed-transport',
      title: 'Feed Transportation Systems',
      description: 'Advanced feed transportation and distribution systems including automated feeding equipment, conveyor systems, feed mills, and complete turnkey feeding solutions for livestock operations.',
      category: 'equipment',
      image: 'assets/images/services/feed-transport.jpg'
    },
    {
      id: 'ventilation',
      title: 'Ventilation Equipment',
      description: 'State-of-the-art ventilation systems including exhaust fans, inlet systems, environmental controls, cooling pads, heating systems, and complete climate control solutions.',
      category: 'equipment',
      image: 'assets/images/services/ventilation.jpg'
    },
    {
      id: 'confinement',
      title: 'Confinement',
      description: 'Specialized confinement systems including gestation stalls, farrowing crates, nursery penning, finishing pens, and complete housing solutions designed for optimal animal welfare and productivity.',
      category: 'equipment',
      image: 'assets/images/services/confinement.jpg'
    },
    {
      id: 'flooring',
      title: 'Flooring',
      description: 'Comprehensive flooring solutions including concrete slats, plastic flooring for nurseries and farrowing crates, drainage systems, and specialized flooring for different livestock applications.',
      category: 'equipment',
      image: 'assets/images/services/flooring.jpg'
    },
    {
      id: 'blueprints',
      title: 'Blue Prints',
      description: 'Professional architectural and engineering services including project design, blueprints, construction planning, technical drawings, and complete project documentation and supervision.',
      category: 'equipment',
      image: 'assets/images/services/blueprints.jpg'
    }
  ];

  constructor(private dataService: DataService, private route: ActivatedRoute) {}

  ngOnInit() {
    // Escuta mudanças no fragment da URL
    this.fragmentSubscription = this.route.fragment.subscribe(fragment => {
      if (fragment) {
        console.log('Fragment detectado:', fragment);
        // Se há um fragment, ativa a tab correspondente
        this.setActiveTab(fragment);
        
        // Delay para garantir que o DOM foi atualizado
        setTimeout(() => {
          this.scrollToService(fragment);
        }, 300);
      }
    });
  }

  ngOnDestroy() {
    this.fragmentSubscription?.unsubscribe();
  }

  setActiveTab(tabId: string) {    
    // Faz scroll suave para a seção correspondente
    this.scrollToService(tabId);
  }

  // Método para lidar com erro de carregamento de imagem
  onImageError(event: any, service: Service) {
    console.log(`Imagem não encontrada para ${service.title}, usando fallback`);
    event.target.src = this.fallbackImage;
    event.target.alt = `${service.title} - AgPro Inc Service`;
  }

  // Método para obter a imagem do serviço com fallback
  getServiceImage(service: Service): string {
    return service.image || this.fallbackImage;
  }

  // Método para obter alt text da imagem
  getServiceImageAlt(service: Service): string {
    return `${service.title} - AgPro Inc Professional Services`;
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
    }, 500);
  }
}