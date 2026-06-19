/* ─────────────────────────────────────────────────────────────────
   ParkView City — Project / city data
   Single source of truth for the Explore Projects page and cards.
   To add a new city or activate Islamabad: edit this file only.
   ───────────────────────────────────────────────────────────────── */

export interface ProjectData {
  id: string;
  name: string;
  city: string;
  eyebrow: string;
  description: string;
  route: string;
  paymentPlansRoute: string;
  image: string;
  logo: string;
  /** "available" enables all links; "coming-soon" shows badge and disables route actions */
  status: "available" | "coming-soon";
}

export const projects: ProjectData[] = [
  {
    id: "lahore",
    name: "ParkView City Lahore",
    city: "Lahore",
    eyebrow: "A Place to Call Home",
    description:
      "A thoughtfully planned community offering residential and commercial opportunities, modern infrastructure, green spaces, security, education, recreation, and convenient city access.",
    route: "/lahore",
    paymentPlansRoute: "/lahore/payment-plans",
    image: "/ProjectLahore.png",
    logo: "/PVLahore.png",
    status: "available",
  },
  {
    id: "islamabad",
    name: "ParkView City Islamabad",
    city: "Islamabad",
    eyebrow: "Nature Meets Modern Living",
    description:
      "A scenic capital-city community designed around premium residential living, natural surroundings, modern amenities, investment potential, and a secure family-focused lifestyle.",
    route: "/islamabad",
    paymentPlansRoute: "/islamabad/payment-plans",
    image: "/ProjectIslamabad.png",
    logo: "/PVIsb.png",
    status: "coming-soon",
  },
];
