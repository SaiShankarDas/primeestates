export interface Property {
  id: string;
  title: string;
  city: string;
  locality: string;
  type: 'Apartment' | 'Villa' | 'Plot' | 'Commercial';
  bhk: number;
  price_in_inr: number;
  price_per_sqft: number;
  carpet_area_sqft: number;
  super_builtup_sqft: number;
  possession_status: 'Ready' | 'Under Construction';
  rera_id: string;
  developer: string;
  amenities: string[];
  images: string[];
  videos?: string[];
  floor_plans?: string[];
  location: {
    lat: number;
    lng: number;
  };
  documents?: string[];
  badges: string[];
  emi_estimator: {
    rate: number;
    tenure_years: number;
  };
  description?: string;
  highlights?: string[];
}

export interface City {
  id: string;
  name: string;
  state: string;
  image: string;
  propertyCount: number;
  avgPricePerSqft: number;
  trendingLocalities: string[];
  description: string;
}

export interface Filter {
  city?: string;
  locality?: string;
  type?: string[];
  bhk?: number[];
  priceRange?: [number, number];
  areaRange?: [number, number];
  reraApproved?: boolean;
  furnishing?: string;
  possessionStatus?: string;
  amenities?: string[];
  developer?: string;
}

export interface Developer {
  id: string;
  name: string;
  logo: string;
  description: string;
  establishedYear: number;
  totalProjects: number;
  rating: number;
  projects: string[];
}

export interface ChatMessage {
  id: number;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}
