import { TranslocoTestingModule, TranslocoTestingOptions } from '@jsverse/transloco';

export function getTranslocoModule(options: TranslocoTestingOptions = {}) {
  return TranslocoTestingModule.forRoot({
    langs: {
      en: {
        header: {
          home: 'Home',
          mission: 'Mission',
          projects: 'Projects',
          contact: 'Contact',
        },
        footer: {
          buildings: 'Buildings',
          equipments: 'Equipments',
          grainStorage: 'Grain Storage',
          feedTransportation: 'Feed Transportation',
          ourMission: 'Our Mission',
          projects: 'Projects',
          contacts: 'Contact',
        },
        contact: {
          form: {
            validation: {
              required: 'This field is required',
              invalidEmail: 'Invalid email',
              minLength: 'Minimum {{min}} characters',
            },
            timelineOptions: {
              select: 'Select',
              urgent: 'Urgent',
              short: '1-3 months',
              medium: '3-6 months',
              long: '6+ months',
            },
            sourceOptions: {
              select: 'Select',
              google: 'Google',
              referral: 'Referral',
              tradeShow: 'Trade Show',
              website: 'Website',
              socialMedia: 'Social Media',
              advertisement: 'Advertisement',
              other: 'Other',
            },
            successMessage: 'Message sent successfully',
            errorMessage: 'Please fix the errors',
          },
          employment: {
            qualities: ['Quality 1', 'Quality 2', 'Quality 3'],
          },
        },
        privacyPolicy: {
          pageTitle: 'Privacy Policy',
          lastUpdated: 'Last updated: January 2025',
          introduction: {
            title: 'Introduction',
            paragraph1: 'Welcome to AgPro International.',
            paragraph2: 'This policy describes how we handle your data.',
          },
          informationWeCollect: {
            title: 'Information We Collect',
            personalInfo: {
              title: 'Personal Information',
              description: 'We collect information you provide.',
              situations: ['When you contact us', 'When you request a quote'],
              dataTypesIntro: 'Types of data we collect:',
              dataTypes: ['Name', 'Email', 'Phone'],
            },
            automaticInfo: {
              title: 'Automatic Information',
              description: 'We automatically collect certain data.',
            },
          },
          howWeUseInfo: {
            title: 'How We Use Information',
            description: 'We use your information for:',
            purposes: ['To respond to inquiries', 'To provide services'],
          },
          informationSharing: {
            title: 'Information Sharing',
            description: 'We may share information:',
            circumstances: ['With service providers', 'When required by law'],
          },
          dataSecurity: {
            title: 'Data Security',
            description: 'We implement security measures.',
          },
          yourRights: {
            title: 'Your Rights',
            description: 'You have the right to:',
            rights: ['Access your data', 'Request deletion'],
          },
          cookies: {
            title: 'Cookies',
            description: 'We use cookies to improve experience.',
          },
          policyUpdates: {
            title: 'Policy Updates',
            description: 'We may update this policy periodically.',
          },
        },
        termsOfService: {
          pageTitle: 'Terms of Service',
          lastUpdated: 'Last updated: January 2025',
          agreementToTerms: {
            title: 'Agreement to Terms',
            paragraph1: 'By accessing our website, you agree to these terms.',
            paragraph2: 'If you disagree, please do not use our services.',
          },
          ourServices: {
            title: 'Our Services',
            description: 'AgPro International provides:',
            servicesList: ['Agricultural buildings', 'Equipment solutions'],
          },
          useOfWebsite: {
            title: 'Use of Website',
            permittedUse: {
              title: 'Permitted Use',
              description: 'You may not:',
              prohibitions: ['Use for illegal purposes', 'Attempt unauthorized access'],
            },
            intellectualProperty: {
              title: 'Intellectual Property',
              description: 'All content is owned by AgPro International.',
            },
          },
          informationAccuracy: {
            title: 'Information Accuracy',
            description: 'We strive for accuracy but make no guarantees.',
          },
          userContent: {
            title: 'User Content',
            description: 'Content you submit may be used for:',
            purposes: ['Responding to inquiries', 'Improving services'],
          },
          privacy: {
            title: 'Privacy',
            description: 'Your use is also governed by our Privacy Policy.',
          },
          disclaimers: {
            title: 'Disclaimers',
            description: 'Services are provided as-is without warranties:',
            warranties: ['No warranty of merchantability', 'No warranty of fitness'],
          },
          limitationOfLiability: {
            title: 'Limitation of Liability',
            description: 'AgPro shall not be liable for indirect damages.',
          },
          governingLaw: {
            title: 'Governing Law',
            description: 'These terms are governed by applicable law.',
          },
          changesToTerms: {
            title: 'Changes to Terms',
            description: 'We may modify these terms at any time.',
          },
        },
      },
    },
    translocoConfig: {
      availableLangs: ['en', 'pt', 'es'],
      defaultLang: 'en',
    },
    preloadLangs: true,
    ...options,
  });
}
