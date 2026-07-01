export interface Speciality {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
  initials: string;
}

export interface ClinicConfig {
  name: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pinCode: string;
    full: string;
  };
  phone: string;
  email: string;
  whatsappNumber: string; // international format without spaces/plus, e.g., "919425112112"
  businessHours: {
    days: string;
    timings: string[];
  }[];
  googleMapsLink: string;
  googleMapsEmbedUrl: string;
  googleReviewsLink: string;
}
