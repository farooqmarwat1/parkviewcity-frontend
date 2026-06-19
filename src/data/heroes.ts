export type HeroVariant = "eyebrow" | "logo" | "statement" | "signature";

export interface Hero {
  id: string;
  variant: HeroVariant;
  image?: string;
  video?: string;
  tint?: "green" | "dark" | "warm";
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  titleUppercase?: boolean;
  titleFont?: "display" | "termina";
  contentBottom?: string;
  subtitle?: string;
  logoMonogram?: string;
  logoName?: string;
  cursive?: string;
  byline?: string;
  badgeTop?: string;
  badgeScript?: string;
  sideLabel?: string;
  primaryCta?: string;
  primaryCtaVariant?: "outline" | "solid" | "stats";
  secondaryCta?: string;
  search?: boolean;
}

export const heroes: Hero[] = [
  {
    id: "paradise",
    variant: "eyebrow",
    video: "/Fountain-Animation.webm",
    tint: "dark",
    title: "Where Lifestyle Meets Luxury",
    titleFont: "termina",
    contentBottom: "pb-[6vh]",
    primaryCta: "Explore",
    primaryCtaVariant: "stats",
  },
  {
    id: "golf-estate",
    variant: "eyebrow",
    video: "/second%20section.mp4",
    tint: "dark",
    title: "A Modern Vision for Urban Living",
    titleFont: "termina",
    contentBottom: "pb-[6vh]",
    primaryCta: "Explore",
    primaryCtaVariant: "stats",
  },
  {
    id: "downtown",
    variant: "eyebrow",
    video: "/third%20section.mp4",
    tint: "green",
    title: "",
    search: true,
  },
];
