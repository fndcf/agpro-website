import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { HeroComponent } from '../../components/hero/hero';

interface Project {
  id: string;
  titleKey: string;
  location: string;
  year: string;
  category: string;
  descriptionKey: string;
  image: string;
  imageAlt: string;
  featuresKey: string;
}

interface ProjectCategory {
  id: string;
  labelKey: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslocoModule, HeroComponent],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class Projects {
  private router = inject(Router);
  private translocoService = inject(TranslocoService);

  fallbackImage = 'assets/images/colageagpro.gif';

  selectedCategory = signal<string>('all');

  projectCategories: ProjectCategory[] = [
    { id: 'all', labelKey: 'projects.tabs.allProjects' },
    { id: 'swine', labelKey: 'projects.tabs.swine' },
    { id: 'poultry', labelKey: 'projects.tabs.poultry' },
    { id: 'grain', labelKey: 'projects.tabs.grainStorage' },
    { id: 'integrated', labelKey: 'projects.tabs.integratedSolutions' }
  ];

  featuredProjects: Project[] = [
    {
      id: 'swine-facility-brazil',
      titleKey: 'projects.projectsData.swineProject.title',
      location: 'São Paulo, Brazil',
      year: '2023',
      category: 'Swine',
      descriptionKey: 'projects.projectsData.swineProject.description',
      image: 'assets/images/projects/swine-facility-brazil.jpg',
      imageAlt: 'Swine Facility in São Paulo, Brazil',
      featuresKey: 'projects.projectsData.swineProject.features'
    },
    {
      id: 'poultry-complex-mexico',
      titleKey: 'projects.projectsData.poultryProject.title',
      location: 'Jalisco, Mexico',
      year: '2023',
      category: 'Poultry',
      descriptionKey: 'projects.projectsData.poultryProject.description',
      image: 'assets/images/projects/poultry-complex-mexico.jpg',
      imageAlt: 'Poultry Complex in Jalisco, Mexico',
      featuresKey: 'projects.projectsData.poultryProject.features'
    },
    {
      id: 'grain-storage-argentina',
      titleKey: 'projects.projectsData.grainProject.title',
      location: 'Buenos Aires, Argentina',
      year: '2022',
      category: 'Grain Storage',
      descriptionKey: 'projects.projectsData.grainProject.description',
      image: 'assets/images/projects/grain-storage-argentina.jpg',
      imageAlt: 'Grain Storage in Buenos Aires, Argentina',
      featuresKey: 'projects.projectsData.grainProject.features'
    },
    {
      id: 'integrated-farm-usa',
      titleKey: 'projects.projectsData.integratedProject.title',
      location: 'Illinois, USA',
      year: '2022',
      category: 'Integrated',
      descriptionKey: 'projects.projectsData.integratedProject.description',
      image: 'assets/images/projects/integrated-farm-usa.jpg',
      imageAlt: 'Integrated Farm in Illinois, USA',
      featuresKey: 'projects.projectsData.integratedProject.features'
    }
  ];

  filteredProjects = computed(() => {
    const category = this.selectedCategory();
    if (category === 'all') {
      return this.featuredProjects;
    }
    return this.featuredProjects.filter(project =>
      project.category.toLowerCase() === category
    );
  });

  getProjectFeatures(featuresKey: string): string[] {
    const features = this.translocoService.translate(featuresKey);
    return Array.isArray(features) ? features : [];
  }

  onImageError(event: Event, project: Project) {
    const target = event.target as HTMLImageElement;
    console.log(`Imagem não encontrada para ${project.id}, usando fallback`);
    target.src = this.fallbackImage;
    target.alt = `${project.id} - AgPro International Project`;
  }

  navigateToContact() {
    this.router.navigate(['/contact']);
  }

  filterByCategory(category: string) {
    this.selectedCategory.set(category);

    if (category !== 'all' && this.filteredProjects().length > 0) {
      setTimeout(() => {
        this.scrollToFirstProject();
      }, 100);
    } else if (category === 'all') {
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
    const tabsHeight = document.querySelector('.tabs-container')?.clientHeight || 80;
    const extraOffset = 30;
    const headerOffset = tabsHeight + extraOffset;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }

  private highlightProject(element: HTMLElement) {
    element.classList.add('highlight-project');

    setTimeout(() => {
      element.classList.remove('highlight-project');
    }, 2000);
  }
}
