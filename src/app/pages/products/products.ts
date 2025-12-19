import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HeroComponent } from '../../components/hero/hero';
import { ImageCarouselComponent, CarouselImage } from '../../components/image-carousel/image-carousel';

interface ProductService {
  id: string;
  titleKey: string;
  descriptionKey: string;
  category: string;
  image: string;
  images: CarouselImage[];
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, TranslocoModule, HeroComponent, ImageCarouselComponent],
  templateUrl: './products.html',
  styleUrls: ['./products.scss'],
})
export class Products implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private fragmentSubscription?: Subscription;

  fallbackImage = 'assets/images/colageagpro.gif';

  // Tabs - usando chaves de tradução
  tabs = [
    { id: 'buildings', labelKey: 'products.tabs.buildings', href: '#buildings', active: false },
    { id: 'equipments', labelKey: 'products.tabs.equipments', href: '#equipments', active: false },
    { id: 'grain-storage', labelKey: 'products.tabs.grainStorage', href: '#grain-storage', active: false },
    { id: 'feed-transport', labelKey: 'products.tabs.feedTransportation', href: '#feed-transport', active: false },
    { id: 'ventilation', labelKey: 'products.tabs.ventilation', href: '#ventilation', active: false },
    { id: 'confinement', labelKey: 'products.tabs.confinement', href: '#confinement', active: false },
    { id: 'flooring', labelKey: 'products.tabs.flooring', href: '#flooring', active: false },
    { id: 'blueprints', labelKey: 'products.tabs.blueprints', href: '#blueprints', active: false },
  ];

  // Product services - usando chaves de tradução
  productServices: ProductService[] = [
    {
      id: 'buildings',
      titleKey: 'products.services.buildings.title',
      descriptionKey: 'products.services.buildings.description',
      category: 'buildings',
      image: 'assets/images/services/buildings/buildings-1.jpg',
      images: [
        { src: 'assets/images/services/buildings/buildings-1.jpg', alt: 'Modern Swine Building Construction' },
        { src: 'assets/images/services/buildings/buildings-2.jpg', alt: 'Poultry Housing Facility' },
        { src: 'assets/images/services/buildings/buildings-3.jpg', alt: 'Livestock Barn Interior' },
        { src: 'assets/images/services/buildings/buildings-4.jpg', alt: 'Ventilation System Installation' },
        { src: 'assets/images/services/buildings/buildings-5.jpg', alt: 'Complete Building Project' },
        { src: 'assets/images/services/buildings/buildings-6.jpg', alt: 'Agricultural Building Complex' },
      ],
    },
    {
      id: 'equipments',
      titleKey: 'products.services.equipments.title',
      descriptionKey: 'products.services.equipments.description',
      category: 'equipment',
      image: 'assets/images/services/equipments/equipment-1.jpg',
      images: [
        { src: 'assets/images/services/equipments/equipment-1.jpg', alt: 'Feeding System Equipment' },
        { src: 'assets/images/services/equipments/equipment-2.jpg', alt: 'Ventilation Fan Systems' },
        { src: 'assets/images/services/equipments/equipment-3.jpg', alt: 'Environmental Control Panel' },
        { src: 'assets/images/services/equipments/equipment-4.jpg', alt: 'Automated Equipment Installation' },
      ],
    },
    {
      id: 'grain-storage',
      titleKey: 'products.services.grainStorage.title',
      descriptionKey: 'products.services.grainStorage.description',
      category: 'grain',
      image: 'assets/images/services/grain-storage/grain-1.jpg',
      images: [
        { src: 'assets/images/services/grain-storage/grain-1.jpg', alt: 'Grain Silo Complex' },
        { src: 'assets/images/services/grain-storage/grain-2.jpg', alt: 'Bucket Elevator System' },
        { src: 'assets/images/services/grain-storage/grain-3.jpg', alt: 'Conveyor Belt Installation' },
        { src: 'assets/images/services/grain-storage/grain-4.jpg', alt: 'Storage Tank Systems' },
        { src: 'assets/images/services/grain-storage/grain-5.jpg', alt: 'Grain Handling Equipment' },
        { src: 'assets/images/services/grain-storage/grain-6.jpg', alt: 'Grain Handling Equipment' },
      ],
    },
    {
      id: 'feed-transport',
      titleKey: 'products.services.feedTransportation.title',
      descriptionKey: 'products.services.feedTransportation.description',
      category: 'equipment',
      image: 'assets/images/services/feed-transport/feed-1.jpg',
      images: [
        { src: 'assets/images/services/feed-transport/feed-1.jpg', alt: 'Automated Feed Distribution' },
        { src: 'assets/images/services/feed-transport/feed-2.jpg', alt: 'Feed Mill Equipment' },
        { src: 'assets/images/services/feed-transport/feed-3.jpg', alt: 'Transport Conveyor System' },
        { src: 'assets/images/services/feed-transport/feed-4.jpg', alt: 'Automated Feed Distribution' },
        { src: 'assets/images/services/feed-transport/feed-5.jpg', alt: 'Feed Mill Equipment' },
        { src: 'assets/images/services/feed-transport/feed-6.jpg', alt: 'Transport Conveyor System' },
        { src: 'assets/images/services/feed-transport/feed-7.jpg', alt: 'Transport Conveyor System' },
      ],
    },
    {
      id: 'ventilation',
      titleKey: 'products.services.ventilation.title',
      descriptionKey: 'products.services.ventilation.description',
      category: 'equipment',
      image: 'assets/images/services/ventilation/ventilation-1.jpg',
      images: [
        { src: 'assets/images/services/ventilation/ventilation-1.jpg', alt: 'Exhaust Fan Installation' },
        { src: 'assets/images/services/ventilation/ventilation-2.jpg', alt: 'Inlet System Setup' },
        { src: 'assets/images/services/ventilation/ventilation-3.jpg', alt: 'Climate Control System' },
        { src: 'assets/images/services/ventilation/ventilation-4.jpg', alt: 'Cooling Pad Installation' },
        { src: 'assets/images/services/ventilation/ventilation-5.jpg', alt: 'Exhaust Fan Installation' },
        { src: 'assets/images/services/ventilation/ventilation-6.jpg', alt: 'Inlet System Setup' },
        { src: 'assets/images/services/ventilation/ventilation-7.jpg', alt: 'Climate Control System' },
      ],
    },
    {
      id: 'confinement',
      titleKey: 'products.services.confinement.title',
      descriptionKey: 'products.services.confinement.description',
      category: 'equipment',
      image: 'assets/images/services/confinement/confinement-1.jpg',
      images: [
        { src: 'assets/images/services/confinement/confinement-1.jpg', alt: 'Gestation Stall System' },
        { src: 'assets/images/services/confinement/confinement-2.jpg', alt: 'Farrowing Crate Setup' },
        { src: 'assets/images/services/confinement/confinement-3.jpg', alt: 'Nursery Pen Configuration' },
        { src: 'assets/images/services/confinement/confinement-4.jpg', alt: 'Gestation Stall System' },
        { src: 'assets/images/services/confinement/confinement-5.jpg', alt: 'Farrowing Crate Setup' },
        { src: 'assets/images/services/confinement/confinement-6.jpg', alt: 'Nursery Pen Configuration' },
        { src: 'assets/images/services/confinement/confinement-7.jpg', alt: 'Nursery Pen Configuration' },
        { src: 'assets/images/services/confinement/confinement-8.jpg', alt: 'Gestation Stall System' },
        { src: 'assets/images/services/confinement/confinement-9.jpg', alt: 'Farrowing Crate Setup' },
        { src: 'assets/images/services/confinement/confinement-10.jpg', alt: 'Nursery Pen Configuration' },
      ],
    },
    {
      id: 'flooring',
      titleKey: 'products.services.flooring.title',
      descriptionKey: 'products.services.flooring.description',
      category: 'equipment',
      image: 'assets/images/services/flooring/flooring-1.jpg',
      images: [
        { src: 'assets/images/services/flooring/flooring-1.jpg', alt: 'Concrete Slat Flooring' },
        { src: 'assets/images/services/flooring/flooring-2.jpg', alt: 'Plastic Nursery Flooring' },
        { src: 'assets/images/services/flooring/flooring-3.jpg', alt: 'Drainage System Installation' },
        { src: 'assets/images/services/flooring/flooring-4.jpg', alt: 'Concrete Slat Flooring' },
        { src: 'assets/images/services/flooring/flooring-5.jpg', alt: 'Plastic Nursery Flooring' },
        { src: 'assets/images/services/flooring/flooring-6.jpg', alt: 'Drainage System Installation' },
        { src: 'assets/images/services/flooring/flooring-7.jpg', alt: 'Concrete Slat Flooring' },
        { src: 'assets/images/services/flooring/flooring-8.jpg', alt: 'Plastic Nursery Flooring' },
        { src: 'assets/images/services/flooring/flooring-9.jpg', alt: 'Drainage System Installation' },
      ],
    },
    {
      id: 'blueprints',
      titleKey: 'products.services.blueprints.title',
      descriptionKey: 'products.services.blueprints.description',
      category: 'equipment',
      image: 'assets/images/services/blueprints/blueprint-1.jpg',
      images: [
        { src: 'assets/images/services/blueprints/blueprint-1.jpg', alt: 'Architectural Design Plans' },
        { src: 'assets/images/services/blueprints/blueprint-2.jpg', alt: 'Technical Engineering Drawings' },
        { src: 'assets/images/services/blueprints/blueprint-3.jpg', alt: 'Construction Documentation' },
      ],
    },
  ];

  ngOnInit() {
    this.fragmentSubscription = this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        this.setActiveTab(fragment);
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
    this.scrollToService(tabId);
  }

  getServiceImages(service: ProductService): CarouselImage[] {
    return service.images || [{ src: service.image || this.fallbackImage, alt: service.titleKey }];
  }

  private scrollToService(serviceId: string) {
    const element = document.getElementById(serviceId);

    if (element) {
      const tabsHeight = document.querySelector('.tabs-container')?.clientHeight || 80;
      const extraOffset = 20;
      const headerOffset = tabsHeight + extraOffset;

      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      this.highlightCard(element);
    }
  }

  private highlightCard(element: HTMLElement) {
    element.classList.add('highlight-card');
    setTimeout(() => {
      element.classList.remove('highlight-card');
    }, 500);
  }
}
