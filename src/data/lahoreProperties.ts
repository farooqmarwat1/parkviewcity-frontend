import type { PropertyDetailData } from "@/components/lahore/PropertyDetailOverlay";

export const TULIP_DETAIL: PropertyDetailData = {
  id: "tulip-overseas-block",
  titleId: "tulip-detail-title",
  title: "Tulip Overseas Block",
  heroImage: "/Tulip-Overseas-Block-HERO.webp",
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
  gallery: [
    { src: "/Tulip-Overseas-Block%20(1).webp", alt: "Tulip Overseas Block residential area" },
    { src: "/Tulip-Overseas-Block%20(2).webp", alt: "Tulip Overseas Block green landscape" },
    { src: "/Tulip-Overseas-Block%20(3).webp", alt: "Aerial view of Tulip Overseas Block amenities" },
    { src: "/Tulip-Overseas-Block%20(4).webp", alt: "Modern house design in Tulip Overseas Block" },
    { src: "/Tulip-Overseas-Block%20(5).webp", alt: "Luxury lawn and outdoor area" },
    { src: "/Tulip-Overseas-Block%20(6).webp", alt: "Contemporary residential elevation" },
  ],
  galleryId: "tulip-gallery",
  galleryAriaLabel: "Enlarge Tulip Overseas Block gallery image",
  paymentPlanRoute: "/lahore/payment-plans#tulip-blocks-plans",
  closeAriaLabel: "Close Tulip Overseas Block details",
};

// ── Temporary gallery images for JADE Extension ─────────────────────────────
// Client has not yet supplied dedicated JADE Extension gallery photos.
// Replace the six src paths below with the final JADE Extension assets when
// provided — no other file needs to change.
const JADE_TEMP_GALLERY = [
  { src: "/Tulip-Overseas-Block%20(1).webp", alt: "Temporary JADE Extension gallery image 1" },
  { src: "/Tulip-Overseas-Block%20(2).webp", alt: "Temporary JADE Extension gallery image 2" },
  { src: "/Tulip-Overseas-Block%20(4).webp", alt: "Temporary JADE Extension gallery image 3" },
  { src: "/Tulip-Overseas-Block%20(5).webp", alt: "Temporary JADE Extension gallery image 4" },
  { src: "/A%20Place%20to%20call%20home.webp", alt: "Temporary JADE Extension gallery image 5" },
  { src: "/VirtualTourSection.webp",          alt: "Temporary JADE Extension gallery image 6" },
];

export const JADE_DETAIL: PropertyDetailData = {
  id: "jade-extension",
  titleId: "jade-detail-title",
  title: "JADE Extension",
  heroImage: "/JADE%20Extension%20hero.webp",
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
  gallery: JADE_TEMP_GALLERY,
  galleryId: "jade-gallery",
  galleryAriaLabel: "Enlarge JADE Extension gallery image",
  paymentPlanRoute: "/lahore/payment-plans#jade-extension-plans",
  closeAriaLabel: "Close JADE Extension details",
};

export const CRYSTAL_DETAIL: PropertyDetailData = {
  id: "crystal-block",
  titleId: "crystal-detail-title",
  title: "Crystal Block",
  heroImage: "/Crystal%20Block%20hero.webp",
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
  gallery: [
    { src: "/Crystal%20Block%20Gallery%20(1).webp", alt: "Crystal Block gallery image 1" },
    { src: "/Crystal%20Block%20Gallery%20(2).webp", alt: "Crystal Block gallery image 2" },
    { src: "/Crystal%20Block%20Gallery%20(3).webp", alt: "Crystal Block gallery image 3" },
    { src: "/Crystal%20Block%20Gallery%20(4).webp", alt: "Crystal Block gallery image 4" },
    { src: "/Crystal%20Block%20Gallery%20(5).webp", alt: "Crystal Block gallery image 5" },
    { src: "/Crystal%20Block%20Gallery%20(6).webp", alt: "Crystal Block gallery image 6" },
  ],
  galleryId: "crystal-gallery",
  galleryAriaLabel: "Enlarge Crystal Block gallery image",
  paymentPlanRoute: "/lahore/payment-plans#crystal-block-plans",
  closeAriaLabel: "Close Crystal Block details",
};

// Temporary Rose Market gallery images. Replace these with final Rose Market
// commercial photography when dedicated assets are supplied.
const ROSE_MARKET_TEMP_GALLERY = [
  { src: "/Rose%20Market%20hero.webp", alt: "Rose Market commercial hero view" },
  { src: "/4.png", alt: "Temporary Rose Market commercial gallery image 2" },
  { src: "/5.png", alt: "Temporary Rose Market commercial gallery image 3" },
  { src: "/6.png", alt: "Temporary Rose Market commercial gallery image 4" },
  { src: "/ProjectLahore.png", alt: "Temporary Rose Market Lahore community image 5" },
  { src: "/VirtualTourSection.webp", alt: "Temporary Rose Market commercial gallery image 6" },
];

export const ROSE_MARKET_DETAIL: PropertyDetailData = {
  id: "rose-market",
  titleId: "rose-market-detail-title",
  title: "Rose Market",
  heroImage: "/Rose%20Market%20hero.webp",
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
  gallery: ROSE_MARKET_TEMP_GALLERY,
  galleryId: "rose-market-gallery",
  galleryAriaLabel: "Enlarge Rose Market gallery image",
  paymentPlanRoute: "/lahore/payment-plans#rose-commercial-plans",
  closeAriaLabel: "Close Rose Market details",
};
