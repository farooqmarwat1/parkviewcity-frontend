import type { GalleryImage, PropertyDetailData } from "@/components/lahore/PropertyDetailOverlay";

export interface LahorePropertyCard {
  id: string;
  image: string;
  badge: string;
  meta: string;
  title: string;
  desc: string;
}

export const lahoreResidentialProperties: LahorePropertyCard[] = [
  {
    id: "tulip-overseas-block",
    image: "/Tulip%20Overseas.webp",
    badge: "KEY-25 Deal",
    meta: "Possession on 25% DP - 5 Marla, 10 Marla, 1 Kanal",
    title: "Tulip Overseas Block",
    desc: "A premium residential destination designed for overseas Pakistanis, offering flexible payment plans with possession on just 25% down payment.",
  },
  {
    id: "crystal-block",
    image: "/Crystal%20Block.webp",
    badge: "Pre-Launch Offer",
    meta: "On Cash - 5 Marla, 10 Marla, 1 Kanal",
    title: "Crystal Block",
    desc: "An exclusive new block offering luxury living at a pre-launch price. Secure your plot before the official launch.",
  },
  {
    id: "jade-extension",
    image: "/Jade%20Ext.webp",
    badge: "Ready for Possession",
    meta: "On Cash - 5 Marla",
    title: "JADE Extension",
    desc: "Plots ready for possession. JADE Extension offers immediate access to the full community with all amenities operational.",
  },
  {
    id: "executive-block",
    image: "/executive.webp",
    badge: "Residential",
    meta: "Executive Block, ParkView City Lahore",
    title: "Executive Block",
    desc: "A refined residential address planned for comfortable family living, secure surroundings, landscaped streets, and everyday community convenience.",
  },
  {
    id: "imperial-block",
    image: "/imperial.webp",
    badge: "Residential",
    meta: "Imperial Block, ParkView City Lahore",
    title: "Imperial Block",
    desc: "A premium residential block offering planned infrastructure, peaceful streets, and strong access to ParkView City Lahore's lifestyle amenities.",
  },
];

export const lahoreCommercialProperties: LahorePropertyCard[] = [
  {
    id: "tulip-commercial",
    image: "/Tulip%20Commercial.webp",
    badge: "Commercial",
    meta: "Tulip Commercial, ParkView City Lahore",
    title: "Tulip Commercial",
    desc: "A planned retail and business address positioned close to residential movement, designed for investor visibility and community access.",
  },
  {
    id: "broadway-commercial",
    image: "/Brodway%20Commercial.webp",
    badge: "Premium Phase",
    meta: "Commercial Hub, ParkView City Lahore",
    title: "Broadway Commercial",
    desc: "A thriving business destination with wide boulevards and a high-density shopping layout designed to attract strong local footfall.",
  },
  {
    id: "the-walk-ii",
    image: "/The%20Walk%20II.webp",
    badge: "Retail Avenue",
    meta: "The Walk II, ParkView City Lahore",
    title: "The Walk II",
    desc: "An extension of the walkable commercial experience, planned around premium retail frontage, dining activity, and outdoor movement.",
  },
  {
    id: "the-walk",
    image: "/the-walk-1 (2).webp",
    badge: "Retail Block",
    meta: "The Walk, ParkView City Lahore",
    title: "The Walk",
    desc: "Ultra-luxury retail walk inspired by modern architecture with spacious outdoor promenades and mixed-use retail spaces.",
  },
  {
    id: "rose-market",
    image: "/Rose-Market.webp",
    badge: "Limited Inventory",
    meta: "Rose Market, ParkView City Lahore",
    title: "Rose Market",
    desc: "A boutique commercial development with limited inventory, first-floor availability, and special pricing opportunities.",
  },
  {
    id: "commercial-plots",
    image: "/commerical-plots.webp",
    badge: "Commercial Plots",
    meta: "Multi-size Commercial Inventory",
    title: "Commercial Plots",
    desc: "Flexible commercial plot options for businesses and investors seeking long-term presence inside ParkView City Lahore.",
  },
];

const lahorePropertyCards = [
  ...lahoreResidentialProperties,
  ...lahoreCommercialProperties,
];

function getCardImage(id: string) {
  return lahorePropertyCards.find(property => property.id === id)?.image;
}

function withCardImageFirst(id: string, fallbackAlt: string, gallery: GalleryImage[]): GalleryImage[] {
  const cardImage = getCardImage(id);
  const images = [
    ...(cardImage ? [{ src: cardImage, alt: fallbackAlt }] : []),
    ...gallery,
  ];

  const seen = new Set<string>();
  return images.filter(image => {
    if (seen.has(image.src)) return false;
    seen.add(image.src);
    return true;
  });
}

const lahoreSpecificGalleries: Record<string, GalleryImage[]> = {
  "tulip-overseas-block": [
    { src: "/tulip-overseas.webp", alt: "Tulip Overseas Block property gallery image" },
  ],
  "rose-market": [
    { src: "/rose-market-1.webp", alt: "Rose Market commercial collage image" },
  ],
  "tulip-commercial": [
    { src: "/Tulip-Commercial2.webp", alt: "Tulip Commercial collage image" },
  ],
  "broadway-commercial": [
    { src: "/Brodway-Commercial (2).webp", alt: "Broadway Commercial collage image" },
  ],
  "the-walk-ii": [
    { src: "/the-walk-2 (1).webp", alt: "The Walk II gallery image" },
  ],
  "the-walk": [
    { src: "/the-walk-1 (1).webp", alt: "The Walk gallery image" },
  ],
  "commercial-plots": [
    { src: "/commercial-plots2.webp", alt: "Commercial Plots collage image" },
  ],
};

function residentialGallery(id: string, title: string): GalleryImage[] {
  return withCardImageFirst(id, `${title} card image`, [
    { src: "/lahore-residentails.webp", alt: `${title} residential gallery image` },
  ]);
}

export const TULIP_DETAIL: PropertyDetailData = {
  id: "tulip-overseas-block",
  titleId: "tulip-detail-title",
  title: "Tulip Overseas Block",
  heroImage: getCardImage("tulip-overseas-block") || "/Tulip-Overseas-Block-HERO.webp",
  heroAlt: "Tulip Overseas Block aerial hero view",
  badges: ["KEY-25 Deal", "Residential"],
  location: "Tulip Overseas Block, ParkView City Lahore",
  description:
    "Purpose-built for overseas Pakistanis, the Tulip Overseas Block offers ParkView City's landmark KEY-25 deal — get possession with just 25% down payment and pay the rest in easy quarterly installments.",
  features: [
    "Possession on 25% Down",
    "6 Easy Quarterly Installments",
    "Near Broadway Commercial",
    "Overseas Block Exclusives",
    "Gated Community",
    "24/7 Security",
  ],
  gallery: residentialGallery("tulip-overseas-block", "Tulip Overseas Block"),
  galleryId: "tulip-gallery",
  galleryAriaLabel: "Enlarge Tulip Overseas Block gallery image",
  paymentPlanRoute: "/lahore/payment-plans#tulip-blocks-plans",
  closeAriaLabel: "Close Tulip Overseas Block details",
};

export const JADE_DETAIL: PropertyDetailData = {
  id: "jade-extension",
  titleId: "jade-detail-title",
  title: "JADE Extension",
  heroImage: getCardImage("jade-extension") || "/JADE%20Extension%20hero.webp",
  heroAlt: "JADE Extension at ParkView City Lahore",
  badges: ["Ready for Possession", "Residential"],
  location: "JADE Extension, ParkView City Lahore",
  description:
    "JADE Extension offers premium on-ground plots in one of ParkView City Lahore's most peaceful residential settings, providing immediate possession alongside parks, a mosque, complete security, and convenient access to essential amenities.",
  features: [
    "Ready for Possession",
    "On-Ground Plots",
    "Serene Setting",
    "Parks",
    "Mosque",
    "Security",
  ],
  gallery: residentialGallery("jade-extension", "JADE Extension"),
  galleryId: "jade-gallery",
  galleryAriaLabel: "Enlarge JADE Extension gallery image",
  paymentPlanRoute: "/lahore/payment-plans#jade-extension-plans",
  closeAriaLabel: "Close JADE Extension details",
};

export const CRYSTAL_DETAIL: PropertyDetailData = {
  id: "crystal-block",
  titleId: "crystal-detail-title",
  title: "Crystal Block",
  heroImage: getCardImage("crystal-block") || "/Crystal%20Block%20hero.webp",
  heroAlt: "Crystal Block at ParkView City Lahore",
  badges: ["Pre-Launch Offer", "Residential"],
  location: "Crystal Block, ParkView City Lahore",
  description:
    "Crystal Block presents an exciting pre-launch investment opportunity with on-ground residential plots, attractive pricing, modern infrastructure, wide roads, parks, and complete utilities.",
  features: [
    "Pre-Launch Pricing",
    "On-Ground Plots",
    "Ready for Development",
    "Wide Roads",
    "Parks",
    "Full Utilities",
  ],
  gallery: residentialGallery("crystal-block", "Crystal Block"),
  galleryId: "crystal-gallery",
  galleryAriaLabel: "Enlarge Crystal Block gallery image",
  paymentPlanRoute: "/lahore/payment-plans#crystal-block-plans",
  closeAriaLabel: "Close Crystal Block details",
};

export const ROSE_MARKET_DETAIL: PropertyDetailData = {
  id: "rose-market",
  titleId: "rose-market-detail-title",
  title: "Rose Market",
  heroImage: getCardImage("rose-market") || "/Rose-Market.webp",
  heroAlt: "Rose Market at ParkView City Lahore",
  badges: ["Limited Inventory", "Commercial"],
  location: "Rose Market, ParkView City Lahore",
  description:
    "Rose Market is a boutique commercial development in ParkView City Lahore, offering limited commercial inventory in a high-demand location with special pricing opportunities.",
  features: [
    "Boutique Market",
    "Limited Inventory",
    "Ground Floor: Sold Out",
    "First Floor Available",
    "Special Pricing",
    "High Demand Location",
  ],
  gallery: lahoreSpecificGalleries["rose-market"],
  galleryId: "rose-market-gallery",
  galleryAriaLabel: "Enlarge Rose Market gallery image",
  paymentPlanRoute: "/lahore/payment-plans#rose-market",
  closeAriaLabel: "Close Rose Market details",
};

export const EXECUTIVE_BLOCK_DETAIL: PropertyDetailData = {
  id: "executive-block",
  titleId: "executive-block-detail-title",
  title: "Executive Block",
  heroImage: getCardImage("executive-block") || "/executive.webp",
  heroAlt: "Executive Block at ParkView City Lahore",
  badges: ["Residential", "Family Living"],
  location: "Executive Block, ParkView City Lahore",
  description:
    "Executive Block is designed as a polished residential address inside ParkView City Lahore, balancing secure community living with planned roads, landscaped surroundings, and convenient access to everyday amenities.",
  features: [
    "Residential Community",
    "Planned Infrastructure",
    "Family-Oriented Setting",
    "Landscaped Streets",
    "Gated Environment",
    "Easy Amenity Access",
  ],
  gallery: residentialGallery("executive-block", "Executive Block"),
  galleryId: "executive-block-gallery",
  galleryAriaLabel: "Enlarge Executive Block gallery image",
  paymentPlanRoute: "/lahore/payment-plans#executive-block-plans",
  closeAriaLabel: "Close Executive Block details",
};

export const IMPERIAL_BLOCK_DETAIL: PropertyDetailData = {
  id: "imperial-block",
  titleId: "imperial-block-detail-title",
  title: "Imperial Block",
  heroImage: getCardImage("imperial-block") || "/imperial.webp",
  heroAlt: "Imperial Block at ParkView City Lahore",
  badges: ["Residential", "Premium Block"],
  location: "Imperial Block, ParkView City Lahore",
  description:
    "Imperial Block offers a premium residential setting within ParkView City Lahore, shaped around modern infrastructure, calm streets, secure access, and a connected lifestyle for families and investors.",
  features: [
    "Premium Residential Block",
    "Modern Road Network",
    "Secure Community Access",
    "Peaceful Streetscape",
    "Lifestyle Amenities",
    "Long-Term Value",
  ],
  gallery: residentialGallery("imperial-block", "Imperial Block"),
  galleryId: "imperial-block-gallery",
  galleryAriaLabel: "Enlarge Imperial Block gallery image",
  paymentPlanRoute: "/lahore/payment-plans#imperial-block-plans",
  closeAriaLabel: "Close Imperial Block details",
};

function commercialDetail({
  id,
  title,
  badge,
  location,
  description,
  features,
  heroImage = "/LAHORE-PROJECT2.webp",
}: {
  id: string;
  title: string;
  badge: string;
  location: string;
  description: string;
  features: string[];
  heroImage?: string;
}): PropertyDetailData {
  const cardImage = getCardImage(id);
  const detailHeroImage = cardImage || heroImage;
  const badges = badge.toLowerCase().includes("commercial") ? [badge] : [badge, "Commercial"];

  return {
    id,
    titleId: `${id}-detail-title`,
    title,
    heroImage: detailHeroImage,
    heroAlt: `${title} at ParkView City Lahore`,
    badges,
    location,
    description,
    features,
    gallery: lahoreSpecificGalleries[id] ?? [],
    galleryId: `${id}-gallery`,
    galleryAriaLabel: `Enlarge ${title} gallery image`,
    paymentPlanRoute: `/lahore/payment-plans#${id}`,
    closeAriaLabel: `Close ${title} details`,
  };
}

export const TULIP_COMMERCIAL_DETAIL = commercialDetail({
  id: "tulip-commercial",
  title: "Tulip Commercial",
  badge: "Commercial",
  location: "Tulip Commercial, ParkView City Lahore",
  description:
    "Tulip Commercial is planned as a community-facing retail and business address, positioned near residential movement to support visibility, daily convenience, and long-term commercial value.",
  features: ["Retail Frontage", "Community Access", "Investor Focused", "High Visibility", "Flexible Commercial Use", "Gated Community"],
  heroImage: "/LAHORE-PROJECT2.webp",
});

export const BROADWAY_COMMERCIAL_DETAIL = commercialDetail({
  id: "broadway-commercial",
  title: "Broadway Commercial",
  badge: "Premium Phase",
  location: "Broadway Commercial, ParkView City Lahore",
  description:
    "Broadway Commercial brings wide boulevard planning, business visibility, and a destination-style commercial environment to ParkView City Lahore.",
  features: ["Wide Boulevards", "Premium Commercial Address", "Retail Visibility", "High Footfall Planning", "Modern Infrastructure", "Business-Friendly Layout"],
  heroImage: "/LAHORE-PROJECTS.webp",
});

export const THE_WALK_II_DETAIL = commercialDetail({
  id: "the-walk-ii",
  title: "The Walk II",
  badge: "Retail Avenue",
  location: "The Walk II, ParkView City Lahore",
  description:
    "The Walk II extends the walkable retail concept with premium storefront opportunities, outdoor movement, dining potential, and lifestyle-led commercial planning.",
  features: ["Walkable Retail", "Dining Potential", "Premium Storefronts", "Outdoor Promenade", "Modern Streetscape", "Commercial Lifestyle Zone"],
  heroImage: "/LAHORE-Last_Section.webp",
});

export const THE_WALK_DETAIL = commercialDetail({
  id: "the-walk",
  title: "The Walk",
  badge: "Retail Block",
  location: "The Walk, ParkView City Lahore",
  description:
    "The Walk is a modern retail destination designed around outdoor promenades, mixed-use commercial activity, and premium brand visibility.",
  features: ["Retail Promenade", "Mixed-Use Planning", "Premium Visibility", "Modern Architecture", "Outdoor Experience", "Brand-Friendly Frontage"],
  heroImage: "/LAHORE-first_Section.webp",
});

export const COMMERCIAL_PLOTS_DETAIL = commercialDetail({
  id: "commercial-plots",
  title: "Commercial Plots",
  badge: "Commercial Plots",
  location: "Commercial Plots, ParkView City Lahore",
  description:
    "Commercial Plots at ParkView City Lahore offer flexible opportunities for businesses and investors seeking a planned commercial presence inside a growing gated community.",
  features: ["Flexible Plot Options", "Planned Commercial Zones", "Investor Opportunity", "Community Access", "Modern Infrastructure", "Long-Term Value"],
  heroImage: "/commerical-plots.webp",
});
