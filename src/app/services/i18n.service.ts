import { Injectable, inject, signal, computed } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

export type Language = 'en' | 'pt' | 'es';

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  private translocoService = inject(TranslocoService);

  // Signal para o idioma atual
  private currentLanguageSignal = signal<Language>('en');

  // Getter para o idioma atual (readonly)
  public currentLanguage = computed(() => this.currentLanguageSignal());

  // Método para trocar idioma
  public setLanguage(language: Language): void {
    this.currentLanguageSignal.set(language);
    this.translocoService.setActiveLang(language);
    localStorage.setItem('agpro-language', language);
  }

  // Método para inicializar o idioma do localStorage
  public initializeLanguage(): void {
    const savedLanguage = localStorage.getItem('agpro-language') as Language;
    if (savedLanguage && ['en', 'pt', 'es'].includes(savedLanguage)) {
      this.currentLanguageSignal.set(savedLanguage);
      this.translocoService.setActiveLang(savedLanguage);
    }
  }

  // Método para obter tradução específica (para uso programático)
  public translate(key: string): string {
    return this.translocoService.translate(key);
  }
}
