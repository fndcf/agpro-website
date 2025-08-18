// 📁 src/app/services/i18n.service.ts
import { Injectable, signal, computed } from '@angular/core';

export type Language = 'en' | 'pt' | 'es';

export interface Translation {
  // Header translations
  header: {
    home: string;
    mission: string;
    products: string;
    projects: string;
    contact: string;
  };
  
  // Footer translations
  footer: {
    productsServices: string;
    company: string;
    backToTop: string;
    privacyPolicy: string;
    termsOfService: string;
    sitemap: string;
    allRightsReserved: string;
    description: string;
    location: string;
    // Products & Services Links
    buildings: string;
    equipments: string;
    grainStorage: string;
    feedTransportation: string;
    // Company Links
    ourMission: string;
    projects: string;
    contacts: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  // Signal para o idioma atual
  private currentLanguageSignal = signal<Language>('en');
  
  // Traduções para cada idioma
  private translations: Record<Language, Translation> = {
    en: {
      header: {
        home: 'Home',
        mission: 'Our Mission',
        products: 'Products and Services',
        projects: 'Projects',
        contact: 'Contacts'
      },
      footer: {
        productsServices: 'Products & Services',
        company: 'Company',
        backToTop: 'Back to Top',
        privacyPolicy: 'Privacy Policy',
        termsOfService: 'Terms of Service',
        sitemap: 'Sitemap',
        allRightsReserved: 'AgPro International All Rights Reserved.',
        description: 'Decades of excellence in developing large-scale projects for international agribusiness.',
        location: 'Springfield, IL - United States',
        // Products & Services
        buildings: 'Buildings',
        equipments: 'Equipments',
        grainStorage: 'Grain Storage',
        feedTransportation: 'Feed Transportation',
        // Company
        ourMission: 'Our Mission',
        projects: 'Projects',
        contacts: 'Contacts'
      }
    },
    pt: {
      header: {
        home: 'Início',
        mission: 'Nossa Missão',
        products: 'Produtos e Serviços',
        projects: 'Projetos',
        contact: 'Contatos'
      },
      footer: {
        productsServices: 'Produtos e Serviços',
        company: 'Empresa',
        backToTop: 'Voltar ao Topo',
        privacyPolicy: 'Política de Privacidade',
        termsOfService: 'Termos de Serviço',
        sitemap: 'Mapa do Site',
        allRightsReserved: 'AgPro International Todos os Direitos Reservados.',
        description: 'Décadas de excelência no desenvolvimento de projetos de grande escala para o agronegócio internacional.',
        location: 'Springfield, IL - Estados Unidos',
        // Produtos e Serviços
        buildings: 'Construções',
        equipments: 'Equipamentos',
        grainStorage: 'Armazenamento de Grãos',
        feedTransportation: 'Transporte de Ração',
        // Empresa
        ourMission: 'Nossa Missão',
        projects: 'Projetos',
        contacts: 'Contatos'
      }
    },
    es: {
      header: {
        home: 'Inicio',
        mission: 'Nuestra Misión',
        products: 'Productos y Servicios',
        projects: 'Proyectos',
        contact: 'Contactos'
      },
      footer: {
        productsServices: 'Productos y Servicios',
        company: 'Empresa',
        backToTop: 'Volver Arriba',
        privacyPolicy: 'Política de Privacidad',
        termsOfService: 'Términos de Servicio',
        sitemap: 'Mapa del Sitio',
        allRightsReserved: 'AgPro International Todos los Derechos Reservados.',
        description: 'Décadas de excelencia en el desarrollo de proyectos a gran escala para el agronegocio internacional.',
        location: 'Springfield, IL - Estados Unidos',
        // Productos y Servicios
        buildings: 'Construcciones',
        equipments: 'Equipos',
        grainStorage: 'Almacenamiento de Granos',
        feedTransportation: 'Transporte de Alimentos',
        // Empresa
        ourMission: 'Nuestra Misión',
        projects: 'Proyectos',
        contacts: 'Contactos'
      }
    }
  };

  // Computed signal para as traduções atuais
  public currentTranslations = computed(() => {
    return this.translations[this.currentLanguageSignal()];
  });

  // Getter para o idioma atual
  public get currentLanguage() {
    return this.currentLanguageSignal.asReadonly();
  }

  // Método para trocar idioma
  public setLanguage(language: Language): void {
    this.currentLanguageSignal.set(language);
    // Aqui você pode adicionar lógica para salvar no localStorage
    localStorage.setItem('agpro-language', language);
    console.log(`Language changed to: ${language}`);
  }

  // Método para inicializar o idioma do localStorage
  public initializeLanguage(): void {
    const savedLanguage = localStorage.getItem('agpro-language') as Language;
    if (savedLanguage && ['en', 'pt', 'es'].includes(savedLanguage)) {
      this.currentLanguageSignal.set(savedLanguage);
    }
  }

  // Método para obter tradução específica
  public translate(key: string): string {
    const keys = key.split('.');
    let value: any = this.currentTranslations();
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Retorna a chave se não encontrar a tradução
      }
    }
    
    return typeof value === 'string' ? value : key;
  }

  // Método helper para acessar traduções do header
  public get header() {
    return this.currentTranslations().header;
  }

  // Método helper para acessar traduções do footer
  public get footer() {
    return this.currentTranslations().footer;
  }
}