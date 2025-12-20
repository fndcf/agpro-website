import { Injectable, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { TranslocoService } from '@jsverse/transloco';

@Injectable({ providedIn: 'root' })
export class TranslocoTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);
  private readonly translocoService = inject(TranslocoService);

  private readonly siteName = 'AgPro International';

  // Mapeamento de rotas para chaves de tradução
  private readonly titleKeys: Record<string, string> = {
    '/': 'pageTitle.home',
    '/mission': 'pageTitle.mission',
    '/products': 'pageTitle.products',
    '/projects': 'pageTitle.projects',
    '/contact': 'pageTitle.contact',
    '/under-construction': 'pageTitle.underConstruction',
    '/privacy-policy': 'pageTitle.privacyPolicy',
    '/terms-of-service': 'pageTitle.termsOfService',
    '/sitemap': 'pageTitle.sitemap',
  };

  constructor() {
    super();
    // Atualiza o título quando o idioma muda
    this.translocoService.langChanges$.subscribe(() => {
      this.updateCurrentTitle();
    });
  }

  private currentPath = '/';

  override updateTitle(snapshot: RouterStateSnapshot): void {
    this.currentPath = snapshot.url.split('?')[0].split('#')[0] || '/';
    this.updateCurrentTitle();
  }

  private updateCurrentTitle(): void {
    const titleKey = this.titleKeys[this.currentPath];

    if (titleKey) {
      const translatedTitle = this.translocoService.translate(titleKey);
      if (translatedTitle && translatedTitle !== titleKey) {
        this.title.setTitle(`${translatedTitle} - ${this.siteName}`);
      } else {
        this.title.setTitle(this.siteName);
      }
    } else {
      this.title.setTitle(this.siteName);
    }
  }
}
