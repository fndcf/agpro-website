export interface Project {
  id: string;
  titleKey: string;
  location: string;
  year: string;
  category: string;
  descriptionKey: string;
  image: string;
  imageAlt: string;
  featuresKey: string;
}

export interface ProjectCategory {
  id: string;
  labelKey: string;
}

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  { id: 'all', labelKey: 'projects.tabs.allProjects' },
  { id: 'swine', labelKey: 'projects.tabs.swine' },
  { id: 'poultry', labelKey: 'projects.tabs.poultry' },
  { id: 'grain', labelKey: 'projects.tabs.grainStorage' },
  { id: 'integrated', labelKey: 'projects.tabs.integratedSolutions' },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'swine-facility-brazil',
    titleKey: 'projects.projectsData.swineProject.title',
    location: 'São Paulo, Brazil',
    year: '2023',
    category: 'Swine',
    descriptionKey: 'projects.projectsData.swineProject.description',
    image: 'assets/images/projects/swine-facility-brazil.jpg',
    imageAlt: 'Swine Facility in São Paulo, Brazil',
    featuresKey: 'projects.projectsData.swineProject.features',
  },
  {
    id: 'poultry-complex-mexico',
    titleKey: 'projects.projectsData.poultryProject.title',
    location: 'Jalisco, Mexico',
    year: '2023',
    category: 'Poultry',
    descriptionKey: 'projects.projectsData.poultryProject.description',
    image: 'assets/images/projects/poultry-complex-mexico.jpg',
    imageAlt: 'Poultry Complex in Jalisco, Mexico',
    featuresKey: 'projects.projectsData.poultryProject.features',
  },
  {
    id: 'grain-storage-argentina',
    titleKey: 'projects.projectsData.grainProject.title',
    location: 'Buenos Aires, Argentina',
    year: '2022',
    category: 'Grain Storage',
    descriptionKey: 'projects.projectsData.grainProject.description',
    image: 'assets/images/projects/grain-storage-argentina.jpg',
    imageAlt: 'Grain Storage in Buenos Aires, Argentina',
    featuresKey: 'projects.projectsData.grainProject.features',
  },
  {
    id: 'integrated-farm-usa',
    titleKey: 'projects.projectsData.integratedProject.title',
    location: 'Illinois, USA',
    year: '2022',
    category: 'Integrated',
    descriptionKey: 'projects.projectsData.integratedProject.description',
    image: 'assets/images/projects/integrated-farm-usa.jpg',
    imageAlt: 'Integrated Farm in Illinois, USA',
    featuresKey: 'projects.projectsData.integratedProject.features',
  },
];
