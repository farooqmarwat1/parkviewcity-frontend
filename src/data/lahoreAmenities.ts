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

export const amenitiesHeroImage = "/Lahore-Ameneties_Hero.webp";
export const amenitiesCtaImage = "/VirtualTourSection.webp";

export const officialMainAmenities: AmenitySummary[] = [
  {
    id: "easy-access",
    category: "Connectivity",
    title: "Easy Access",
    shortDescription:
      "Convenient access from Multan Road, Thokar Niaz Baig, and Lahore Ring Road keeps residents connected to key city routes.",
    icon: "car",
  },
  {
    id: "underground-electricity",
    category: "Infrastructure",
    title: "Underground Electricity",
    shortDescription:
      "Underground electricity supports cleaner streetscapes, safer surroundings, and a more organized community environment.",
    icon: "zap",
  },
  {
    id: "parks",
    category: "Green Spaces",
    title: "Parks",
    shortDescription:
      "Beautifully planned parks, green belts, and landscaped open spaces support outdoor family life within the community.",
    icon: "trees",
  },
  {
    id: "security",
    category: "Safety",
    title: "Security",
    shortDescription:
      "A secure gated environment with trained personnel, monitored access, and regular patrols supports family safety.",
    icon: "shield",
  },
  {
    id: "national-school",
    category: "Education",
    title: "School",
    shortDescription:
      "The National School brings quality education and modern learning facilities closer to residents.",
    icon: "school",
  },
  {
    id: "parkview-zoo",
    category: "Recreation",
    title: "Zoo",
    shortDescription:
      "A family-friendly zoo experience adds a unique recreational attraction for children, families, and visitors.",
    icon: "map",
  },
];

export const featuredAmenities: FeaturedAmenity[] = [
  {
    id: "easy-access-feature",
    eyebrow: "Connectivity",
    title: "Easy Access",
    description:
      "ParkView City Lahore offers convenient access from major city routes, including Multan Road, Thokar Niaz Baig, and the Lahore Ring Road. Its location helps residents reach key areas of Lahore with ease while staying connected to nearby communities.",
    benefits: [
      "Easy access from Multan Road",
      "Close to Thokar Niaz Baig",
      "Connected to Lahore Ring Road",
    ],
    image: "/Easy-Access.webp",
    imageAlt: "Easy access routes near ParkView City Lahore",
  },
  {
    id: "underground-electricity-feature",
    eyebrow: "Infrastructure",
    title: "Underground Electricity",
    description:
      "ParkView City Lahore supports a cleaner and more organized living environment with underground electricity infrastructure. This helps preserve scenic views while providing a safer and more reliable utility system for the community.",
    benefits: [
      "Underground electrical network",
      "Cleaner streetscapes",
      "Reliable community infrastructure",
    ],
    image: "/Underground-Electricity.webp",
    imageAlt: "Underground electricity infrastructure at ParkView City Lahore",
  },
  {
    id: "parks-feature",
    eyebrow: "Green Spaces",
    title: "Parks",
    description:
      "Beautifully planned parks, green belts, and landscaped open spaces give residents places to walk, relax, play, and enjoy outdoor life within the community.",
    benefits: [
      "Landscaped green areas",
      "Family-friendly parks",
      "Outdoor recreation spaces",
    ],
    image: "/Parks.webp",
    imageAlt: "Landscaped park spaces at ParkView City Lahore",
  },
  {
    id: "security-feature",
    eyebrow: "Safety",
    title: "Security",
    description:
      "ParkView City Lahore provides a secure gated environment with trained security personnel, monitored access, and regular patrols to support a safe lifestyle for residents and families.",
    benefits: [
      "24/7 security",
      "Trained security personnel",
      "Controlled community access",
    ],
    image: "/Security.webp",
    imageAlt: "Security facilities at ParkView City Lahore",
  },
  {
    id: "school-feature",
    eyebrow: "Education",
    title: "School",
    description:
      "The National School within ParkView City Lahore brings quality education closer to residents, offering modern learning facilities for students from early years to higher academic levels.",
    benefits: [
      "Nearby education facility",
      "Modern learning environment",
      "Community-focused schooling",
    ],
    image: "/School.webp",
    imageAlt: "School facility at ParkView City Lahore",
  },
  {
    id: "zoo-feature",
    eyebrow: "Recreation",
    title: "Zoo",
    description:
      "ParkView City Lahore includes a family-friendly zoo experience, adding a unique recreational attraction for children, families, and visitors within the community.",
    benefits: [
      "Family attraction",
      "Recreational experience",
      "Community lifestyle feature",
    ],
    image: "/zoo.webp",
    imageAlt: "Zoo attraction at ParkView City Lahore",
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
