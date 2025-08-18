import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeroComponent } from '../../components/hero/hero';

interface Project {
  id: string;
  title: string;
  location: string;
  year: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  features?: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, HeroComponent],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class Projects {
  
  constructor(private router: Router) {}

  // Imagem fallback caso alguma imagem específica não esteja disponível
  fallbackImage = 'assets/images/colageagpro.gif';
  
  featuredProjects: Project[] = [
    {
      id: 'swine-facility-brazil',
      title: 'Large Scale Swine Facility',
      location: 'São Paulo, Brazil',
      year: '2023',
      category: 'Swine',
      description: 'Complete swine production facility with 5,000 head capacity, featuring state-of-the-art ventilation systems, automated feeding, and advanced waste management.',
      image: 'assets/images/projects/swine-facility-brazil.jpg',
      imageAlt: 'Large Scale Swine Facility in São Paulo, Brazil',
      features: [
        '5,000 head capacity',
        'Automated feeding systems',
        'Climate-controlled environment',
        'Waste management systems',
        'Biosecurity protocols'
      ]
    },
    {
      id: 'poultry-complex-mexico',
      title: 'Modern Poultry Complex',
      location: 'Jalisco, Mexico',
      year: '2023',
      category: 'Poultry',
      description: 'Integrated poultry production complex with multiple houses, featuring advanced environmental controls and automated egg collection systems.',
      image: 'assets/images/projects/poultry-complex-mexico.jpg',
      imageAlt: 'Modern Poultry Complex in Jalisco, Mexico',
      features: [
        '10 production houses',
        'Automated egg collection',
        'Environmental control systems',
        'Biosecurity measures',
        'Energy-efficient design'
      ]
    },
    {
      id: 'grain-storage-argentina',
      title: 'Grain Storage Facility',
      location: 'Buenos Aires, Argentina',
      year: '2022',
      category: 'Grain Storage',
      description: 'High-capacity grain storage facility with advanced aeration and monitoring systems for optimal grain preservation.',
      image: 'assets/images/projects/grain-storage-argentina.jpg',
      imageAlt: 'Grain Storage Facility in Buenos Aires, Argentina',
      features: [
        '50,000 ton capacity',
        'Advanced aeration systems',
        'Temperature monitoring',
        'Automated handling equipment',
        'Quality preservation systems'
      ]
    },
    {
      id: 'integrated-farm-usa',
      title: 'Integrated Livestock Farm',
      location: 'Illinois, USA',
      year: '2022',
      category: 'Integrated',
      description: 'Complete integrated livestock operation combining swine and poultry production with feed mill and grain storage.',
      image: 'assets/images/projects/integrated-farm-usa.jpg',
      imageAlt: 'Integrated Livestock Farm in Illinois, USA',
      features: [
        'Multi-species facility',
        'On-site feed mill',
        'Integrated waste management',
        'Renewable energy systems',
        'Comprehensive automation'
      ]
    }
  ];

  // Método para lidar com erro de carregamento de imagem
  onImageError(event: any, project: Project) {
    console.log(`Imagem não encontrada para ${project.title}, usando fallback`);
    event.target.src = this.fallbackImage;
    event.target.alt = `${project.title} - AgPro Inc Project`;
  }

  projectCategories = [
    { id: 'all', label: 'All Projects' },
    { id: 'swine', label: 'Swine' },
    { id: 'poultry', label: 'Poultry' },
    { id: 'grain', label: 'Grain Storage' },
    { id: 'integrated', label: 'Integrated Solutions' }
  ];

  selectedCategory = 'all';

  get filteredProjects() {
    if (this.selectedCategory === 'all') {
      return this.featuredProjects;
    }
    return this.featuredProjects.filter(project => 
      project.category.toLowerCase() === this.selectedCategory
    );
  }

  // Método para navegar para a página de contatos
  navigateToContact() {
    this.router.navigate(['/contact']);
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    
    // Se não for "all", faz scroll para o primeiro projeto da categoria
    if (category !== 'all' && this.filteredProjects.length > 0) {
      // Pequeno delay para garantir que o DOM foi atualizado
      setTimeout(() => {
        this.scrollToFirstProject();
      }, 100);
    } else if (category === 'all') {
      // Se for "all", volta para o início da grid
      this.scrollToProjectsSection();
    }
  }

  private scrollToFirstProject() {
    const firstProject = this.filteredProjects[0];
    if (firstProject) {
      const element = document.getElementById('project-' + firstProject.id);
      if (element) {
        this.scrollToElement(element);
        this.highlightProject(element);
      }
    }
  }

  private scrollToProjectsSection() {
    const projectsSection = document.querySelector('.projects-section');
    if (projectsSection) {
      this.scrollToElement(projectsSection as HTMLElement);
    }
  }

  private scrollToElement(element: HTMLElement) {
    // Calcula offset considerando as tabs sticky
    const tabsHeight = document.querySelector('.tabs-container')?.clientHeight || 80;
    const extraOffset = 30; // Margem adicional
    const headerOffset = tabsHeight + extraOffset;
    
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    // Scroll suave até a posição
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }

  private highlightProject(element: HTMLElement) {
    // Adiciona uma classe de destaque temporariamente
    element.classList.add('highlight-project');
    
    // Remove a classe após 2 segundos
    setTimeout(() => {
      element.classList.remove('highlight-project');
    }, 2000);
  }
}