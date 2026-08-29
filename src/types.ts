export interface StoreInfo {
  name: string;
  nameHindi: string;
  tagline: string;
  rating: number;
  reviewCount: number;
  category: string;
  phone: string;
  phoneRaw: string;
  whatsappNumber: string;
  address: {
    shop: string;
    floor: string;
    building: string;
    wing: string;
    area: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
    plusCode: string;
  };
  timings: {
    openTime: string;
    closeTime: string;
    days: string;
    isOpenNow: boolean;
  };
  features: string[];
}

export type OccasionType = 'All' | 'Wedding & Groom' | 'Sangeet & Haldi' | 'Reception & Party' | 'Festive & Puja';

export type CategoryType = 'All' | 'Groom Sherwanis' | 'Indo-Western' | 'Kurta & Nehru Jacket' | 'Jodhpuri & Bandhgala' | 'Tuxedos & Blazers' | 'Royal Accessories';

export interface ProductItem {
  id: string;
  title: string;
  category: CategoryType;
  occasion: OccasionType[];
  priceRange: string;
  description: string;
  fabric: string;
  workType: string;
  colors: string[];
  imageUrl: string;
  popular?: boolean;
  isNewArrival?: boolean;
  includes: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  avatar?: string;
  rating: number;
  date: string;
  occasion: string;
  comment: string;
  verified: boolean;
}

export interface AppointmentBooking {
  name: string;
  phone: string;
  email?: string;
  date: string;
  timeSlot: string;
  occasion: string;
  guestsCount: string;
  notes?: string;
}
