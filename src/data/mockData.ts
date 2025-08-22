import { faker } from '@faker-js/faker';
import { Property, City, Developer } from '../types';

export const cities: City[] = [
  {
    id: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&h=600&fit=crop',
    propertyCount: 1247,
    avgPricePerSqft: 35000,
    trendingLocalities: ['Bandra West', 'Andheri East', 'Powai', 'Thane', 'Worli', 'Juhu', 'South Mumbai'],
    description: 'The financial capital of India offers premium waterfront properties and luxury apartments.'
  },
  {
    id: 'delhi-ncr',
    name: 'Delhi-NCR',
    state: 'Delhi',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop',
    propertyCount: 956,
    avgPricePerSqft: 18000,
    trendingLocalities: ['Gurgaon Sector 54', 'Noida Sector 150', 'Dwarka', 'Greater Noida', 'Golf Course Road', 'Vasant Kunj'],
    description: 'The capital region with modern infrastructure and connectivity to major business hubs.'
  },
  {
    id: 'bengaluru',
    name: 'Bengaluru',
    state: 'Karnataka',
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&h=600&fit=crop',
    propertyCount: 823,
    avgPricePerSqft: 12000,
    trendingLocalities: ['Whitefield', 'Electronic City', 'Sarjapur', 'Indiranagar', 'Koramangala', 'HSR Layout'],
    description: "India's Silicon Valley with excellent climate and world-class IT infrastructure."
  },
  {
    id: 'pune',
    name: 'Pune',
    state: 'Maharashtra',
    image: 'https://iili.io/K9XZDLQ.jpg',
    propertyCount: 634,
    avgPricePerSqft: 9500,
    trendingLocalities: ['Kharadi', 'Baner', 'Wakad', 'Hinjewadi', 'Magarpatta', 'Koregaon Park'],
    description: 'The Oxford of the East with excellent educational institutions and pleasant weather.'
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    state: 'Telangana',
    image: 'https://iili.io/K9XrmjS.jpg',
    propertyCount: 445,
    avgPricePerSqft: 8500,
    trendingLocalities: ['Gachibowli', 'HITEC City', 'Kondapur', 'Madhapur', 'Kokapet', 'Jubilee Hills'],
    description: 'Cyberabad with booming IT sector and rich cultural heritage.'
  },
  {
    id: 'chennai',
    name: 'Chennai',
    state: 'Tamil Nadu',
    image: 'https://iili.io/K9XYNgR.webp',
    propertyCount: 387,
    avgPricePerSqft: 7800,
    trendingLocalities: ['OMR', 'ECR', 'Velachery', 'Tambaram', 'Anna Nagar', 'Adyar'],
    description: 'Gateway to South India with excellent connectivity and industrial growth.'
  },
  {
    id: 'kolkata',
    name: 'Kolkata',
    state: 'West Bengal',
    image: 'https://iili.io/K9Xkghg.jpg',
    propertyCount: 312,
    avgPricePerSqft: 6500,
    trendingLocalities: ['New Town', 'Salt Lake', 'Rajarhat', 'Ballygunge', 'Alipore', 'Jadavpur'],
    description: 'The cultural capital of India, known for its grand colonial architecture and artistic heritage.'
  },
  {
    id: 'ahmedabad',
    name: 'Ahmedabad',
    state: 'Gujarat',
    image: 'https://iili.io/K9XiMcg.webp',
    propertyCount: 289,
    avgPricePerSqft: 6000,
    trendingLocalities: ['SG Highway', 'Prahlad Nagar', 'Bopal', 'Chandkheda', 'Satellite', 'Thaltej'],
    description: 'A rapidly growing economic hub with a rich history and vibrant culture.'
  }
];

export const developers: Developer[] = [
  {
    id: 'dev1',
    name: 'Godrej Properties',
    logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop',
    description: 'Leading real estate developer with 25+ years of excellence',
    establishedYear: 1990,
    totalProjects: 78,
    rating: 4.5,
    projects: ['PROP-MUM-0001', 'PROP-DEL-0001']
  },
  {
    id: 'dev2', 
    name: 'DLF Limited',
    logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop',
    description: 'India\'s largest real estate company',
    establishedYear: 1963,
    totalProjects: 124,
    rating: 4.3,
    projects: ['PROP-DEL-0002']
  }
];

const generateProperty = (city: City, index: number): Property => {
  const bhkOptions = [1, 2, 3, 4, 5];
  const bhk = faker.helpers.arrayElement(bhkOptions);
  const carpetArea = faker.number.int({ min: 500, max: 3000 });
  const pricePerSqft = city.avgPricePerSqft + faker.number.int({ min: -5000, max: 10000 });
  const price = carpetArea * pricePerSqft;
  
  const propertyTypes = ['Apartment', 'Villa', 'Plot', 'Commercial'] as const;
  const badges = faker.helpers.arrayElements(['RERA Approved', 'Sea View', 'Corner Unit', 'Vastu Compliant', 'Premium Location', 'New Launch'], { min: 1, max: 3 });
  
  return {
    id: `PROP-${city.id.toUpperCase().substring(0, 3)}-${String(index).padStart(4, '0')}`,
    title: `${bhk} BHK ${faker.helpers.arrayElement(propertyTypes)} in ${faker.helpers.arrayElement(city.trendingLocalities)}`,
    city: city.name,
    locality: faker.helpers.arrayElement(city.trendingLocalities),
    type: faker.helpers.arrayElement(propertyTypes),
    bhk,
    price_in_inr: price,
    price_per_sqft: pricePerSqft,
    carpet_area_sqft: carpetArea,
    super_builtup_sqft: Math.round(carpetArea * 1.3),
    possession_status: faker.helpers.arrayElement(['Ready', 'Under Construction']),
    rera_id: `P${faker.string.alphanumeric(8).toUpperCase()}`,
    developer: faker.helpers.arrayElement(developers).name,
    amenities: faker.helpers.arrayElements([
      'Swimming Pool', 'Gym', 'Clubhouse', 'Children\'s Play Area', 'Security', 
      'Power Backup', 'Parking', 'Garden', 'Jogging Track', 'Community Hall',
      'Indoor Games', 'CCTV Surveillance', 'Elevator', 'Rain Water Harvesting'
    ], { min: 5, max: 10 }),
    images: [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop'
    ],
    location: {
      lat: faker.location.latitude({ min: 18.8, max: 19.3 }),
      lng: faker.location.longitude({ min: 72.7, max: 73.2 })
    },
    badges,
    emi_estimator: {
      rate: faker.number.float({ min: 7.5, max: 9.5, fractionDigits: 2 }),
      tenure_years: faker.helpers.arrayElement([15, 20, 25, 30])
    },
    description: `Premium ${bhk} BHK ${faker.helpers.arrayElement(propertyTypes).toLowerCase()} located in the heart of ${faker.helpers.arrayElement(city.trendingLocalities)}. This property offers excellent connectivity and modern amenities.`,
    highlights: [
      `${Math.round(faker.number.float({ min: 0.5, max: 5, fractionDigits: 1 }))} km from Metro Station`,
      `${Math.round(faker.number.float({ min: 1, max: 10, fractionDigits: 1 }))} km from IT Hub`,
      `${Math.round(faker.number.float({ min: 0.2, max: 2, fractionDigits: 1 }))} km from Shopping Mall`,
      'Top Schools nearby'
    ]
  };
};

// Generate properties for each city
export const properties: Property[] = cities.flatMap((city, cityIndex) => 
  Array.from({ length: 6 }, (_, index) => generateProperty(city, cityIndex * 6 + index + 1))
);

export const featuredProperties = properties.slice(0, 8);
