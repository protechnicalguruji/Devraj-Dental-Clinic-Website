import { Speciality, Service, Feature, Review, ClinicConfig } from "./types";

// ==========================================
// CENTRALIZED CLINIC CONFIGURATION
// ==========================================
export const CLINIC_CONFIG: ClinicConfig = {
  name: "Devraj Dental Clinic",
  address: {
    line1: "2/36, New Colony",
    line2: "Birla Nagar",
    city: "Gwalior",
    state: "Madhya Pradesh",
    pinCode: "474004",
    full: "2/36, New Colony, Birla Nagar, Gwalior, Madhya Pradesh 474004"
  },
  phone: "+91 94257 25301", // Highly accessible Indian mobile placeholder/real phone format
  email: "info@devrajdentalclinic.com",
  whatsappNumber: "919425725301", // International format without spaces, '+' or dashes for WhatsApp API linking
  businessHours: [
    {
      days: "Monday - Saturday",
      timings: ["09:30 AM - 01:30 PM", "05:00 PM - 08:30 PM"]
    },
    {
      days: "Sunday",
      timings: ["10:30 AM - 01:30 PM (By Appointment Only)"]
    }
  ],
  googleMapsLink: "https://maps.app.goo.gl/VZT3NRFrYnudrvD8A",
  // Standard Google Maps Embed src for Devraj Dental Clinic, Birla Nagar, Gwalior
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=Devraj%20Dental%20Clinic%20New%20Colony%20Birla%20Nagar%20Gwalior&t=&z=16&ie=UTF8&iwloc=&output=embed",
  googleReviewsLink: "https://share.google/yt0HwzNJGuNfoYMFr"
};

// ==========================================
// SPECIALITIES (10 requested items)
// ==========================================
export const CLINIC_SPECIALITIES: Speciality[] = [
  {
    id: "gen-dentistry",
    title: "General Dentistry",
    description: "Preventative dental care, routine exams, and simple extractions for optimal oral health.",
    iconName: "Stethoscope"
  },
  {
    id: "cleaning",
    title: "Tooth Cleaning",
    description: "Gentle professional scaling and polishing to remove plaque, tartar, and surface stains.",
    iconName: "Sparkles"
  },
  {
    id: "filling",
    title: "Tooth Filling",
    description: "Precise dental restorations using high-grade, durable, biocompatible composite materials.",
    iconName: "ShieldAlert"
  },
  {
    id: "rct",
    title: "Root Canal Treatment",
    description: "Painless, modern therapy to cure deep tooth infections and preserve your natural teeth.",
    iconName: "HeartPulse"
  },
  {
    id: "extraction",
    title: "Tooth Extraction",
    description: "Safe, swift, and highly comfortable tooth removal services for compromised teeth.",
    iconName: "Scissors"
  },
  {
    id: "crowns-bridges",
    title: "Dental Crowns & Bridges",
    description: "Premium custom crowns and bridges to restore your natural bite and dental aesthetic.",
    iconName: "Crown"
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    description: "Artistic smile contouring, premium dental veneers, and aesthetic tooth restorations.",
    iconName: "Smile"
  },
  {
    id: "whitening",
    title: "Teeth Whitening",
    description: "Advanced brightening treatments to safely remove deep stains and restore tooth enamel.",
    iconName: "Sun"
  },
  {
    id: "pediatric",
    title: "Pediatric Dental Care",
    description: "Warm, compassionate, and highly gentle pediatric dentistry tailored for children.",
    iconName: "Baby"
  },
  {
    id: "preventive",
    title: "Preventive Dental Checkups",
    description: "Proactive dental screenings and cleanings to prevent issues before they occur.",
    iconName: "CalendarDays"
  }
];

// ==========================================
// SERVICES (6 requested items inside a card grid)
// ==========================================
export const CLINIC_SERVICES: Service[] = [
  {
    id: "consultation",
    title: "Dental Consultation",
    description: "Personalized expert diagnosis and comprehensive treatment mapping.",
    iconName: "UserRoundCheck",
    badge: "Expert Doctor"
  },
  {
    id: "digital-diag",
    title: "Digital Diagnosis",
    description: "High-precision digital oral imaging with minimal radiation.",
    iconName: "Cpu",
    badge: "Advanced Tech"
  },
  {
    id: "pain-free",
    title: "Pain-Free Treatment",
    description: "Gentle micro-needling and state-of-the-art anesthesia techniques.",
    iconName: "Smile",
    badge: "Comfort First"
  },
  {
    id: "smile-imp",
    title: "Smile Improvement",
    description: "Custom aesthetic evaluations to shape your ideal, confident smile.",
    iconName: "Sparkles",
    badge: "Aesthetic"
  },
  {
    id: "hygiene-guide",
    title: "Oral Hygiene Guidance",
    description: "One-on-one expert brush tutoring and daily oral habits advice.",
    iconName: "BookOpen",
    badge: "Preventative"
  },
  {
    id: "emergency",
    title: "Emergency Dental Care",
    description: "Instant pain relief and trauma support for unexpected dental crises.",
    iconName: "Activity",
    badge: "Fast Relief"
  }
];

// ==========================================
// WHY CHOOSE US (4 requested cards)
// ==========================================
export const CLINIC_FEATURES: Feature[] = [
  {
    id: "exp-care",
    title: "Experienced Care",
    description: "Highly trained dental surgeons with years of clinical expertise.",
    iconName: "Award"
  },
  {
    id: "mod-equip",
    title: "Modern Equipment",
    description: "Cutting-edge diagnosis tools and top-tier clinical sanitation.",
    iconName: "Zap"
  },
  {
    id: "patient-friendly",
    title: "Patient Friendly",
    description: "Comfort-focused environment where your peace of mind is prioritized.",
    iconName: "Heart"
  },
  {
    id: "affordable-treatment",
    title: "Affordable Treatments",
    description: "World-class, premium dental healthcare with transparent pricing.",
    iconName: "IndianRupee"
  }
];

// ==========================================
// DUMMY REVIEWS BASED ON REALISTIC GOOGLE REVIEWS (Trust-building)
// ==========================================
export const CLINIC_REVIEWS: Review[] = [
  {
    id: "r1",
    name: "Rohan Sharma",
    rating: 5,
    date: "2 weeks ago",
    comment: "Excellent experience at Devraj Dental Clinic! I underwent a root canal treatment here and it was completely painless. Dr. Devraj and staff are very skilled, warm, and explanations are super clear. Highly recommended dental clinic in Gwalior!",
    initials: "RS"
  },
  {
    id: "r2",
    name: "Priya Kushwah",
    rating: 5,
    date: "1 month ago",
    comment: "I went for tooth cleaning and whitening. The results are amazing! The clinic is extremely hygienic and sanitized, and they use very high tech equipment. Rates are very affordable compared to other dental clinics.",
    initials: "PK"
  },
  {
    id: "r3",
    name: "Dr. Alok Verma",
    rating: 5,
    date: "2 months ago",
    comment: "Highly professional service. They take their time to diagnose and explain the root cause. Had my tooth extraction done here, very swift and clean process. Post-operative follow-up was also great.",
    initials: "AV"
  }
];
