import { Injectable, inject, DestroyRef } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { TranslocoService } from '@jsverse/transloco';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter, switchMap, take, skip } from 'rxjs/operators';

export interface SeoConfig {
  descriptionKey: string;
  keywords?: string;
  image?: string;
  type?: string;
}

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private meta = inject(Meta);
  private router = inject(Router);
  private translocoService = inject(TranslocoService);
  private destroyRef = inject(DestroyRef);

  private readonly baseUrl = 'https://www.agprointernational.com';
  private readonly defaultImage = `${this.baseUrl}/assets/images/og-image.jpg`;
  private readonly siteName = 'AgPro International';

  // SEO config por rota (apenas meta tags, título é gerenciado pelo TitleStrategy)
  private readonly seoConfigs: Record<string, SeoConfig> = {
    '/': {
      descriptionKey: 'seo.home.description',
      keywords: 'agribusiness, swine, poultry, grain storage, agricultural equipment',
    },
    '/mission': {
      descriptionKey: 'seo.mission.description',
      keywords: 'agpro mission, agricultural solutions, company values',
    },
    '/products': {
      descriptionKey: 'seo.products.description',
      keywords: 'buildings, equipment, grain storage, ventilation, confinement, flooring',
    },
    '/projects': {
      descriptionKey: 'seo.projects.description',
      keywords: 'agricultural projects, swine facilities, poultry complexes, grain storage',
    },
    '/contact': {
      descriptionKey: 'seo.contact.description',
      keywords: 'contact agpro, agricultural consulting, quote request',
    },
    '/privacy-policy': {
      descriptionKey: 'seo.privacyPolicy.description',
    },
    '/terms-of-service': {
      descriptionKey: 'seo.termsOfService.description',
    },
    '/sitemap': {
      descriptionKey: 'seo.sitemap.description',
    },
    '/under-construction': {
      descriptionKey: 'seo.underConstruction.description',
    },
  };

  init(): void {
    // Atualiza meta tags na mudança de rota
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        this.updateMetaTagsForCurrentRoute();
      });

    // Atualiza meta tags quando o idioma muda
    this.translocoService.langChanges$
      .pipe(
        skip(1),
        switchMap(() => {
          const url = this.router.url.split('?')[0].split('#')[0];
          const config = this.seoConfigs[url];
          if (config) {
            return this.translocoService.selectTranslate(config.descriptionKey).pipe(take(1));
          }
          return [];
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((description) => {
        if (description) {
          this.applyMetaTags(description);
        }
      });
  }

  private updateMetaTagsForCurrentRoute(): void {
    const url = this.router.url.split('?')[0].split('#')[0];
    const config = this.seoConfigs[url];

    if (config) {
      this.translocoService
        .selectTranslate(config.descriptionKey)
        .pipe(take(1))
        .subscribe((description) => {
          this.applyMetaTags(description);
        });
    }
  }

  private applyMetaTags(description: string): void {
    const url = this.router.url.split('?')[0].split('#')[0];
    const config = this.seoConfigs[url];
    if (!config) return;

    const lang = this.translocoService.getActiveLang();
    const fullUrl = `${this.baseUrl}${url}`;
    const image = config.image || this.defaultImage;

    // Meta tags básicas
    this.meta.updateTag({ name: 'description', content: description });
    if (config.keywords) {
      this.meta.updateTag({ name: 'keywords', content: config.keywords });
    }

    // Canonical URL
    this.updateCanonicalUrl(fullUrl);

    // Open Graph
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: fullUrl });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:type', content: config.type || 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: this.siteName });
    this.meta.updateTag({ property: 'og:locale', content: this.getLocaleForLang(lang) });

    // Twitter Card
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: image });

    // Idioma alternativo para SEO multilíngue
    this.updateAlternateLanguages(url);
  }

  private updateCanonicalUrl(url: string): void {
    let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');

    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }

  private updateAlternateLanguages(path: string): void {
    // Remove links alternativos existentes
    const existingLinks = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingLinks.forEach((link) => link.remove());

    // Adiciona links para cada idioma
    const languages = ['en', 'pt', 'es'];
    languages.forEach((lang) => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', lang);
      link.setAttribute('href', `${this.baseUrl}${path}`);
      document.head.appendChild(link);
    });

    // x-default para o idioma padrão
    const defaultLink = document.createElement('link');
    defaultLink.setAttribute('rel', 'alternate');
    defaultLink.setAttribute('hreflang', 'x-default');
    defaultLink.setAttribute('href', `${this.baseUrl}${path}`);
    document.head.appendChild(defaultLink);
  }

  private getLocaleForLang(lang: string): string {
    const localeMap: Record<string, string> = {
      en: 'en_US',
      pt: 'pt_BR',
      es: 'es_ES',
    };
    return localeMap[lang] || 'en_US';
  }
}
