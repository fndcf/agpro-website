import { Component, inject, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { HeroComponent } from '../../components/hero/hero';
import { Project, ProjectCategory, PROJECT_CATEGORIES, FEATURED_PROJECTS } from '../../data/projects.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslocoModule, HeroComponent],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  private router = inject(Router);
  private translocoService = inject(TranslocoService);

  fallbackImage = 'assets/images/colageagpro.gif';

  selectedCategory = signal<string>('all');

  projectCategories: ProjectCategory[] = PROJECT_CATEGORIES;
  featuredProjects: Project[] = FEATURED_PROJECTS;

  filteredProjects = computed(() => {
    const category = this.selectedCategory();
    if (category === 'all') {
      return this.featuredProjects;
    }
    return this.featuredProjects.filter((project) => project.category.toLowerCase() === category);
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
      behavior: 'smooth',
    });
  }

  private highlightProject(element: HTMLElement) {
    element.classList.add('highlight-project');

    setTimeout(() => {
      element.classList.remove('highlight-project');
    }, 2000);
  }

  trackByCategory(index: number, category: ProjectCategory): string {
    return category.id;
  }

  trackByProject(index: number, project: Project): string {
    return project.id;
  }

  trackByFeature(index: number, feature: string): string {
    return feature;
  }
}
