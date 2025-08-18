export interface CarouselImage {
  src: string;
  alt: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image?: string;
  images?: CarouselImage[]; // Array de imagens para carrossel
  category: 'swine' | 'poultry' | 'grain' | 'equipment' | 'buildings';
}

export interface Stat {
  number: string;
  label: string;
  description?: string;
}

export interface TabItem {
  id: string;
  label: string;
  href: string;
  active: boolean;
}

export interface ContactForm {
  fullName: string;
  company?: string;
  email: string;
  phone?: string;
  timeline?: string;
  location?: string;
  description: string;
  source?: string;
}