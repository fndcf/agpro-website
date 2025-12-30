import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslocoModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  // Footer links - usando chaves de tradução
  productLinks = [
    { labelKey: 'footer.buildings', route: '/', fragment: 'buildings' },
    { labelKey: 'footer.equipments', route: '/', fragment: 'equipments' },
    { labelKey: 'footer.grainStorage', route: '/', fragment: 'grain-storage' },
    { labelKey: 'footer.feedTransportation', route: '/', fragment: 'feed-transport' },
  ];

  companyLinks = [
    { labelKey: 'footer.ourMission', route: '/mission' },
    // { labelKey: 'footer.projects', route: '/projects' },
    { labelKey: 'footer.contacts', route: '/contact' },
  ];

  socialLinks = [
    {
      icon: 'assets/icons/facebook.svg',
      title: 'Facebook',
      url: 'https://www.facebook.com/AgproInternational',
    },
    {
      icon: 'assets/icons/instagram.svg',
      title: 'Instagram',
      url: 'https://www.instagram.com/agpro_international',
    },
  ];

  // Método para scroll suave para o topo
  scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  // TrackBy functions para otimização de ngFor
  trackByProductLink(index: number, link: { fragment: string }): string {
    return link.fragment;
  }

  trackByCompanyLink(index: number, link: { route: string }): string {
    return link.route;
  }

  trackBySocialLink(index: number, social: { url: string }): string {
    return social.url;
  }
}
