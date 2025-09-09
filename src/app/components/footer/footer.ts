import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  // Computed signal para traduções
  translations = computed(() => this.i18nService.currentTranslations());

  constructor(private i18nService: I18nService) {}
  
  // Footer links agora usando computed para serem reativos
  footerLinks = computed(() => ({
    products: [
      { 
        label: this.translations().footer.buildings, 
        route: '/products', 
        fragment: 'buildings' 
      },
      { 
        label: this.translations().footer.equipments, 
        route: '/products', 
        fragment: 'equipments' 
      },
      { 
        label: this.translations().footer.grainStorage, 
        route: '/products', 
        fragment: 'grain-storage' 
      },
      { 
        label: this.translations().footer.feedTransportation, 
        route: '/products', 
        fragment: 'feed-transport' 
      }
    ],
    company: [
      { 
        label: this.translations().footer.ourMission, 
        route: '/mission', 
        fragment: null 
      },
      { 
        label: this.translations().footer.projects, 
        route: '/projects', 
        fragment: null 
      },
      { 
        label: this.translations().footer.contacts, 
        route: '/contact', 
        fragment: null 
      }
    ]
  }));

  socialLinks = [
    { 
      icon: 'assets/icons/facebook.svg', 
      title: 'Facebook', 
      url: 'https://www.facebook.com/AgproInternational' 
    },
    { 
      icon: 'assets/icons/instagram.svg', 
      title: 'Instagram', 
      url: 'https://www.instagram.com/agpro_international' 
    }
  ];

  // Método para scroll suave para o topo
  scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}