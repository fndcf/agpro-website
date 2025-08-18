import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

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
  
  siteStructure: SiteMapSection[] = [
    {
      title: 'Main Pages',
      links: [
        {
          label: 'Homepage',
          route: '/',
          description: 'Welcome to AgPro International - Excellence in Livestock housing and equipment'
        },
        {
          label: 'Our Mission',
          route: '/mission',
          description: 'Learn about our specialized consulting and company values'
        },
        {
          label: 'Projects',
          route: '/projects',
          description: 'Showcasing decades of excellence in agribusiness solutions worldwide'
        },
        {
          label: 'Contact Us',
          route: '/contact',
          description: 'Get in touch with our experts for your next project'
        }
      ]
    },
    {
      title: 'Products & Services',
      links: [
        {
          label: 'All Products & Services',
          route: '/products',
          description: 'Complete overview of our agribusiness solutions'
        },
        {
          label: 'Buildings',
          route: '/products',
          fragment: 'buildings',
          description: 'Swine and poultry construction planning and supervision'
        },
        {
          label: 'Equipments',
          route: '/products',
          fragment: 'equipments',
          description: 'Complete range of agricultural equipment and systems'
        },
        {
          label: 'Grain Storage & Handling',
          route: '/products',
          fragment: 'grain-storage',
          description: 'Grain silos, elevators, and storage solutions'
        },
        {
          label: 'Feed Transportation',
          route: '/products',
          fragment: 'feed-transport',
          description: 'Advanced feed distribution and conveyor systems'
        },
        {
          label: 'Ventilation Equipment',
          route: '/products',
          fragment: 'ventilation',
          description: 'Climate control and ventilation solutions'
        },
        {
          label: 'Confinement Systems',
          route: '/products',
          fragment: 'confinement',
          description: 'Livestock housing and confinement solutions'
        },
        {
          label: 'Flooring Solutions',
          route: '/products',
          fragment: 'flooring',
          description: 'Specialized flooring for livestock applications'
        },
        {
          label: 'Blue Prints & Design',
          route: '/products',
          fragment: 'blueprints',
          description: 'Professional architectural and engineering services'
        }
      ]
    },
    {
      title: 'Project Categories',
      links: [
        {
          label: 'All Projects',
          route: '/projects',
          description: 'Complete portfolio of our agribusiness projects'
        },
        {
          label: 'Swine Projects',
          route: '/projects?category=swine',
          description: 'Large-scale swine facility projects worldwide'
        },
        {
          label: 'Poultry Projects',
          route: '/projects?category=poultry',
          description: 'Modern poultry complex and housing solutions'
        },
        {
          label: 'Grain Storage Projects',
          route: '/projects?category=grain',
          description: 'High-capacity grain storage and handling facilities'
        },
        {
          label: 'Integrated Solutions',
          route: '/projects?category=integrated',
          description: 'Complete integrated livestock operations'
        }
      ]
    },
    {
      title: 'Legal & Information',
      links: [
        {
          label: 'Privacy Policy',
          route: '/privacy-policy',
          description: 'How we collect, use, and protect your information'
        },
        {
          label: 'Terms of Service',
          route: '/terms-of-service',
          description: 'Terms and conditions for using our website and services'
        },
        {
          label: 'Sitemap',
          route: '/sitemap',
          description: 'Complete navigation guide to our website'
        }
      ]
    },
    {
      title: 'Utility Pages',
      links: [
        {
          label: 'Under Construction',
          route: '/under-construction',
          description: 'Page template for sections in development'
        }
      ]
    }
  ];

  // Método para contabilizar total de páginas
  get totalPages(): number {
    return this.siteStructure.reduce((total, section) => total + section.links.length, 0);
  }

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