import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeroComponent } from '../../components/hero/hero';
import { I18nService } from '../../services/i18n.service';

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
  
  // Computed signal para traduções
  translations = computed(() => this.i18nService.currentTranslations());

  constructor(
    private router: Router,
    private i18nService: I18nService
  ) {}

  // Imagem fallback caso alguma imagem específica não esteja disponível
  fallbackImage = 'assets/images/colageagpro.gif';
  
  // Featured projects agora são computed baseados nas traduções
  featuredProjects = computed((): Project[] => {
    const t = this.translations().projects.projectsData;
    return [
      {
        id: 'swine-facility-brazil',
        title: t.swineProject.title,
        location: 'São Paulo, Brazil',
        year: '2023',
        category: 'Swine',
        description: t.swineProject.description,
        image: 'assets/images/projects/swine-facility-brazil.jpg',
        imageAlt: t.swineProject.title + ' in São Paulo, Brazil',
        features: t.swineProject.features
      },
      {
        id: 'poultry-complex-mexico',
        title: t.poultryProject.title,
        location: 'Jalisco, Mexico',
        year: '2023',
        category: 'Poultry',
        description: t.poultryProject.description,
        image: 'assets/images/projects/poultry-complex-mexico.jpg',
        imageAlt: t.poultryProject.title + ' in Jalisco, Mexico',
        features: t.poultryProject.features
      },
      {
        id: 'grain-storage-argentina',
        title: t.grainProject.title,
        location: 'Buenos Aires, Argentina',
        year: '2022',
        category: 'Grain Storage',
        description: t.grainProject.description,
        image: 'assets/images/projects/grain-storage-argentina.jpg',
        imageAlt: t.grainProject.title + ' in Buenos Aires, Argentina',
        features: t.grainProject.features
      },
      {
        id: 'integrated-farm-usa',
        title: t.integratedProject.title,
        location: 'Illinois, USA',
        year: '2022',
        category: 'Integrated',
        description: t.integratedProject.description,
        image: 'assets/images/projects/integrated-farm-usa.jpg',
        imageAlt: t.integratedProject.title + ' in Illinois, USA',
        features: t.integratedProject.features
      }
    ];
  });

  // Método para lidar com erro de carregamento de imagem
  onImageError(event: any, project: Project) {
    console.log(`Imagem não encontrada para ${project.title}, usando fallback`);
    event.target.src = this.fallbackImage;
    event.target.alt = `${project.title} - AgPro International Project`;
  }

  // Project categories agora são computed baseados nas traduções
  projectCategories = computed(() => {
    const t = this.translations().projects.tabs;
    return [
      { id: 'all', label: t.allProjects },
      { id: 'swine', label: t.swine },
      { id: 'poultry', label: t.poultry },
      { id: 'grain', label: t.grainStorage },
      { id: 'integrated', label: t.integratedSolutions }
    ];
  });

  selectedCategory = 'all';

  // Filtered projects baseado na categoria selecionada
  filteredProjects = computed(() => {
    if (this.selectedCategory === 'all') {
      return this.featuredProjects();
    }
    return this.featuredProjects().filter(project => 
      project.category.toLowerCase() === this.selectedCategory
    );
  });

  // Método para navegar para a página de contatos
  navigateToContact() {
    this.router.navigate(['/contact']);
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    
    // Se não for "all", faz scroll para o primeiro projeto da categoria
    if (category !== 'all' && this.filteredProjects().length > 0) {
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
    const firstProject = this.filteredProjects()[0];
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