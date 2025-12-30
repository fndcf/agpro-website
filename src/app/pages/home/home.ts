import {
  Component,
  computed,
  OnInit,
  inject,
  DestroyRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { HeroComponent } from '../../components/hero/hero';
import { HomeCardComponent } from '../../components/home-card/home-card';
import { DataService } from '../../services/data.service';
import {
  ImageCarouselComponent,
  CarouselImage,
} from '../../components/image-carousel/image-carousel';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import {
  ProductService,
  ProductTab,
  PRODUCT_TABS,
  PRODUCT_SERVICES,
} from '../../data/products.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    TranslocoModule,
    HeroComponent,
    HomeCardComponent,
    ImageCarouselComponent,
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home implements OnInit {
  services = computed(() => this.dataService.homeServices());
  private route = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);

  fallbackImage = 'assets/images/colageagpro.gif';

  tabs: ProductTab[] = PRODUCT_TABS;
  productServices: ProductService[] = PRODUCT_SERVICES;

  ngOnInit() {
    this.route.fragment.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((fragment) => {
      if (fragment) {
        this.setActiveTab(fragment);
        setTimeout(() => {
          this.scrollToService(fragment);
        }, 300);
      }
    });
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

  trackByTab(index: number, tab: ProductTab): string {
    return tab.id;
  }

  constructor(private dataService: DataService, private router: Router) {}

  navigateToProducts() {
    this.router.navigate(['/products']);
  }

  // TrackBy function para otimização de ngFor
  trackByService(index: number, service: { id: string }): string {
    return service.id;
  }
}
