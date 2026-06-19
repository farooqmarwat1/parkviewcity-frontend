export type AmenityIcon =
  | "car"
  | "zap"
  | "trees"
  | "shield"
  | "school"
  | "map"
  | "building"
  | "landmark"
  | "store"
  | "users";

export interface AmenitySummary {
  id: string;
  category: string;
  title: string;
  shortDescription: string;
  icon: AmenityIcon;
}

export interface FeaturedAmenity {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  benefits: string[];
  image: string;
  imageAlt: string;
}

export interface SupportingAmenity {
  id: string;
  category: string;
  title: string;
  description: string;
  icon: AmenityIcon;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export const amenitiesHeroImage = "/hero video image.webp";
export const amenitiesCtaImage = "/VirtualTourSection.webp";

export const officialMainAmenities: AmenitySummary[] = [
  {
    id: "easy-access",
    category: "Connectivity",
    title: "Easy Access",
    shortDescription:
      "Convenient connectivity to important roads, destinations, education, shopping, healthcare, and entertainment across Lahore.",
    icon: "car",
  },
  {
    id: "underground-electricity",
    category: "Infrastructure",
    title: "Underground Electricity",
    shortDescription:
      "Modern underground utility infrastructure supports safer surroundings, cleaner streetscapes, and an organized community environment.",
    icon: "zap",
  },
  {
    id: "parks",
    category: "Green Spaces",
    title: "Multiple Parks",
    shortDescription:
      "Landscaped parks and open spaces provide residents with places to walk, relax, play, gather, and enjoy outdoor life.",
    icon: "trees",
  },
  {
    id: "security",
    category: "Safety",
    title: "24/7 Security",
    shortDescription:
      "Controlled access, trained personnel, and community monitoring support a secure gated residential environment.",
    icon: "shield",
  },
  {
    id: "national-school",
    category: "Education",
    title: "The National School",
    shortDescription:
      "Educational facilities within the community help families access a modern learning environment close to home.",
    icon: "school",
  },
  {
    id: "parkview-zoo",
    category: "Recreation",
    title: "ParkView Zoo",
    shortDescription:
      "A distinctive family attraction offering residents and visitors opportunities for recreation, exploration, and learning.",
    icon: "map",
  },
];

export const featuredAmenities: FeaturedAmenity[] = [
  {
    id: "easy-access-feature",
    eyebrow: "Connectivity",
    title: "Easy Access to the City",
    description:
      "ParkView City Lahore is positioned to offer convenient access from key roads and important areas of Lahore, helping residents stay connected to work, education, shopping, healthcare, and entertainment destinations.",
    benefits: [
      "Convenient road connectivity",
      "Access to major destinations",
      "Connected residential community",
    ],
    image: "/ProjectLahore.png",
    imageAlt: "ParkView City Lahore access and community view",
  },
  {
    id: "underground-electricity-feature",
    eyebrow: "Infrastructure",
    title: "Safe and Reliable Underground Electricity",
    description:
      "The community uses underground electricity infrastructure to support cleaner streetscapes, safer surroundings, and a more organized residential environment.",
    benefits: [
      "Cleaner visual environment",
      "Protected utility network",
      "Modern community infrastructure",
    ],
    image: "/Tulip-Overseas-Block-HERO.webp",
    imageAlt: "Modern infrastructure at ParkView City Lahore",
  },
  {
    id: "parks-feature",
    eyebrow: "Green Spaces",
    title: "Parks for Community Life",
    description:
      "Landscaped parks and open spaces are planned throughout ParkView City Lahore to provide residents with places to relax, walk, play, gather, and enjoy time outdoors.",
    benefits: [
      "Landscaped green areas",
      "Family-friendly spaces",
      "Walking and recreation",
    ],
    image: "/A Place to call home.webp",
    imageAlt: "Green community landscape at ParkView City Lahore",
  },
  {
    id: "security-feature",
    eyebrow: "Safety",
    title: "A Secure Gated Community",
    description:
      "ParkView City Lahore maintains a security-focused environment through controlled access, trained security personnel, and monitoring across key community areas.",
    benefits: [
      "Gated access",
      "Trained security personnel",
      "Community monitoring",
    ],
    image: "/Crystal Block hero.webp",
    imageAlt: "Secure residential community entrance at ParkView City Lahore",
  },
  {
    id: "school-feature",
    eyebrow: "Education",
    title: "Education Within the Community",
    description:
      "The National School provides educational opportunities close to home, helping families access learning facilities within the ParkView City Lahore community.",
    benefits: [
      "Accessible education",
      "Modern learning environment",
      "Convenient for residents",
    ],
    image: "/JADE Extension hero.webp",
    imageAlt: "Community facility building at ParkView City Lahore",
  },
  {
    id: "zoo-feature",
    eyebrow: "Recreation",
    title: "A Unique Family Attraction",
    description:
      "ParkView Zoo adds a distinctive recreational experience for residents and visitors, offering families a place to explore, learn, and spend time together.",
    benefits: [
      "Family recreation",
      "Educational experience",
      "Community attraction",
    ],
    image: "/VirtualTourSection.webp",
    imageAlt: "Recreational landscape at ParkView City Lahore",
  },
];

export const supportingAmenities: SupportingAmenity[] = [
  {
    id: "wide-roads",
    category: "Infrastructure",
    title: "Wide Roads",
    description: "Well-planned internal roads support comfortable movement throughout the community.",
    icon: "car",
  },
  {
    id: "mosque",
    category: "Community",
    title: "Mosque",
    description: "Accessible worship facilities support the everyday needs of residents.",
    icon: "landmark",
  },
  {
    id: "complete-utilities",
    category: "Infrastructure",
    title: "Complete Utilities",
    description: "Planned utility services support modern residential and commercial living.",
    icon: "zap",
  },
  {
    id: "gated-community",
    category: "Safety",
    title: "Gated Community",
    description: "Controlled community access contributes to privacy, organization, and security.",
    icon: "shield",
  },
  {
    id: "commercial-areas",
    category: "Convenience",
    title: "Commercial Areas",
    description: "Nearby commercial spaces provide access to everyday shopping and services.",
    icon: "store",
  },
  {
    id: "family-play-areas",
    category: "Recreation",
    title: "Family and Play Areas",
    description: "Family-oriented spaces create opportunities for play, relaxation, and social interaction.",
    icon: "users",
  },
];

// Temporary gallery images. Replace these paths when final Lahore amenities photography is available.
export const amenitiesGallery: GalleryImage[] = [
  {
    src: "/hero video image.webp",
    alt: "Aerial view of ParkView City Lahore",
  },
  {
    src: "/A Place to call home.webp",
    alt: "Residential landscape at ParkView City Lahore",
  },
  {
    src: "/VirtualTourSection.webp",
    alt: "ParkView City Lahore community view",
  },
  {
    src: "/Tulip-Overseas-Block-HERO.webp",
    alt: "Tulip Overseas Block at ParkView City Lahore",
  },
  {
    src: "/Crystal Block hero.webp",
    alt: "Crystal Block at ParkView City Lahore",
  },
  {
    src: "/JADE Extension hero.webp",
    alt: "JADE Extension at ParkView City Lahore",
  },
  {
    src: "/Rose Market hero.webp",
    alt: "Rose Market at ParkView City Lahore",
  },
];
