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

  // Privacy Policy translations
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

  // Terms of Service translations
  termsOfService: {
    pageTitle: string;
    lastUpdated: string;
    agreementToTerms: {
      title: string;
      paragraph1: string;
      paragraph2: string;
    };
    ourServices: {
      title: string;
      description: string;
      servicesList: string[];
    };
    useOfWebsite: {
      title: string;
      permittedUse: {
        title: string;
        description: string;
        prohibitions: string[];
      };
      intellectualProperty: {
        title: string;
        description: string;
      };
    };
    informationAccuracy: {
      title: string;
      description: string;
    };
    userContent: {
      title: string;
      description: string;
      purposes: string[];
    };
    privacy: {
      title: string;
      description: string;
    };
    disclaimers: {
      title: string;
      description: string;
      warranties: string[];
    };
    limitationOfLiability: {
      title: string;
      description: string;
    };
    governingLaw: {
      title: string;
      description: string;
    };
    changesToTerms: {
      title: string;
      description: string;
    };
  };

  // Sitemap translations
  sitemap: {
    pageTitle: string;
    pageSubtitle: string;
    quickNavigation: string;
    needHelp: string;
    helpDescription: string;
    contactTeam: string;
    sections: string;
    totalPages: string;
    // Sections
    mainPages: {
      title: string;
      homepage: {
        label: string;
        description: string;
      };
      mission: {
        label: string;
        description: string;
      };
      projects: {
        label: string;
        description: string;
      };
      contact: {
        label: string;
        description: string;
      };
    };
    productsServices: {
      title: string;
      allProducts: {
        label: string;
        description: string;
      };
      buildings: {
        label: string;
        description: string;
      };
      equipments: {
        label: string;
        description: string;
      };
      grainStorage: {
        label: string;
        description: string;
      };
      feedTransportation: {
        label: string;
        description: string;
      };
      ventilation: {
        label: string;
        description: string;
      };
      confinement: {
        label: string;
        description: string;
      };
      flooring: {
        label: string;
        description: string;
      };
      blueprints: {
        label: string;
        description: string;
      };
    };
    projectCategories: {
      title: string;
      allProjects: {
        label: string;
        description: string;
      };
      swineProjects: {
        label: string;
        description: string;
      };
      poultryProjects: {
        label: string;
        description: string;
      };
      grainProjects: {
        label: string;
        description: string;
      };
      integratedSolutions: {
        label: string;
        description: string;
      };
    };
    legalInfo: {
      title: string;
      privacyPolicy: {
        label: string;
        description: string;
      };
      termsOfService: {
        label: string;
        description: string;
      };
      sitemap: {
        label: string;
        description: string;
      };
    };
    utilityPages: {
      title: string;
      underConstruction: {
        label: string;
        description: string;
      };
    };
  };

  // Under Construction translations
  underConstruction: {
    pageTitle: string;
    subtitle: string;
    workingHard: string;
    progressComplete: string;
    goHome: string;
    contactUs: string;
  };

  // Contact translations
  contact: {
    hero: {
      title: string;
      subtitle: string;
    };
    form: {
      title: string;
      fullName: string;
      fullNameRequired: string;
      company: string;
      email: string;
      emailRequired: string;
      phone: string;
      timeline: string;
      location: string;
      locationPlaceholder: string;
      description: string;
      descriptionRequired: string;
      descriptionPlaceholder: string;
      source: string;
      submitButton: string;
      successMessage: string;
      errorMessage: string;
      timelineOptions: {
        select: string;
        urgent: string;
        short: string;
        medium: string;
        long: string;
      };
      sourceOptions: {
        select: string;
        google: string;
        referral: string;
        tradeShow: string;
        website: string;
        socialMedia: string;
        advertisement: string;
        other: string;
      };
    };
    employment: {
      title: string;
      description: string;
      description2: string;
      description3: string;
      description4: string;
      qualitiesTitle: string;
      qualities: string[];
      viewJobsButton: string;
    };
  };

  // Projects translations
  projects: {
    hero: {
      title: string;
      subtitle: string;
    };
    tabs: {
      allProjects: string;
      swine: string;
      poultry: string;
      grainStorage: string;
      integratedSolutions: string;
    };
    featuredProjects: {
      title: string;
      subtitle: string;
    };
    projectDetails: {
      keyFeatures: string;
      location: string;
    };
    noProjects: {
      title: string;
      message: string;
      tryDifferent: string;
    };
    cta: {
      title: string;
      subtitle: string;
      buttonText: string;
    };
    // Project data
    projectsData: {
      swineProject: {
        title: string;
        description: string;
        features: string[];
      };
      poultryProject: {
        title: string;
        description: string;
        features: string[];
      };
      grainProject: {
        title: string;
        description: string;
        features: string[];
      };
      integratedProject: {
        title: string;
        description: string;
        features: string[];
      };
    };
  };

  // Products and Services translations
  products: {
    hero: {
      title: string;
      subtitle: string;
    };
    tabs: {
      buildings: string;
      equipments: string;
      grainStorage: string;
      feedTransportation: string;
      ventilation: string;
      confinement: string;
      flooring: string;
      blueprints: string;
    };
    services: {
      buildings: {
        title: string;
        description: string;
      };
      equipments: {
        title: string;
        description: string;
      };
      grainStorage: {
        title: string;
        description: string;
      };
      feedTransportation: {
        title: string;
        description: string;
      };
      ventilation: {
        title: string;
        description: string;
      };
      confinement: {
        title: string;
        description: string;
      };
      flooring: {
        title: string;
        description: string;
      };
      blueprints: {
        title: string;
        description: string;
      };
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
      termsOfService: {
        pageTitle: 'Terms of Service',
        lastUpdated: 'Last updated: January 2025',
        agreementToTerms: {
          title: 'Agreement to Terms',
          paragraph1: 'These Terms of Service ("Terms") constitute a legally binding agreement between you and AgPro International ("we," "our," or "us") regarding your use of our website and services.',
          paragraph2: 'By accessing or using our website, you agree to be bound by these Terms. If you do not agree with any part of these terms, you may not access our website or use our services.'
        },
        ourServices: {
          title: 'Our Services',
          description: 'AgPro International provides consulting, development, and management services for agribusiness projects, including but not limited to:',
          servicesList: [
            'Swine and poultry project consulting',
            'Construction planning and supervision',
            'Equipment supply and installation',
            'Grain storage and handling systems',
            'Architectural and engineering services'
          ]
        },
        useOfWebsite: {
          title: 'Use of Our Website',
          permittedUse: {
            title: 'Permitted Use',
            description: 'You may use our website for lawful purposes only. You agree not to use the website:',
            prohibitions: [
              'In any way that violates applicable laws or regulations',
              'To transmit unauthorized advertising or promotional material',
              'To impersonate any person or entity',
              'To collect information about others without consent',
              'To interfere with the operation of our website'
            ]
          },
          intellectualProperty: {
            title: 'Intellectual Property',
            description: 'All content on our website, including text, graphics, logos, images, and software, is the property of AgPro International and is protected by copyright and other intellectual property laws.'
          }
        },
        informationAccuracy: {
          title: 'Information Accuracy',
          description: 'While we strive to provide accurate and up-to-date information on our website, we make no representations or warranties about the completeness, accuracy, or reliability of any information. Any reliance you place on such information is at your own risk.'
        },
        userContent: {
          title: 'User Content',
          description: 'When you submit information through our contact forms or other means, you grant us the right to use, store, and process that information for business purposes, including:',
          purposes: [
            'Responding to your inquiries',
            'Providing requested services',
            'Improving our services',
            'Complying with legal requirements'
          ]
        },
        privacy: {
          title: 'Privacy',
          description: 'Your privacy is important to us. Please review our Privacy Policy, which explains how we collect, use, and protect your information when you use our services.'
        },
        disclaimers: {
          title: 'Disclaimers',
          description: 'Our website and services are provided "as is" without warranties of any kind, either express or implied. We disclaim all warranties, including but not limited to:',
          warranties: [
            'Warranties of merchantability',
            'Fitness for a particular purpose',
            'Non-infringement',
            'Accuracy or completeness of information'
          ]
        },
        limitationOfLiability: {
          title: 'Limitation of Liability',
          description: 'To the fullest extent permitted by law, AgPro International shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities, arising from your use of our website or services.'
        },
        governingLaw: {
          title: 'Governing Law',
          description: 'These Terms shall be governed by and construed in accordance with the laws of the State of Illinois, United States, without regard to conflict of law principles.'
        },
        changesToTerms: {
          title: 'Changes to Terms',
          description: 'We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. Your continued use of our website after such modifications constitutes acceptance of the updated Terms.'
        }
      },
      sitemap: {
        pageTitle: 'Sitemap',
        pageSubtitle: 'Complete navigation guide to our website',
        quickNavigation: 'Quick Navigation',
        needHelp: 'Need Help Finding Something?',
        helpDescription: 'If you can\'t find what you\'re looking for in our sitemap, please don\'t hesitate to contact us. Our team is here to help you navigate our services and find the perfect solution for your project.',
        contactTeam: 'Contact Our Team',
        sections: 'sections',
        totalPages: 'total pages',
        mainPages: {
          title: 'Main Pages',
          homepage: {
            label: 'Homepage',
            description: 'Welcome to AgPro International - Excellence in Livestock housing and equipment'
          },
          mission: {
            label: 'Our Mission',
            description: 'Learn about our specialized consulting and company values'
          },
          projects: {
            label: 'Projects',
            description: 'Showcasing decades of excellence in agribusiness solutions worldwide'
          },
          contact: {
            label: 'Contact Us',
            description: 'Get in touch with our experts for your next project'
          }
        },
        productsServices: {
          title: 'Products & Services',
          allProducts: {
            label: 'All Products & Services',
            description: 'Complete overview of our agribusiness solutions'
          },
          buildings: {
            label: 'Buildings',
            description: 'Swine and poultry construction planning and supervision'
          },
          equipments: {
            label: 'Equipments',
            description: 'Complete range of agricultural equipment and systems'
          },
          grainStorage: {
            label: 'Grain Storage & Handling',
            description: 'Grain silos, elevators, and storage solutions'
          },
          feedTransportation: {
            label: 'Feed Transportation',
            description: 'Advanced feed distribution and conveyor systems'
          },
          ventilation: {
            label: 'Ventilation Equipment',
            description: 'Climate control and ventilation solutions'
          },
          confinement: {
            label: 'Confinement Systems',
            description: 'Livestock housing and confinement solutions'
          },
          flooring: {
            label: 'Flooring Solutions',
            description: 'Specialized flooring for livestock applications'
          },
          blueprints: {
            label: 'Blue Prints & Design',
            description: 'Professional architectural and engineering services'
          }
        },
        projectCategories: {
          title: 'Project Categories',
          allProjects: {
            label: 'All Projects',
            description: 'Complete portfolio of our agribusiness projects'
          },
          swineProjects: {
            label: 'Swine Projects',
            description: 'Large-scale swine facility projects worldwide'
          },
          poultryProjects: {
            label: 'Poultry Projects',
            description: 'Modern poultry complex and housing solutions'
          },
          grainProjects: {
            label: 'Grain Storage Projects',
            description: 'High-capacity grain storage and handling facilities'
          },
          integratedSolutions: {
            label: 'Integrated Solutions',
            description: 'Complete integrated livestock operations'
          }
        },
        legalInfo: {
          title: 'Legal & Information',
          privacyPolicy: {
            label: 'Privacy Policy',
            description: 'How we collect, use, and protect your information'
          },
          termsOfService: {
            label: 'Terms of Service',
            description: 'Terms and conditions for using our website and services'
          },
          sitemap: {
            label: 'Sitemap',
            description: 'Complete navigation guide to our website'
          }
        },
        utilityPages: {
          title: 'Utility Pages',
          underConstruction: {
            label: 'Under Construction',
            description: 'Page template for sections in development'
          }
        }
      },
      underConstruction: {
        pageTitle: 'Under Construction',
        subtitle: 'We\'re working hard to bring you something amazing. This page will be available soon!',
        workingHard: 'We\'re working hard to bring you something amazing.',
        progressComplete: '75% Complete',
        goHome: 'Go to Homepage',
        contactUs: 'Contact Us'
      },
      contact: {
        hero: {
          title: 'Contact Us',
          subtitle: 'We\'re ready to develop the ideal solution for your project. Speak with our experts.'
        },
        form: {
          title: 'Request a Custom Quote',
          fullName: 'Full Name',
          fullNameRequired: 'Full Name *',
          company: 'Company',
          email: 'Email',
          emailRequired: 'Email *',
          phone: 'Phone',
          timeline: 'Urgency/Timeline',
          location: 'Country/Region',
          locationPlaceholder: 'Country/Region',
          description: 'Type of Service Needed / Project Description',
          descriptionRequired: 'Type of Service Needed / Project Description *',
          descriptionPlaceholder: 'Please describe in detail your project goals and requirements',
          source: 'How did you hear about us?',
          submitButton: 'Get Your Free Quote',
          successMessage: 'Thank you for your inquiry! We will contact you soon.',
          errorMessage: 'Please fill in all required fields.',
          timelineOptions: {
            select: 'Select desired timeline',
            urgent: 'Urgent (within 30 days)',
            short: 'Short-term (1-3 months)',
            medium: 'Medium-term (3-6 months)',
            long: 'Long-term (6+ months)'
          },
          sourceOptions: {
            select: 'Select an option',
            google: 'Google search',
            referral: 'Client referral',
            tradeShow: 'Industry trade show',
            website: 'Company website',
            socialMedia: 'Social media',
            advertisement: 'Advertisement',
            other: 'Other'
          }
        },
        employment: {
          title: 'Employment',
          description: 'If interested in working with us, please send us your full C.V.',
          description2: 'The key to AGPRO\'S success is the people who work with us and who strive daily to reach our customer\'s goals.',
          description3: 'It is our policy to bring the best professionals in the industry to our team.',
          description4: 'Each project is a new opportunity to show our customers the highly professional attitude we seek at AGPRO INTERNATIONAL. We highly value our associates.',
          qualitiesTitle: 'If you have the following qualities, please click the button below and fill the form:',
          qualities: [
            'Ability to work in a very demanding environment',
            'Capacity to overcome difficulties',
            'Efficiency',
            'Flexibility',
            'Desire to better yourself'
          ],
          viewJobsButton: 'View Available Jobs'
        }
      },
      projects: {
        hero: {
          title: 'Our Projects',
          subtitle: 'Showcasing decades of excellence in agribusiness solutions worldwide'
        },
        tabs: {
          allProjects: 'All Projects',
          swine: 'Swine',
          poultry: 'Poultry',
          grainStorage: 'Grain Storage',
          integratedSolutions: 'Integrated Solutions'
        },
        featuredProjects: {
          title: 'Featured Projects',
          subtitle: 'From large-scale swine facilities to integrated agricultural complexes, our projects represent the pinnacle of agribusiness innovation.'
        },
        projectDetails: {
          keyFeatures: 'Key Features:',
          location: 'Location'
        },
        noProjects: {
          title: 'No projects found',
          message: 'No projects found for this category',
          tryDifferent: 'Try selecting a different category'
        },
        cta: {
          title: 'Ready to Start Your Next Project?',
          subtitle: 'Let our experienced team help you develop the ideal solution for your agribusiness needs.',
          buttonText: 'Contact Our Experts'
        },
        projectsData: {
          swineProject: {
            title: 'Large Scale Swine Facility',
            description: 'Complete swine production facility with 5,000 head capacity, featuring state-of-the-art ventilation systems, automated feeding, and advanced waste management.',
            features: [
              '5,000 head capacity',
              'Automated feeding systems',
              'Climate-controlled environment',
              'Waste management systems',
              'Biosecurity protocols'
            ]
          },
          poultryProject: {
            title: 'Modern Poultry Complex',
            description: 'Integrated poultry production complex with multiple houses, featuring advanced environmental controls and automated egg collection systems.',
            features: [
              '10 production houses',
              'Automated egg collection',
              'Environmental control systems',
              'Biosecurity measures',
              'Energy-efficient design'
            ]
          },
          grainProject: {
            title: 'Grain Storage Facility',
            description: 'High-capacity grain storage facility with advanced aeration and monitoring systems for optimal grain preservation.',
            features: [
              '50,000 ton capacity',
              'Advanced aeration systems',
              'Temperature monitoring',
              'Automated handling equipment',
              'Quality preservation systems'
            ]
          },
          integratedProject: {
            title: 'Integrated Livestock Farm',
            description: 'Complete integrated livestock operation combining swine and poultry production with feed mill and grain storage.',
            features: [
              'Multi-species facility',
              'On-site feed mill',
              'Integrated waste management',
              'Renewable energy systems',
              'Comprehensive automation'
            ]
          }
        }
      },
      products: {
        hero: {
          title: 'Products and Services',
          subtitle: 'For decades, AgPro International has delivered premium solutions to the world\'s most demanding agribusiness projects.'
        },
        tabs: {
          buildings: 'Buildings',
          equipments: 'Equipments',
          grainStorage: 'Grain Storage & Handling',
          feedTransportation: 'Feed Transportation',
          ventilation: 'Ventilation Equipment',
          confinement: 'Confinement',
          flooring: 'Flooring',
          blueprints: 'Blue Prints'
        },
        services: {
          buildings: {
            title: 'Buildings',
            description: 'Swine project consulting, development and management, construction planning and supervision, equipment suppliers of feeding systems, ventilation systems, evaporative cooling, environmental controls, sidewall curtains, heating, drinkers, finishing penning, nursery penning, gestation stalls, farrowing crates, concrete slats, plastic flooring for nurseries and farrowing crates.'
          },
          equipments: {
            title: 'Equipments',
            description: 'Complete range of agricultural equipment including feeding systems, ventilation systems, evaporative cooling, environmental controls, sidewall curtains, heating systems, water management systems, and specialized livestock housing equipment.'
          },
          grainStorage: {
            title: 'Grain Storage and Handling',
            description: 'Grain storage project consulting, development and management, equipment suppliers of Grain Silos, Hopper Tanks, bucket elevators, chain conveyors, belt conveyors, screw conveyors, distributors, automatic control systems and electrical installations.'
          },
          feedTransportation: {
            title: 'Feed Transportation Systems',
            description: 'Advanced feed transportation and distribution systems including automated feeding equipment, conveyor systems, feed mills, and complete turnkey feeding solutions for livestock operations.'
          },
          ventilation: {
            title: 'Ventilation Equipment',
            description: 'State-of-the-art ventilation systems including exhaust fans, inlet systems, environmental controls, cooling pads, heating systems, and complete climate control solutions.'
          },
          confinement: {
            title: 'Confinement',
            description: 'Specialized confinement systems including gestation stalls, farrowing crates, nursery penning, finishing pens, and complete housing solutions designed for optimal animal welfare and productivity.'
          },
          flooring: {
            title: 'Flooring',
            description: 'Comprehensive flooring solutions including concrete slats, plastic flooring for nurseries and farrowing crates, drainage systems, and specialized flooring for different livestock applications.'
          },
          blueprints: {
            title: 'Blue Prints',
            description: 'Professional architectural and engineering services including project design, blueprints, construction planning, technical drawings, and complete project documentation and supervision.'
          }
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
      termsOfService: {
        pageTitle: 'Termos de Serviço',
        lastUpdated: 'Última atualização: Janeiro de 2025',
        agreementToTerms: {
          title: 'Acordo com os Termos',
          paragraph1: 'Estes Termos de Serviço ("Termos") constituem um acordo juridicamente vinculativo entre você e a AgPro International ("nós", "nossa", "nos") sobre o uso de nosso site e serviços.',
          paragraph2: 'Ao acessar ou usar nosso site, você concorda em estar vinculado a estes Termos. Se você não concorda com qualquer parte destes termos, você não pode acessar nosso site ou usar nossos serviços.'
        },
        ourServices: {
          title: 'Nossos Serviços',
          description: 'A AgPro International fornece serviços de consultoria, desenvolvimento e gerenciamento para projetos de agronegócio, incluindo mas não limitado a:',
          servicesList: [
            'Consultoria em projetos suínos e avícolas',
            'Planejamento e supervisão de construção',
            'Fornecimento e instalação de equipamentos',
            'Sistemas de armazenamento e manuseio de grãos',
            'Serviços arquitetônicos e de engenharia'
          ]
        },
        useOfWebsite: {
          title: 'Uso do Nosso Site',
          permittedUse: {
            title: 'Uso Permitido',
            description: 'Você pode usar nosso site apenas para fins legais. Você concorda em não usar o site:',
            prohibitions: [
              'De qualquer forma que viole leis ou regulamentos aplicáveis',
              'Para transmitir publicidade ou material promocional não autorizado',
              'Para se passar por qualquer pessoa ou entidade',
              'Para coletar informações sobre outros sem consentimento',
              'Para interferir na operação de nosso site'
            ]
          },
          intellectualProperty: {
            title: 'Propriedade Intelectual',
            description: 'Todo o conteúdo em nosso site, incluindo texto, gráficos, logotipos, imagens e software, é propriedade da AgPro International e está protegido por direitos autorais e outras leis de propriedade intelectual.'
          }
        },
        informationAccuracy: {
          title: 'Precisão das Informações',
          description: 'Embora nos esforcemos para fornecer informações precisas e atualizadas em nosso site, não fazemos representações ou garantias sobre a completude, precisão ou confiabilidade de qualquer informação. Qualquer dependência que você coloque em tais informações é por sua própria conta e risco.'
        },
        userContent: {
          title: 'Conteúdo do Usuário',
          description: 'Quando você envia informações através de nossos formulários de contato ou outros meios, você nos concede o direito de usar, armazenar e processar essas informações para fins comerciais, incluindo:',
          purposes: [
            'Responder às suas consultas',
            'Fornecer serviços solicitados',
            'Melhorar nossos serviços',
            'Cumprir requisitos legais'
          ]
        },
        privacy: {
          title: 'Privacidade',
          description: 'Sua privacidade é importante para nós. Por favor, revise nossa Política de Privacidade, que explica como coletamos, usamos e protegemos suas informações quando você usa nossos serviços.'
        },
        disclaimers: {
          title: 'Isenções de Responsabilidade',
          description: 'Nosso site e serviços são fornecidos "como estão" sem garantias de qualquer tipo, expressas ou implícitas. Isentamo-nos de todas as garantias, incluindo mas não limitado a:',
          warranties: [
            'Garantias de comercialização',
            'Adequação para um propósito específico',
            'Não violação',
            'Precisão ou completude das informações'
          ]
        },
        limitationOfLiability: {
          title: 'Limitação de Responsabilidade',
          description: 'Na máxima extensão permitida por lei, a AgPro International não será responsável por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos, incluindo mas não limitado à perda de lucros, dados ou oportunidades de negócios, decorrentes do uso de nosso site ou serviços.'
        },
        governingLaw: {
          title: 'Lei Aplicável',
          description: 'Estes Termos serão regidos e interpretados de acordo com as leis do Estado de Illinois, Estados Unidos, sem consideração aos princípios de conflito de leis.'
        },
        changesToTerms: {
          title: 'Mudanças nos Termos',
          description: 'Reservamo-nos o direito de modificar ou substituir estes Termos a qualquer momento. Se uma revisão for material, forneceremos pelo menos 30 dias de aviso antes que quaisquer novos termos entrem em vigor. Seu uso continuado de nosso site após tais modificações constitui aceitação dos Termos atualizados.'
        }
      },
      sitemap: {
        pageTitle: 'Mapa do Site',
        pageSubtitle: 'Guia completo de navegação do nosso site',
        quickNavigation: 'Navegação Rápida',
        needHelp: 'Precisa de Ajuda para Encontrar Algo?',
        helpDescription: 'Se você não conseguir encontrar o que procura em nosso mapa do site, não hesite em nos contatar. Nossa equipe está aqui para ajudá-lo a navegar pelos nossos serviços e encontrar a solução perfeita para seu projeto.',
        contactTeam: 'Entre em Contato',
        sections: 'seções',
        totalPages: 'páginas totais',
        mainPages: {
          title: 'Páginas Principais',
          homepage: {
            label: 'Página Inicial',
            description: 'Bem-vindo à AgPro International - Excelência em habitação e equipamentos para pecuária'
          },
          mission: {
            label: 'Nossa Missão',
            description: 'Conheça nossa consultoria especializada e valores da empresa'
          },
          projects: {
            label: 'Projetos',
            description: 'Mostrando décadas de excelência em soluções de agronegócio mundialmente'
          },
          contact: {
            label: 'Entre em Contato',
            description: 'Entre em contato com nossos especialistas para seu próximo projeto'
          }
        },
        productsServices: {
          title: 'Produtos e Serviços',
          allProducts: {
            label: 'Todos os Produtos e Serviços',
            description: 'Visão geral completa de nossas soluções de agronegócio'
          },
          buildings: {
            label: 'Construções',
            description: 'Planejamento e supervisão de construções suínas e avícolas'
          },
          equipments: {
            label: 'Equipamentos',
            description: 'Gama completa de equipamentos e sistemas agrícolas'
          },
          grainStorage: {
            label: 'Armazenamento e Manuseio de Grãos',
            description: 'Silos de grãos, elevadores e soluções de armazenamento'
          },
          feedTransportation: {
            label: 'Transporte de Ração',
            description: 'Sistemas avançados de distribuição de ração e transportadores'
          },
          ventilation: {
            label: 'Equipamentos de Ventilação',
            description: 'Controle climático e soluções de ventilação'
          },
          confinement: {
            label: 'Sistemas de Confinamento',
            description: 'Habitação para animais e soluções de confinamento'
          },
          flooring: {
            label: 'Soluções de Piso',
            description: 'Pisos especializados para aplicações pecuárias'
          },
          blueprints: {
            label: 'Plantas e Design',
            description: 'Serviços profissionais de arquitetura e engenharia'
          }
        },
        projectCategories: {
          title: 'Categorias de Projetos',
          allProjects: {
            label: 'Todos os Projetos',
            description: 'Portfólio completo de nossos projetos de agronegócio'
          },
          swineProjects: {
            label: 'Projetos Suínos',
            description: 'Projetos de instalações suínas de grande escala mundialmente'
          },
          poultryProjects: {
            label: 'Projetos Avícolas',
            description: 'Complexos avícolas modernos e soluções de habitação'
          },
          grainProjects: {
            label: 'Projetos de Armazenamento de Grãos',
            description: 'Instalações de armazenamento e manuseio de grãos de alta capacidade'
          },
          integratedSolutions: {
            label: 'Soluções Integradas',
            description: 'Operações pecuárias integradas completas'
          }
        },
        legalInfo: {
          title: 'Legal e Informações',
          privacyPolicy: {
            label: 'Política de Privacidade',
            description: 'Como coletamos, usamos e protegemos suas informações'
          },
          termsOfService: {
            label: 'Termos de Serviço',
            description: 'Termos e condições para usar nosso site e serviços'
          },
          sitemap: {
            label: 'Mapa do Site',
            description: 'Guia completo de navegação do nosso site'
          }
        },
        utilityPages: {
          title: 'Páginas Utilitárias',
          underConstruction: {
            label: 'Em Construção',
            description: 'Modelo de página para seções em desenvolvimento'
          }
        }
      },
      underConstruction: {
        pageTitle: 'Em Construção',
        subtitle: 'Estamos trabalhando duro para trazer algo incrível. Esta página estará disponível em breve!',
        workingHard: 'Estamos trabalhando duro para trazer algo incrível.',
        progressComplete: '75% Concluído',
        goHome: 'Ir para Página Inicial',
        contactUs: 'Entre em Contato'
      },
      contact: {
        hero: {
          title: 'Entre em Contato',
          subtitle: 'Estamos prontos para desenvolver a solução ideal para seu projeto. Fale com nossos especialistas.'
        },
        form: {
          title: 'Solicite um Orçamento Personalizado',
          fullName: 'Nome Completo',
          fullNameRequired: 'Nome Completo *',
          company: 'Empresa',
          email: 'E-mail',
          emailRequired: 'E-mail *',
          phone: 'Telefone',
          timeline: 'Urgência/Cronograma',
          location: 'País/Região',
          locationPlaceholder: 'País/Região',
          description: 'Tipo de Serviço Necessário / Descrição do Projeto',
          descriptionRequired: 'Tipo de Serviço Necessário / Descrição do Projeto *',
          descriptionPlaceholder: 'Por favor, descreva detalhadamente os objetivos e requisitos do seu projeto',
          source: 'Como você soube sobre nós?',
          submitButton: 'Obter Seu Orçamento Gratuito',
          successMessage: 'Obrigado por sua consulta! Entraremos em contato em breve.',
          errorMessage: 'Por favor, preencha todos os campos obrigatórios.',
          timelineOptions: {
            select: 'Selecione o cronograma desejado',
            urgent: 'Urgente (dentro de 30 dias)',
            short: 'Curto prazo (1-3 meses)',
            medium: 'Médio prazo (3-6 meses)',
            long: 'Longo prazo (6+ meses)'
          },
          sourceOptions: {
            select: 'Selecione uma opção',
            google: 'Pesquisa no Google',
            referral: 'Indicação de cliente',
            tradeShow: 'Feira do setor',
            website: 'Site da empresa',
            socialMedia: 'Redes sociais',
            advertisement: 'Publicidade',
            other: 'Outro'
          }
        },
        employment: {
          title: 'Emprego',
          description: 'Se estiver interessado em trabalhar conosco, por favor nos envie seu currículo completo.',
          description2: 'A chave para o sucesso da AGPRO são as pessoas que trabalham conosco e que se esforçam diariamente para alcançar os objetivos de nossos clientes.',
          description3: 'É nossa política trazer os melhores profissionais da indústria para nossa equipe.',
          description4: 'Cada projeto é uma nova oportunidade de mostrar aos nossos clientes a atitude altamente profissional que buscamos na AGPRO INTERNATIONAL. Valorizamos muito nossos associados.',
          qualitiesTitle: 'Se você possui as seguintes qualidades, clique no botão abaixo e preencha o formulário:',
          qualities: [
            'Capacidade de trabalhar em um ambiente muito exigente',
            'Capacidade de superar dificuldades',
            'Eficiência',
            'Flexibilidade',
            'Desejo de se aperfeiçoar'
          ],
          viewJobsButton: 'Ver Vagas Disponíveis'
        }
      },
      projects: {
        hero: {
          title: 'Nossos Projetos',
          subtitle: 'Mostrando décadas de excelência em soluções de agronegócio mundialmente'
        },
        tabs: {
          allProjects: 'Todos os Projetos',
          swine: 'Suinocultura',
          poultry: 'Avicultura',
          grainStorage: 'Armazenamento de Grãos',
          integratedSolutions: 'Soluções Integradas'
        },
        featuredProjects: {
          title: 'Projetos em Destaque',
          subtitle: 'Desde instalações suínas de grande escala até complexos agrícolas integrados, nossos projetos representam o ápice da inovação no agronegócio.'
        },
        projectDetails: {
          keyFeatures: 'Características Principais:',
          location: 'Localização'
        },
        noProjects: {
          title: 'Nenhum projeto encontrado',
          message: 'Nenhum projeto encontrado para esta categoria',
          tryDifferent: 'Tente selecionar uma categoria diferente'
        },
        cta: {
          title: 'Pronto para Iniciar Seu Próximo Projeto?',
          subtitle: 'Deixe nossa equipe experiente ajudá-lo a desenvolver a solução ideal para suas necessidades de agronegócio.',
          buttonText: 'Entre em Contato com Nossos Especialistas'
        },
        projectsData: {
          swineProject: {
            title: 'Instalação Suína de Grande Escala',
            description: 'Instalação completa de produção suína com capacidade para 5.000 cabeças, com sistemas de ventilação de última geração, alimentação automatizada e gerenciamento avançado de resíduos.',
            features: [
              'Capacidade para 5.000 cabeças',
              'Sistemas de alimentação automatizados',
              'Ambiente com clima controlado',
              'Sistemas de gerenciamento de resíduos',
              'Protocolos de biossegurança'
            ]
          },
          poultryProject: {
            title: 'Complexo Avícola Moderno',
            description: 'Complexo de produção avícola integrado com múltiplos galpões, com controles ambientais avançados e sistemas automatizados de coleta de ovos.',
            features: [
              '10 galpões de produção',
              'Coleta automatizada de ovos',
              'Sistemas de controle ambiental',
              'Medidas de biossegurança',
              'Design energeticamente eficiente'
            ]
          },
          grainProject: {
            title: 'Instalação de Armazenamento de Grãos',
            description: 'Instalação de armazenamento de grãos de alta capacidade com sistemas avançados de aeração e monitoramento para preservação ideal dos grãos.',
            features: [
              'Capacidade de 50.000 toneladas',
              'Sistemas avançados de aeração',
              'Monitoramento de temperatura',
              'Equipamentos automatizados de manuseio',
              'Sistemas de preservação da qualidade'
            ]
          },
          integratedProject: {
            title: 'Fazenda Pecuária Integrada',
            description: 'Operação pecuária integrada completa combinando produção suína e avícola com fábrica de ração e armazenamento de grãos.',
            features: [
              'Instalação multi-espécies',
              'Fábrica de ração no local',
              'Gerenciamento integrado de resíduos',
              'Sistemas de energia renovável',
              'Automação abrangente'
            ]
          }
        }
      },
      products: {
        hero: {
          title: 'Produtos e Serviços',
          subtitle: 'Por décadas, a AgPro International tem entregue soluções premium para os projetos de agronegócio mais exigentes do mundo.'
        },
        tabs: {
          buildings: 'Construções',
          equipments: 'Equipamentos',
          grainStorage: 'Armazenamento e Manuseio de Grãos',
          feedTransportation: 'Transporte de Ração',
          ventilation: 'Equipamentos de Ventilação',
          confinement: 'Confinamento',
          flooring: 'Pisos',
          blueprints: 'Plantas'
        },
        services: {
          buildings: {
            title: 'Construções',
            description: 'Consultoria, desenvolvimento e gerenciamento de projetos suinícolas, planejamento e supervisão de construção, fornecedores de equipamentos para sistemas de alimentação, sistemas de ventilação, resfriamento evaporativo, controles ambientais, cortinas laterais, aquecimento, bebedouros, baias de terminação, baias de creche, celas de gestação, celas de maternidade, ripados de concreto, pisos plásticos para creches e celas de maternidade.'
          },
          equipments: {
            title: 'Equipamentos',
            description: 'Gama completa de equipamentos agrícolas incluindo sistemas de alimentação, sistemas de ventilação, resfriamento evaporativo, controles ambientais, cortinas laterais, sistemas de aquecimento, sistemas de gestão de água e equipamentos especializados para habitação de animais.'
          },
          grainStorage: {
            title: 'Armazenamento e Manuseio de Grãos',
            description: 'Consultoria, desenvolvimento e gerenciamento de projetos de armazenamento de grãos, fornecedores de equipamentos para Silos de Grãos, Tanques de Descarga, elevadores de canecas, transportadores de corrente, transportadores de correia, transportadores helicoidais, distribuidores, sistemas de controle automático e instalações elétricas.'
          },
          feedTransportation: {
            title: 'Sistemas de Transporte de Ração',
            description: 'Sistemas avançados de transporte e distribuição de ração incluindo equipamentos de alimentação automatizada, sistemas de transportadores, fábricas de ração e soluções completas de alimentação turnkey para operações pecuárias.'
          },
          ventilation: {
            title: 'Equipamentos de Ventilação',
            description: 'Sistemas de ventilação de última geração incluindo ventiladores de exaustão, sistemas de entrada, controles ambientais, almofadas de resfriamento, sistemas de aquecimento e soluções completas de controle climático.'
          },
          confinement: {
            title: 'Confinamento',
            description: 'Sistemas de confinamento especializados incluindo celas de gestação, celas de maternidade, baias de creche, baias de terminação e soluções completas de habitação projetadas para bem-estar animal ideal e produtividade.'
          },
          flooring: {
            title: 'Pisos',
            description: 'Soluções abrangentes de pisos incluindo ripados de concreto, pisos plásticos para creches e celas de maternidade, sistemas de drenagem e pisos especializados para diferentes aplicações pecuárias.'
          },
          blueprints: {
            title: 'Plantas',
            description: 'Serviços profissionais de arquitetura e engenharia incluindo design de projetos, plantas, planejamento de construção, desenhos técnicos e documentação completa de projetos e supervisão.'
          }
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
      termsOfService: {
        pageTitle: 'Términos de Servicio',
        lastUpdated: 'Última actualización: Enero de 2025',
        agreementToTerms: {
          title: 'Acuerdo con los Términos',
          paragraph1: 'Estos Términos de Servicio ("Términos") constituyen un acuerdo legalmente vinculante entre usted y AgPro International ("nosotros", "nuestra", "nos") con respecto al uso de nuestro sitio web y servicios.',
          paragraph2: 'Al acceder o usar nuestro sitio web, usted acepta estar sujeto a estos Términos. Si no está de acuerdo con cualquier parte de estos términos, no puede acceder a nuestro sitio web o usar nuestros servicios.'
        },
        ourServices: {
          title: 'Nuestros Servicios',
          description: 'AgPro International proporciona servicios de consultoría, desarrollo y gestión para proyectos de agronegocios, incluyendo pero no limitado a:',
          servicesList: [
            'Consultoría en proyectos porcinos y avícolas',
            'Planificación y supervisión de construcción',
            'Suministro e instalación de equipos',
            'Sistemas de almacenamiento y manejo de granos',
            'Servicios arquitectónicos y de ingeniería'
          ]
        },
        useOfWebsite: {
          title: 'Uso de Nuestro Sitio Web',
          permittedUse: {
            title: 'Uso Permitido',
            description: 'Puede usar nuestro sitio web solo para fines legales. Usted acepta no usar el sitio web:',
            prohibitions: [
              'De cualquier manera que viole las leyes o reglamentos aplicables',
              'Para transmitir publicidad o material promocional no autorizado',
              'Para hacerse pasar por cualquier persona o entidad',
              'Para recopilar información sobre otros sin consentimiento',
              'Para interferir con la operación de nuestro sitio web'
            ]
          },
          intellectualProperty: {
            title: 'Propiedad Intelectual',
            description: 'Todo el contenido en nuestro sitio web, incluyendo texto, gráficos, logotipos, imágenes y software, es propiedad de AgPro International y está protegido por derechos de autor y otras leyes de propiedad intelectual.'
          }
        },
        informationAccuracy: {
          title: 'Precisión de la Información',
          description: 'Aunque nos esforzamos por proporcionar información precisa y actualizada en nuestro sitio web, no hacemos representaciones o garantías sobre la integridad, precisión o confiabilidad de cualquier información. Cualquier dependencia que coloque en dicha información es bajo su propio riesgo.'
        },
        userContent: {
          title: 'Contenido del Usuario',
          description: 'Cuando envía información a través de nuestros formularios de contacto u otros medios, nos otorga el derecho de usar, almacenar y procesar esa información para fines comerciales, incluyendo:',
          purposes: [
            'Responder a sus consultas',
            'Proporcionar servicios solicitados',
            'Mejorar nuestros servicios',
            'Cumplir con requisitos legales'
          ]
        },
        privacy: {
          title: 'Privacidad',
          description: 'Su privacidad es importante para nosotros. Por favor revise nuestra Política de Privacidad, que explica cómo recopilamos, usamos y protegemos su información cuando usa nuestros servicios.'
        },
        disclaimers: {
          title: 'Descargos de Responsabilidad',
          description: 'Nuestro sitio web y servicios se proporcionan "tal como están" sin garantías de ningún tipo, ya sean expresas o implícitas. Renunciamos a todas las garantías, incluyendo pero no limitado a:',
          warranties: [
            'Garantías de comerciabilidad',
            'Idoneidad para un propósito particular',
            'No infracción',
            'Precisión o integridad de la información'
          ]
        },
        limitationOfLiability: {
          title: 'Limitación de Responsabilidad',
          description: 'En la máxima medida permitida por la ley, AgPro International no será responsable de ningún daño indirecto, incidental, especial, consecuencial o punitivo, incluyendo pero no limitado a la pérdida de ganancias, datos u oportunidades comerciales, que surjan del uso de nuestro sitio web o servicios.'
        },
        governingLaw: {
          title: 'Ley Aplicable',
          description: 'Estos Términos se regirán e interpretarán de acuerdo con las leyes del Estado de Illinois, Estados Unidos, sin consideración a los principios de conflicto de leyes.'
        },
        changesToTerms: {
          title: 'Cambios en los Términos',
          description: 'Nos reservamos el derecho de modificar o reemplazar estos Términos en cualquier momento. Si una revisión es material, proporcionaremos al menos 30 días de aviso antes de que entren en vigor los nuevos términos. Su uso continuado de nuestro sitio web después de tales modificaciones constituye la aceptación de los Términos actualizados.'
        }
      },
      sitemap: {
        pageTitle: 'Mapa del Sitio',
        pageSubtitle: 'Guía completa de navegación de nuestro sitio web',
        quickNavigation: 'Navegación Rápida',
        needHelp: '¿Necesita Ayuda para Encontrar Algo?',
        helpDescription: 'Si no puede encontrar lo que busca en nuestro mapa del sitio, no dude en contactarnos. Nuestro equipo está aquí para ayudarle a navegar por nuestros servicios y encontrar la solución perfecta para su proyecto.',
        contactTeam: 'Contacte Nuestro Equipo',
        sections: 'secciones',
        totalPages: 'páginas totales',
        mainPages: {
          title: 'Páginas Principales',
          homepage: {
            label: 'Página de Inicio',
            description: 'Bienvenido a AgPro International - Excelencia en vivienda y equipos para ganado'
          },
          mission: {
            label: 'Nuestra Misión',
            description: 'Conozca nuestra consultoría especializada y valores de la empresa'
          },
          projects: {
            label: 'Proyectos',
            description: 'Mostrando décadas de excelencia en soluciones de agronegocios a nivel mundial'
          },
          contact: {
            label: 'Contáctanos',
            description: 'Póngase en contacto con nuestros expertos para su próximo proyecto'
          }
        },
        productsServices: {
          title: 'Productos y Servicios',
          allProducts: {
            label: 'Todos los Productos y Servicios',
            description: 'Visión general completa de nuestras soluciones de agronegocios'
          },
          buildings: {
            label: 'Construcciones',
            description: 'Planificación y supervisión de construcciones porcinas y avícolas'
          },
          equipments: {
            label: 'Equipos',
            description: 'Gama completa de equipos y sistemas agrícolas'
          },
          grainStorage: {
            label: 'Almacenamiento y Manejo de Granos',
            description: 'Silos de granos, elevadores y soluciones de almacenamiento'
          },
          feedTransportation: {
            label: 'Transporte de Alimentos',
            description: 'Sistemas avanzados de distribución de alimentos y transportadores'
          },
          ventilation: {
            label: 'Equipos de Ventilación',
            description: 'Control climático y soluciones de ventilación'
          },
          confinement: {
            label: 'Sistemas de Confinamiento',
            description: 'Vivienda para animales y soluciones de confinamiento'
          },
          flooring: {
            label: 'Soluciones de Pisos',
            description: 'Pisos especializados para aplicaciones ganaderas'
          },
          blueprints: {
            label: 'Planos y Diseño',
            description: 'Servicios profesionales de arquitectura e ingeniería'
          }
        },
        projectCategories: {
          title: 'Categorías de Proyectos',
          allProjects: {
            label: 'Todos los Proyectos',
            description: 'Portafolio completo de nuestros proyectos de agronegocios'
          },
          swineProjects: {
            label: 'Proyectos Porcinos',
            description: 'Proyectos de instalaciones porcinas a gran escala a nivel mundial'
          },
          poultryProjects: {
            label: 'Proyectos Avícolas',
            description: 'Complejos avícolas modernos y soluciones de vivienda'
          },
          grainProjects: {
            label: 'Proyectos de Almacenamiento de Granos',
            description: 'Instalaciones de almacenamiento y manejo de granos de alta capacidad'
          },
          integratedSolutions: {
            label: 'Soluciones Integradas',
            description: 'Operaciones ganaderas integradas completas'
          }
        },
        legalInfo: {
          title: 'Legal e Información',
          privacyPolicy: {
            label: 'Política de Privacidad',
            description: 'Cómo recopilamos, usamos y protegemos su información'
          },
          termsOfService: {
            label: 'Términos de Servicio',
            description: 'Términos y condiciones para usar nuestro sitio web y servicios'
          },
          sitemap: {
            label: 'Mapa del Sitio',
            description: 'Guía completa de navegación de nuestro sitio web'
          }
        },
        utilityPages: {
          title: 'Páginas Utilitarias',
          underConstruction: {
            label: 'En Construcción',
            description: 'Plantilla de página para secciones en desarrollo'
          }
        }
      },
      underConstruction: {
        pageTitle: 'En Construcción',
        subtitle: 'Estamos trabajando duro para traerte algo increíble. ¡Esta página estará disponible pronto!',
        workingHard: 'Estamos trabajando duro para traerte algo increíble.',
        progressComplete: '75% Completado',
        goHome: 'Ir a Página Principal',
        contactUs: 'Contáctanos'
      },
      contact: {
        hero: {
          title: 'Contáctanos',
          subtitle: 'Estamos listos para desarrollar la solución ideal para su proyecto. Hable con nuestros expertos.'
        },
        form: {
          title: 'Solicite una Cotización Personalizada',
          fullName: 'Nombre Completo',
          fullNameRequired: 'Nombre Completo *',
          company: 'Empresa',
          email: 'Correo Electrónico',
          emailRequired: 'Correo Electrónico *',
          phone: 'Teléfono',
          timeline: 'Urgencia/Cronograma',
          location: 'País/Región',
          locationPlaceholder: 'País/Región',
          description: 'Tipo de Servicio Necesario / Descripción del Proyecto',
          descriptionRequired: 'Tipo de Servicio Necesario / Descripción del Proyecto *',
          descriptionPlaceholder: 'Por favor, describa detalladamente los objetivos y requisitos de su proyecto',
          source: '¿Cómo se enteró de nosotros?',
          submitButton: 'Obtenga Su Cotización Gratuita',
          successMessage: '¡Gracias por su consulta! Nos pondremos en contacto pronto.',
          errorMessage: 'Por favor, complete todos los campos obligatorios.',
          timelineOptions: {
            select: 'Seleccione el cronograma deseado',
            urgent: 'Urgente (dentro de 30 días)',
            short: 'Corto plazo (1-3 meses)',
            medium: 'Mediano plazo (3-6 meses)',
            long: 'Largo plazo (6+ meses)'
          },
          sourceOptions: {
            select: 'Seleccione una opción',
            google: 'Búsqueda en Google',
            referral: 'Referencia de cliente',
            tradeShow: 'Feria de la industria',
            website: 'Sitio web de la empresa',
            socialMedia: 'Redes sociales',
            advertisement: 'Publicidad',
            other: 'Otro'
          }
        },
        employment: {
          title: 'Empleo',
          description: 'Si está interesado en trabajar con nosotros, por favor envíenos su currículum completo.',
          description2: 'La clave del éxito de AGPRO son las personas que trabajan con nosotros y que se esfuerzan diariamente para alcanzar los objetivos de nuestros clientes.',
          description3: 'Es nuestra política traer a los mejores profesionales de la industria a nuestro equipo.',
          description4: 'Cada proyecto es una nueva oportunidad de mostrar a nuestros clientes la actitud altamente profesional que buscamos en AGPRO INTERNATIONAL. Valoramos mucho a nuestros asociados.',
          qualitiesTitle: 'Si tiene las siguientes cualidades, haga clic en el botón de abajo y complete el formulario:',
          qualities: [
            'Capacidad de trabajar en un entorno muy exigente',
            'Capacidad para superar dificultades',
            'Eficiencia',
            'Flexibilidad',
            'Deseo de superarse'
          ],
          viewJobsButton: 'Ver Trabajos Disponibles'
        }
      },
      projects: {
        hero: {
          title: 'Nuestros Proyectos',
          subtitle: 'Mostrando décadas de excelencia en soluciones de agronegocios a nivel mundial'
        },
        tabs: {
          allProjects: 'Todos los Proyectos',
          swine: 'Porcinos',
          poultry: 'Aves',
          grainStorage: 'Almacenamiento de Granos',
          integratedSolutions: 'Soluciones Integradas'
        },
        featuredProjects: {
          title: 'Proyectos Destacados',
          subtitle: 'Desde instalaciones porcinas a gran escala hasta complejos agrícolas integrados, nuestros proyectos representan la cúspide de la innovación en agronegocios.'
        },
        projectDetails: {
          keyFeatures: 'Características Clave:',
          location: 'Ubicación'
        },
        noProjects: {
          title: 'No se encontraron proyectos',
          message: 'No se encontraron proyectos para esta categoría',
          tryDifferent: 'Intente seleccionar una categoría diferente'
        },
        cta: {
          title: '¿Listo para Comenzar su Próximo Proyecto?',
          subtitle: 'Permita que nuestro equipo experimentado le ayude a desarrollar la solución ideal para sus necesidades de agronegocios.',
          buttonText: 'Contacte Nuestros Expertos'
        },
        projectsData: {
          swineProject: {
            title: 'Instalación Porcina a Gran Escala',
            description: 'Instalación completa de producción porcina con capacidad para 5,000 cabezas, con sistemas de ventilación de última generación, alimentación automatizada y gestión avanzada de residuos.',
            features: [
              'Capacidad para 5,000 cabezas',
              'Sistemas de alimentación automatizados',
              'Ambiente con clima controlado',
              'Sistemas de gestión de residuos',
              'Protocolos de bioseguridad'
            ]
          },
          poultryProject: {
            title: 'Complejo Avícola Moderno',
            description: 'Complejo de producción avícola integrado con múltiples naves, con controles ambientales avanzados y sistemas automatizados de recolección de huevos.',
            features: [
              '10 naves de producción',
              'Recolección automatizada de huevos',
              'Sistemas de control ambiental',
              'Medidas de bioseguridad',
              'Diseño energéticamente eficiente'
            ]
          },
          grainProject: {
            title: 'Instalación de Almacenamiento de Granos',
            description: 'Instalación de almacenamiento de granos de alta capacidad con sistemas avanzados de aireación y monitoreo para la preservación óptima del grano.',
            features: [
              'Capacidad de 50,000 toneladas',
              'Sistemas avanzados de aireación',
              'Monitoreo de temperatura',
              'Equipos automatizados de manejo',
              'Sistemas de preservación de calidad'
            ]
          },
          integratedProject: {
            title: 'Granja Ganadera Integrada',
            description: 'Operación ganadera integrada completa que combina producción porcina y avícola con fábrica de alimentos y almacenamiento de granos.',
            features: [
              'Instalación multi-especies',
              'Fábrica de alimentos en el sitio',
              'Gestión integrada de residuos',
              'Sistemas de energía renovable',
              'Automatización integral'
            ]
          }
        }
      },
      products: {
        hero: {
          title: 'Productos y Servicios',
          subtitle: 'Durante décadas, AgPro International ha entregado soluciones premium para los proyectos de agronegocios más exigentes del mundo.'
        },
        tabs: {
          buildings: 'Construcciones',
          equipments: 'Equipos',
          grainStorage: 'Almacenamiento y Manejo de Granos',
          feedTransportation: 'Transporte de Alimentos',
          ventilation: 'Equipos de Ventilación',
          confinement: 'Confinamiento',
          flooring: 'Pisos',
          blueprints: 'Planos'
        },
        services: {
          buildings: {
            title: 'Construcciones',
            description: 'Consultoría, desarrollo y gestión de proyectos porcinos, planificación y supervisión de construcción, proveedores de equipos para sistemas de alimentación, sistemas de ventilación, enfriamiento evaporativo, controles ambientales, cortinas laterales, calefacción, bebederos, corrales de engorde, corrales de destete, celdas de gestación, celdas de maternidad, rejillas de concreto, pisos plásticos para destetes y celdas de maternidad.'
          },
          equipments: {
            title: 'Equipos',
            description: 'Gama completa de equipos agrícolas incluyendo sistemas de alimentación, sistemas de ventilación, enfriamiento evaporativo, controles ambientales, cortinas laterales, sistemas de calefacción, sistemas de gestión de agua y equipos especializados para alojamiento de animales.'
          },
          grainStorage: {
            title: 'Almacenamiento y Manejo de Granos',
            description: 'Consultoría, desarrollo y gestión de proyectos de almacenamiento de granos, proveedores de equipos para Silos de Granos, Tanques de Descarga, elevadores de cangilones, transportadores de cadena, transportadores de correa, transportadores helicoidales, distribuidores, sistemas de control automático e instalaciones eléctricas.'
          },
          feedTransportation: {
            title: 'Sistemas de Transporte de Alimentos',
            description: 'Sistemas avanzados de transporte y distribución de alimentos incluyendo equipos de alimentación automatizada, sistemas de transportadores, fábricas de alimentos y soluciones completas de alimentación llave en mano para operaciones ganaderas.'
          },
          ventilation: {
            title: 'Equipos de Ventilación',
            description: 'Sistemas de ventilación de última generación incluyendo ventiladores de extracción, sistemas de entrada, controles ambientales, almohadillas de enfriamiento, sistemas de calefacción y soluciones completas de control climático.'
          },
          confinement: {
            title: 'Confinamiento',
            description: 'Sistemas de confinamiento especializados incluyendo celdas de gestación, celdas de maternidad, corrales de destete, corrales de engorde y soluciones completas de alojamiento diseñadas para el bienestar animal óptimo y productividad.'
          },
          flooring: {
            title: 'Pisos',
            description: 'Soluciones integrales de pisos incluyendo rejillas de concreto, pisos plásticos para destetes y celdas de maternidad, sistemas de drenaje y pisos especializados para diferentes aplicaciones ganaderas.'
          },
          blueprints: {
            title: 'Planos',
            description: 'Servicios profesionales de arquitectura e ingeniería incluyendo diseño de proyectos, planos, planificación de construcción, dibujos técnicos y documentación completa de proyectos y supervisión.'
          }
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

  // Método helper para acessar traduções da privacy policy
  public get privacyPolicy() {
    return this.currentTranslations().privacyPolicy;
  }

  // Método helper para acessar traduções dos terms of service
  public get termsOfService() {
    return this.currentTranslations().termsOfService;
  }

  // Método helper para acessar traduções do sitemap
  public get sitemap() {
    return this.currentTranslations().sitemap;
  }

  // Método helper para acessar traduções do under construction
  public get underConstruction() {
    return this.currentTranslations().underConstruction;
  }

  // Método helper para acessar traduções do contact
  public get contact() {
    return this.currentTranslations().contact;
  }

  // Método helper para acessar traduções do projects
  public get projects() {
    return this.currentTranslations().projects;
  }

  // Método helper para acessar traduções do products
  public get products() {
    return this.currentTranslations().products;
  }

  // Método helper para acessar traduções do footer
  public get footer() {
    return this.currentTranslations().footer;
  }
}