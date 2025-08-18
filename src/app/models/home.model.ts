export interface HomeService {
  id: string;
  title: string;
  description: string;
  features?: string[];
  category: 'swine' | 'poultry' | 'grain';
}

