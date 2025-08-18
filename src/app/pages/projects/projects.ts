// 📁 src/app/pages/projects/projects.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero';

interface Project {
  id: string;
  title: string;
  location: string;
  year: string;
  category: string;
  description: string;
  image?: string;
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
  
  featuredProjects: Project[] = [
    {
      id: 'swine-facility-brazil',
      title: 'Large Scale Swine Facility',
      location: 'São Paulo, Brazil',
      year: '2023',
      category: 'Swine',
      description: 'Complete swine production facility with 5,000 head capacity, featuring state-of-the-art ventilation systems, automated feeding, and advanced waste management.',
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
      features: [
        'Multi-species facility',
        'On-site feed mill',
        'Integrated waste management',
        'Renewable energy systems',
        'Comprehensive automation'
      ]
    }
  ];

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
    }, 2500);
  }
}