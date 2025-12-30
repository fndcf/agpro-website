export interface SiteMapLink {
  labelKey: string;
  route: string;
  fragment?: string;
  descriptionKey?: string;
}

export interface SiteMapSection {
  titleKey: string;
  links: SiteMapLink[];
}

export const SITE_STRUCTURE: SiteMapSection[] = [
  {
    titleKey: 'sitemap.mainPages.title',
    links: [
      {
        labelKey: 'sitemap.mainPages.homepage.label',
        route: '/',
        descriptionKey: 'sitemap.mainPages.homepage.description',
      },
      {
        labelKey: 'sitemap.productsServices.buildings.label',
        route: '/',
        fragment: 'buildings',
        descriptionKey: 'sitemap.productsServices.buildings.description',
      },
      {
        labelKey: 'sitemap.productsServices.equipments.label',
        route: '/',
        fragment: 'equipments',
        descriptionKey: 'sitemap.productsServices.equipments.description',
      },
      {
        labelKey: 'sitemap.productsServices.grainStorage.label',
        route: '/',
        fragment: 'grain-storage',
        descriptionKey: 'sitemap.productsServices.grainStorage.description',
      },
      {
        labelKey: 'sitemap.productsServices.feedTransportation.label',
        route: '/',
        fragment: 'feed-transport',
        descriptionKey: 'sitemap.productsServices.feedTransportation.description',
      },
      {
        labelKey: 'sitemap.productsServices.ventilation.label',
        route: '/',
        fragment: 'ventilation',
        descriptionKey: 'sitemap.productsServices.ventilation.description',
      },
      {
        labelKey: 'sitemap.productsServices.confinement.label',
        route: '/',
        fragment: 'confinement',
        descriptionKey: 'sitemap.productsServices.confinement.description',
      },
      {
        labelKey: 'sitemap.productsServices.flooring.label',
        route: '/',
        fragment: 'flooring',
        descriptionKey: 'sitemap.productsServices.flooring.description',
      },
      {
        labelKey: 'sitemap.productsServices.blueprints.label',
        route: '/',
        fragment: 'blueprints',
        descriptionKey: 'sitemap.productsServices.blueprints.description',
      },
      {
        labelKey: 'sitemap.mainPages.mission.label',
        route: '/mission',
        descriptionKey: 'sitemap.mainPages.mission.description',
      },
      // {
      //   labelKey: 'sitemap.mainPages.projects.label',
      //   route: '/projects',
      //   descriptionKey: 'sitemap.mainPages.projects.description',
      // },
      {
        labelKey: 'sitemap.mainPages.contact.label',
        route: '/contact',
        descriptionKey: 'sitemap.mainPages.contact.description',
      },
    ],
  },
  // {
  //   titleKey: 'sitemap.projectCategories.title',
  //   links: [
  //     {
  //       labelKey: 'sitemap.projectCategories.allProjects.label',
  //       route: '/projects',
  //       descriptionKey: 'sitemap.projectCategories.allProjects.description',
  //     },
  //     {
  //       labelKey: 'sitemap.projectCategories.swineProjects.label',
  //       route: '/projects',
  //       descriptionKey: 'sitemap.projectCategories.swineProjects.description',
  //     },
  //     {
  //       labelKey: 'sitemap.projectCategories.poultryProjects.label',
  //       route: '/projects',
  //       descriptionKey: 'sitemap.projectCategories.poultryProjects.description',
  //     },
  //     {
  //       labelKey: 'sitemap.projectCategories.grainProjects.label',
  //       route: '/projects',
  //       descriptionKey: 'sitemap.projectCategories.grainProjects.description',
  //     },
  //     {
  //       labelKey: 'sitemap.projectCategories.integratedSolutions.label',
  //       route: '/projects',
  //       descriptionKey: 'sitemap.projectCategories.integratedSolutions.description',
  //     },
  //   ],
  // },
  {
    titleKey: 'sitemap.legalInfo.title',
    links: [
      {
        labelKey: 'sitemap.legalInfo.privacyPolicy.label',
        route: '/privacy-policy',
        descriptionKey: 'sitemap.legalInfo.privacyPolicy.description',
      },
      {
        labelKey: 'sitemap.legalInfo.termsOfService.label',
        route: '/terms-of-service',
        descriptionKey: 'sitemap.legalInfo.termsOfService.description',
      },
      {
        labelKey: 'sitemap.legalInfo.sitemap.label',
        route: '/sitemap',
        descriptionKey: 'sitemap.legalInfo.sitemap.description',
      },
    ],
  },
  {
    titleKey: 'sitemap.utilityPages.title',
    links: [
      {
        labelKey: 'sitemap.utilityPages.underConstruction.label',
        route: '/under-construction',
        descriptionKey: 'sitemap.utilityPages.underConstruction.description',
      },
    ],
  },
];
