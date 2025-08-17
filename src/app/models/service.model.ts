// 📁 src/app/models/service.model.ts
export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  image?: string;
  features?: string[];
  category: 'swine' | 'poultry' | 'grain' | 'equipment' | 'buildings';
}

export interface Stat {
  number: string;
  label: string;
  description?: string;
  icon?: string;
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