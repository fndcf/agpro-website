import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../services/i18n.service';

interface SiteMapSection {
  title: string;
  links: SiteMapLink[];
}

interface SiteMapLink {
  label: string;
  route: string;
  fragment?: string;
  description?: string;
}

@Component({
  selector: 'app-sitemap',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sitemap.html',
  styleUrls: ['./sitemap.scss']
})
export class Sitemap {
  
  // Computed signal para traduções
  translations = computed(() => this.i18nService.currentTranslations());

  constructor(private i18nService: I18nService) {}
  
  // Site structure usando computed para ser reativo às mudanças de idioma
  siteStructure = computed((): SiteMapSection[] => {
    const t = this.translations().sitemap;
    
    return [
      {
        title: t.mainPages.title,
        links: [
          {
            label: t.mainPages.homepage.label,
            route: '/',
            description: t.mainPages.homepage.description
          },
          {
            label: t.mainPages.mission.label,
            route: '/mission',
            description: t.mainPages.mission.description
          },
          {
            label: t.mainPages.projects.label,
            route: '/projects',
            description: t.mainPages.projects.description
          },
          {
            label: t.mainPages.contact.label,
            route: '/contact',
            description: t.mainPages.contact.description
          }
        ]
      },
      {
        title: t.productsServices.title,
        links: [
          {
            label: t.productsServices.allProducts.label,
            route: '/products',
            description: t.productsServices.allProducts.description
          },
          {
            label: t.productsServices.buildings.label,
            route: '/products',
            fragment: 'buildings',
            description: t.productsServices.buildings.description
          },
          {
            label: t.productsServices.equipments.label,
            route: '/products',
            fragment: 'equipments',
            description: t.productsServices.equipments.description
          },
          {
            label: t.productsServices.grainStorage.label,
            route: '/products',
            fragment: 'grain-storage',
            description: t.productsServices.grainStorage.description
          },
          {
            label: t.productsServices.feedTransportation.label,
            route: '/products',
            fragment: 'feed-transport',
            description: t.productsServices.feedTransportation.description
          },
          {
            label: t.productsServices.ventilation.label,
            route: '/products',
            fragment: 'ventilation',
            description: t.productsServices.ventilation.description
          },
          {
            label: t.productsServices.confinement.label,
            route: '/products',
            fragment: 'confinement',
            description: t.productsServices.confinement.description
          },
          {
            label: t.productsServices.flooring.label,
            route: '/products',
            fragment: 'flooring',
            description: t.productsServices.flooring.description
          },
          {
            label: t.productsServices.blueprints.label,
            route: '/products',
            fragment: 'blueprints',
            description: t.productsServices.blueprints.description
          }
        ]
      },
      {
        title: t.projectCategories.title,
        links: [
          {
            label: t.projectCategories.allProjects.label,
            route: '/projects',
            description: t.projectCategories.allProjects.description
          },
          {
            label: t.projectCategories.swineProjects.label,
            route: '/projects?category=swine',
            description: t.projectCategories.swineProjects.description
          },
          {
            label: t.projectCategories.poultryProjects.label,
            route: '/projects?category=poultry',
            description: t.projectCategories.poultryProjects.description
          },
          {
            label: t.projectCategories.grainProjects.label,
            route: '/projects?category=grain',
            description: t.projectCategories.grainProjects.description
          },
          {
            label: t.projectCategories.integratedSolutions.label,
            route: '/projects?category=integrated',
            description: t.projectCategories.integratedSolutions.description
          }
        ]
      },
      {
        title: t.legalInfo.title,
        links: [
          {
            label: t.legalInfo.privacyPolicy.label,
            route: '/privacy-policy',
            description: t.legalInfo.privacyPolicy.description
          },
          {
            label: t.legalInfo.termsOfService.label,
            route: '/terms-of-service',
            description: t.legalInfo.termsOfService.description
          },
          {
            label: t.legalInfo.sitemap.label,
            route: '/sitemap',
            description: t.legalInfo.sitemap.description
          }
        ]
      },
      {
        title: t.utilityPages.title,
        links: [
          {
            label: t.utilityPages.underConstruction.label,
            route: '/under-construction',
            description: t.utilityPages.underConstruction.description
          }
        ]
      }
    ];
  });

  // Método para contabilizar total de páginas
  totalPages = computed(() => {
    return this.siteStructure().reduce((total, section) => total + section.links.length, 0);
  });

  // Método para converter título em ID válido
  getSectionId(title: string): string {
    return title.toLowerCase().replace(/\s+/g, '-');
  }

  // Método para scroll suave para seção
  scrollToSection(sectionTitle: string) {
    const element = document.getElementById(this.getSectionId(sectionTitle));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}