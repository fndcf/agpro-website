// 📁 src/app/services/i18n.service.ts (ATUALIZADO)
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
  
  // Homepage translations
  homepage: {
    hero: {
      title: string;
      subtitle: string;
      buttonText: string;
    };
    experience: {
      title: string;
      subtitle: string;
    };
    stats: {
      yearsExperience: string;
      yearsExperienceDesc: string;
      projectsCompleted: string;
      projectsCompletedDesc: string;
      countriesServed: string;
      countriesServedDesc: string;
    };
    services: {
      swine: {
        title: string;
        description: string;
      };
      poultry: {
        title: string;
        description: string;
      };
      grainStorage: {
        title: string;
        description: string;
      };
    };
  };

  // NOVO: Mission page translations
  mission: {
    hero: {
      title: string;
    };
    content: {
      title: string;
      description: string;
      imageAlt: string;
    };
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
      homepage: {
        hero: {
          title: 'Excellence in Livestock housing and equipment',
          subtitle: 'For decades, AgPro International has delivered premium solutions to the world\'s most demanding agribusiness projects.',
          buttonText: 'Products and Services'
        },
        experience: {
          title: 'Our Experience',
          subtitle: 'Decades of excellence in developing large-scale projects for international agribusiness.'
        },
        stats: {
          yearsExperience: '30+ Years of Experience',
          yearsExperienceDesc: 'Decades serving the agribusiness industry',
          projectsCompleted: '500+ Projects Completed',
          projectsCompletedDesc: 'Successful implementations worldwide',
          countriesServed: '25+ Countries Served',
          countriesServedDesc: 'International presence and expertise'
        },
        services: {
          swine: {
            title: 'Swine',
            description: 'Swine project consulting, development and management, construction planning and supervision, equipment suppliers of feeding systems, ventilation systems, evaporative cooling, environmental controls, sidewall curtains, heating, drinkers, finishing penning, nursery penning, gestation stalls, farrowing crates.'
          },
          poultry: {
            title: 'Poultry',
            description: 'Poultry project consulting, development and management, construction planning and supervision, equipment suppliers of feeding systems, ventilation systems, evaporative cooling, environmental controls, sidewall curtains, heating, drinkers, nest systems.'
          },
          grainStorage: {
            title: 'Grain Storage',
            description: 'Grain storage project consulting, development and management, construction planning and supervision, equipment suppliers of Grain Silos, Hopper Tanks, bucket elevators, chain conveyors, belt conveyors, screw conveyors, distributors.'
          }
        }
      },
      // NOVO: Mission page translations
      mission: {
        hero: {
          title: 'Our Mission'
        },
        content: {
          title: 'Specialized Consulting',
          description: 'To utilize our experience in order to provide our customers with excellent products, service and price, contributing to the improvement of their bottom line in the knowledge that their success will become our success.',
          imageAlt: 'AgPro International - Specialized Consulting'
        }
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
      homepage: {
        hero: {
          title: 'Excelência em habitação e equipamentos para pecuária',
          subtitle: 'Por décadas, a AgPro International tem entregue soluções premium para os projetos de agronegócio mais exigentes do mundo.',
          buttonText: 'Produtos e Serviços'
        },
        experience: {
          title: 'Nossa Experiência',
          subtitle: 'Décadas de excelência no desenvolvimento de projetos de grande escala para o agronegócio internacional.'
        },
        stats: {
          yearsExperience: '30+ Anos de Experiência',
          yearsExperienceDesc: 'Décadas servindo a indústria do agronegócio',
          projectsCompleted: '500+ Projetos Concluídos',
          projectsCompletedDesc: 'Implementações bem-sucedidas mundialmente',
          countriesServed: '25+ Países Atendidos',
          countriesServedDesc: 'Presença internacional e expertise'
        },
        services: {
          swine: {
            title: 'Suinocultura',
            description: 'Consultoria, desenvolvimento e gerenciamento de projetos suinícolas, planejamento e supervisão de construção, fornecedores de equipamentos para sistemas de alimentação, sistemas de ventilação, resfriamento evaporativo, controles ambientais, cortinas laterais, aquecimento, bebedouros, baias de terminação, baias de creche, celas de gestação, celas de maternidade.'
          },
          poultry: {
            title: 'Avicultura',
            description: 'Consultoria, desenvolvimento e gerenciamento de projetos avícolas, planejamento e supervisão de construção, fornecedores de equipamentos para sistemas de alimentação, sistemas de ventilação, resfriamento evaporativo, controles ambientais, cortinas laterais, aquecimento, bebedouros, sistemas de ninhos.'
          },
          grainStorage: {
            title: 'Armazenamento de Grãos',
            description: 'Consultoria, desenvolvimento e gerenciamento de projetos de armazenamento de grãos, planejamento e supervisão de construção, fornecedores de equipamentos para Silos de Grãos, Tanques de Descarga, elevadores de canecas, transportadores de corrente, transportadores de correia, transportadores helicoidais, distribuidores.'
          }
        }
      },
      // NOVO: Mission page translations - PORTUGUÊS
      mission: {
        hero: {
          title: 'Nossa Missão'
        },
        content: {
          title: 'Consultoria Especializada',
          description: 'Utilizar nossa experiência para fornecer aos nossos clientes excelentes produtos, serviço e preço, contribuindo para a melhoria de seus resultados financeiros, sabendo que seu sucesso se tornará nosso sucesso.',
          imageAlt: 'AgPro International - Consultoria Especializada'
        }
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
      homepage: {
        hero: {
          title: 'Excelencia en vivienda y equipos para ganado',
          subtitle: 'Durante décadas, AgPro International ha entregado soluciones premium para los proyectos de agronegocios más exigentes del mundo.',
          buttonText: 'Productos y Servicios'
        },
        experience: {
          title: 'Nuestra Experiencia',
          subtitle: 'Décadas de excelencia en el desarrollo de proyectos a gran escala para el agronegocio internacional.'
        },
        stats: {
          yearsExperience: '30+ Años de Experiencia',
          yearsExperienceDesc: 'Décadas sirviendo a la industria del agronegocio',
          projectsCompleted: '500+ Proyectos Completados',
          projectsCompletedDesc: 'Implementaciones exitosas a nivel mundial',
          countriesServed: '25+ Países Atendidos',
          countriesServedDesc: 'Presencia internacional y experiencia'
        },
        services: {
          swine: {
            title: 'Porcinos',
            description: 'Consultoría, desarrollo y gestión de proyectos porcinos, planificación y supervisión de construcción, proveedores de equipos para sistemas de alimentación, sistemas de ventilación, enfriamiento evaporativo, controles ambientales, cortinas laterales, calefacción, bebederos, corrales de engorde, corrales de destete, celdas de gestación, celdas de maternidad.'
          },
          poultry: {
            title: 'Aves',
            description: 'Consultoría, desarrollo y gestión de proyectos avícolas, planificación y supervisión de construcción, proveedores de equipos para sistemas de alimentación, sistemas de ventilación, enfriamiento evaporativo, controles ambientales, cortinas laterales, calefacción, bebederos, sistemas de nidos.'
          },
          grainStorage: {
            title: 'Almacenamiento de Granos',
            description: 'Consultoría, desarrollo y gestión de proyectos de almacenamiento de granos, planificación y supervisión de construcción, proveedores de equipos para Silos de Granos, Tanques de Descarga, elevadores de cangilones, transportadores de cadena, transportadores de correa, transportadores helicoidales, distribuidores.'
          }
        }
      },
      // NOVO: Mission page translations - ESPAÑOL
      mission: {
        hero: {
          title: 'Nuestra Misión'
        },
        content: {
          title: 'Consultoría Especializada',
          description: 'Utilizar nuestra experiencia para brindar a nuestros clientes excelentes productos, servicio y precio, contribuyendo a la mejora de sus resultados financieros, sabiendo que su éxito se convertirá en nuestro éxito.',
          imageAlt: 'AgPro International - Consultoría Especializada'
        }
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

  // Método helper para acessar traduções da homepage
  public get homepage() {
    return this.currentTranslations().homepage;
  }

  // NOVO: Método helper para acessar traduções da mission page
  public get mission() {
    return this.currentTranslations().mission;
  }

  // Método helper para acessar traduções do footer
  public get footer() {
    return this.currentTranslations().footer;
  }
}