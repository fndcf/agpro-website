import { Component, inject, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { SiteMapSection, SiteMapLink, SITE_STRUCTURE } from '../../data/sitemap.data';

@Component({
  selector: 'app-sitemap',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslocoModule],
  templateUrl: './sitemap.html',
  styleUrls: ['./sitemap.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sitemap {
  private translocoService = inject(TranslocoService);

  siteStructure: SiteMapSection[] = SITE_STRUCTURE;

  totalPages = computed(() => {
    return this.siteStructure.reduce((total, section) => total + section.links.length, 0);
  });

  getSectionId(titleKey: string): string {
    return titleKey.replace(/\./g, '-').toLowerCase();
  }

  scrollToSection(titleKey: string) {
    const element = document.getElementById(this.getSectionId(titleKey));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  trackBySection(index: number, section: SiteMapSection): string {
    return section.titleKey;
  }

  trackByLink(index: number, link: SiteMapLink): string {
    return link.route + (link.fragment || '');
  }
}
