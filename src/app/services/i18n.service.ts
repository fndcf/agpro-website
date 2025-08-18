// 📁 src/app/services/i18n.service.ts (ATUALIZADO COM PRIVACY POLICY)
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

  // Mission page translations
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

  // NOVO: Privacy Policy translations
  privacyPolicy: {
    pageTitle: string;
    lastUpdated: string;
    introduction: {
      title: string;
      paragraph1: string;
      paragraph2: string;
    };
    informationWeCollect: {
      title: string;
      personalInfo: {
        title: string;
        description: string;
        dataTypesIntro: string;
        situations: string[];
        dataTypes: string[];
      };
      automaticInfo: {
        title: string;
        description: string;
      };
    };
    howWeUseInfo: {
      title: string;
      description: string;
      purposes: string[];
    };
    informationSharing: {
      title: string;
      description: string;
      circumstances: string[];
    };
    dataSecurity: {
      title: string;
      description: string;
    };
    yourRights: {
      title: string;
      description: string;
      rights: string[];
    };
    cookies: {
      title: string;
      description: string;
    };
    policyUpdates: {
      title: string;
      description: string;
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
      // NOVO: Privacy Policy translations - ENGLISH
      privacyPolicy: {
        pageTitle: 'Privacy Policy',
        lastUpdated: 'Last updated: January 2025',
        introduction: {
          title: 'Introduction',
          paragraph1: 'AgPro International ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.',
          paragraph2: 'Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access our website or use our services.'
        },
        informationWeCollect: {
          title: 'Information We Collect',
          personalInfo: {
            title: 'Personal Information',
            description: 'We may collect personal information that you voluntarily provide to us when you:',
            dataTypesIntro: 'This information may include:',
            situations: [
              'Contact us through our contact forms',
              'Request information about our services',
              'Subscribe to our communications',
              'Apply for employment with us'
            ],
            dataTypes: [
              'Full name',
              'Email address',
              'Phone number',
              'Company name',
              'Job title',
              'Project details and requirements'
            ]
          },
          automaticInfo: {
            title: 'Automatic Information',
            description: 'When you visit our website, we may automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.'
          }
        },
        howWeUseInfo: {
          title: 'How We Use Your Information',
          description: 'We use the information we collect to:',
          purposes: [
            'Respond to your inquiries and provide customer service',
            'Process your requests for information or quotes',
            'Communicate with you about our services',
            'Improve our website and services',
            'Comply with legal obligations',
            'Protect our rights and interests'
          ]
        },
        informationSharing: {
          title: 'Information Sharing',
          description: 'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:',
          circumstances: [
            'To comply with legal requirements',
            'To protect our rights, property, or safety',
            'To trusted third parties who assist us in operating our website or conducting our business',
            'In connection with a merger, acquisition, or sale of assets'
          ]
        },
        dataSecurity: {
          title: 'Data Security',
          description: 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure.'
        },
        yourRights: {
          title: 'Your Rights',
          description: 'Depending on your location, you may have the following rights regarding your personal information:',
          rights: [
            'The right to access your personal information',
            'The right to rectify inaccurate information',
            'The right to erase your personal information',
            'The right to restrict processing',
            'The right to data portability',
            'The right to object to processing'
          ]
        },
        cookies: {
          title: 'Cookies',
          description: 'Our website may use cookies to enhance your browsing experience. Cookies are small text files stored on your device that help us analyze web traffic and remember your preferences. You can choose to accept or decline cookies through your browser settings.'
        },
        policyUpdates: {
          title: 'Policy Updates',
          description: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this policy.'
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
        buildings: 'Buildings',
        equipments: 'Equipments',
        grainStorage: 'Grain Storage',
        feedTransportation: 'Feed Transportation',
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
      // NOVO: Privacy Policy translations - PORTUGUÊS
      privacyPolicy: {
        pageTitle: 'Política de Privacidade',
        lastUpdated: 'Última atualização: Janeiro de 2025',
        introduction: {
          title: 'Introdução',
          paragraph1: 'A AgPro International ("nós", "nossa", "nos") está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você visita nosso site ou usa nossos serviços.',
          paragraph2: 'Por favor, leia esta política de privacidade cuidadosamente. Se você não concorda com os termos desta política de privacidade, por favor não acesse nosso site ou use nossos serviços.'
        },
        informationWeCollect: {
          title: 'Informações que Coletamos',
          personalInfo: {
            title: 'Informações Pessoais',
            description: 'Podemos coletar informações pessoais que você fornece voluntariamente quando:',
            dataTypesIntro: 'Essas informações podem incluir:',
            situations: [
              'Entra em contato conosco através de nossos formulários',
              'Solicita informações sobre nossos serviços',
              'Se inscreve em nossas comunicações',
              'Candidata-se a emprego conosco'
            ],
            dataTypes: [
              'Nome completo',
              'Endereço de e-mail',
              'Número de telefone',
              'Nome da empresa',
              'Cargo',
              'Detalhes e requisitos do projeto'
            ]
          },
          automaticInfo: {
            title: 'Informações Automáticas',
            description: 'Quando você visita nosso site, podemos coletar automaticamente certas informações sobre seu dispositivo, incluindo informações sobre seu navegador, endereço IP, fuso horário e alguns cookies instalados em seu dispositivo.'
          }
        },
        howWeUseInfo: {
          title: 'Como Usamos Suas Informações',
          description: 'Usamos as informações que coletamos para:',
          purposes: [
            'Responder às suas perguntas e fornecer atendimento ao cliente',
            'Processar suas solicitações de informações ou orçamentos',
            'Comunicar com você sobre nossos serviços',
            'Melhorar nosso site e serviços',
            'Cumprir obrigações legais',
            'Proteger nossos direitos e interesses'
          ]
        },
        informationSharing: {
          title: 'Compartilhamento de Informações',
          description: 'Não vendemos, negociamos ou transferimos suas informações pessoais para terceiros sem seu consentimento, exceto nas seguintes circunstâncias:',
          circumstances: [
            'Para cumprir requisitos legais',
            'Para proteger nossos direitos, propriedade ou segurança',
            'Para terceiros confiáveis que nos auxiliam na operação de nosso site ou condução de nossos negócios',
            'Em conexão com fusão, aquisição ou venda de ativos'
          ]
        },
        dataSecurity: {
          title: 'Segurança dos Dados',
          description: 'Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, observe que nenhum método de transmissão pela internet ou armazenamento eletrônico é 100% seguro.'
        },
        yourRights: {
          title: 'Seus Direitos',
          description: 'Dependendo de sua localização, você pode ter os seguintes direitos em relação às suas informações pessoais:',
          rights: [
            'O direito de acessar suas informações pessoais',
            'O direito de retificar informações imprecisas',
            'O direito de apagar suas informações pessoais',
            'O direito de restringir o processamento',
            'O direito à portabilidade de dados',
            'O direito de se opor ao processamento'
          ]
        },
        cookies: {
          title: 'Cookies',
          description: 'Nosso site pode usar cookies para melhorar sua experiência de navegação. Cookies são pequenos arquivos de texto armazenados em seu dispositivo que nos ajudam a analisar o tráfego da web e lembrar suas preferências. Você pode escolher aceitar ou recusar cookies através das configurações do seu navegador.'
        },
        policyUpdates: {
          title: 'Atualizações da Política',
          description: 'Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre quaisquer mudanças publicando a nova Política de Privacidade nesta página e atualizando a data de "Última atualização" no topo desta política.'
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
        buildings: 'Construções',
        equipments: 'Equipamentos',
        grainStorage: 'Armazenamento de Grãos',
        feedTransportation: 'Transporte de Ração',
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
      // NOVO: Privacy Policy translations - ESPAÑOL
      privacyPolicy: {
        pageTitle: 'Política de Privacidad',
        lastUpdated: 'Última actualización: Enero de 2025',
        introduction: {
          title: 'Introducción',
          paragraph1: 'AgPro International ("nosotros", "nuestra", "nos") está comprometida en proteger su privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos su información cuando visita nuestro sitio web o usa nuestros servicios.',
          paragraph2: 'Por favor, lea esta política de privacidad cuidadosamente. Si no está de acuerdo con los términos de esta política de privacidad, por favor no acceda a nuestro sitio web o use nuestros servicios.'
        },
        informationWeCollect: {
          title: 'Información que Recopilamos',
          personalInfo: {
            title: 'Información Personal',
            description: 'Podemos recopilar información personal que usted proporciona voluntariamente cuando:',
            dataTypesIntro: 'Esta información puede incluir:',
            situations: [
              'Se pone en contacto con nosotros a través de nuestros formularios',
              'Solicita información sobre nuestros servicios',
              'Se suscribe a nuestras comunicaciones',
              'Solicita empleo con nosotros'
            ],
            dataTypes: [
              'Nombre completo',
              'Dirección de correo electrónico',
              'Número de teléfono',
              'Nombre de la empresa',
              'Cargo',
              'Detalles y requisitos del proyecto'
            ]
          },
          automaticInfo: {
            title: 'Información Automática',
            description: 'Cuando visita nuestro sitio web, podemos recopilar automáticamente cierta información sobre su dispositivo, incluyendo información sobre su navegador web, dirección IP, zona horaria y algunas cookies instaladas en su dispositivo.'
          }
        },
        howWeUseInfo: {
          title: 'Cómo Usamos Su Información',
          description: 'Usamos la información que recopilamos para:',
          purposes: [
            'Responder a sus consultas y brindar servicio al cliente',
            'Procesar sus solicitudes de información o cotizaciones',
            'Comunicarnos con usted sobre nuestros servicios',
            'Mejorar nuestro sitio web y servicios',
            'Cumplir con obligaciones legales',
            'Proteger nuestros derechos e intereses'
          ]
        },
        informationSharing: {
          title: 'Compartir Información',
          description: 'No vendemos, intercambiamos o transferimos su información personal a terceros sin su consentimiento, excepto en las siguientes circunstancias:',
          circumstances: [
            'Para cumplir con requisitos legales',
            'Para proteger nuestros derechos, propiedad o seguridad',
            'A terceros de confianza que nos ayudan en la operación de nuestro sitio web o en la conducción de nuestro negocio',
            'En conexión con una fusión, adquisición o venta de activos'
          ]
        },
        dataSecurity: {
          title: 'Seguridad de Datos',
          description: 'Implementamos medidas de seguridad técnicas y organizacionales apropiadas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, tenga en cuenta que ningún método de transmisión por internet o almacenamiento electrónico es 100% seguro.'
        },
        yourRights: {
          title: 'Sus Derechos',
          description: 'Dependiendo de su ubicación, puede tener los siguientes derechos con respecto a su información personal:',
          rights: [
            'El derecho a acceder a su información personal',
            'El derecho a rectificar información inexacta',
            'El derecho a borrar su información personal',
            'El derecho a restringir el procesamiento',
            'El derecho a la portabilidad de datos',
            'El derecho a oponerse al procesamiento'
          ]
        },
        cookies: {
          title: 'Cookies',
          description: 'Nuestro sitio web puede usar cookies para mejorar su experiencia de navegación. Las cookies son pequeños archivos de texto almacenados en su dispositivo que nos ayudan a analizar el tráfico web y recordar sus preferencias. Puede elegir aceptar o rechazar cookies a través de la configuración de su navegador.'
        },
        policyUpdates: {
          title: 'Actualizaciones de la Política',
          description: 'Podemos actualizar esta Política de Privacidad de vez en cuando. Le notificaremos sobre cualquier cambio publicando la nueva Política de Privacidad en esta página y actualizando la fecha de "Última actualización" en la parte superior de esta política.'
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
        buildings: 'Construcciones',
        equipments: 'Equipos',
        grainStorage: 'Almacenamiento de Granos',
        feedTransportation: 'Transporte de Alimentos',
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

  // Método helper para acessar traduções da mission page
  public get mission() {
    return this.currentTranslations().mission;
  }

  // NOVO: Método helper para acessar traduções da privacy policy
  public get privacyPolicy() {
    return this.currentTranslations().privacyPolicy;
  }

  // Método helper para acessar traduções do footer
  public get footer() {
    return this.currentTranslations().footer;
  }
}