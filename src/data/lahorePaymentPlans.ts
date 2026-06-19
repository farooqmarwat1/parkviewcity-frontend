export interface PaymentPlan {
  id: string;
  city: string;
  family: string;
  category: "Residential" | "Commercial";
  title: string;
  details: string;
  thumbnail: string | null;
  pdfUrl: string | null;
  status: "available" | "coming-soon";
}

export const lahoreResidentialPlans: PaymentPlan[] = [
  {
    id: "tulip-extension-on-cash",
    city: "lahore",
    family: "Tulip Blocks",
    category: "Residential",
    title: "Tulip Extension — On Cash",
    details: "5 Marla, 10 Marla, 1 Kanal | Ready for Possession",
    thumbnail: null,
    pdfUrl: null,
    status: "coming-soon",
  },
  {
    id: "tulip-overseas-on-cash",
    city: "lahore",
    family: "Tulip Blocks",
    category: "Residential",
    title: "Tulip Overseas Block — On Cash / Ready for Possession",
    details: "5 Marla, 10 Marla, 1 Kanal",
    thumbnail: null,
    pdfUrl: null,
    status: "coming-soon",
  },
  {
    id: "tulip-overseas-key-25",
    city: "lahore",
    family: "Tulip Blocks",
    category: "Residential",
    title: "Tulip Overseas — KEY-25 Deal",
    details: "Possession on 25% Down Payment | 5 Marla & 10 Marla",
    thumbnail: null,
    pdfUrl: null,
    status: "coming-soon",
  },
  {
    id: "broadway-residential-key-25",
    city: "lahore",
    family: "Tulip Blocks",
    category: "Residential",
    title: "Broadway Residential — KEY-25 Deal",
    details: "10 Marla | Possession on 25% Down Payment | 6 Quarterly Installments",
    thumbnail: null,
    pdfUrl: null,
    status: "coming-soon",
  },
  {
    id: "crystal-block-on-cash",
    city: "lahore",
    family: "Crystal Block",
    category: "Residential",
    title: "Crystal Block — On Cash",
    details: "5 Marla, 10 Marla, 1 Kanal | Pre-launch offer available",
    thumbnail: null,
    pdfUrl: null,
    status: "coming-soon",
  },
  {
    id: "rose-block-on-cash",
    city: "lahore",
    family: "Rose Block",
    category: "Residential",
    title: "Rose Block — On Cash",
    details: "5 Marla | Near The Walk & ParkView Zoo",
    thumbnail: null,
    pdfUrl: null,
    status: "coming-soon",
  },
  {
    id: "jade-extension-payment-plan",
    city: "lahore",
    family: "JADE Extension",
    category: "Residential",
    title: "JADE Extension Payment Plan",
    details: "Ready for Possession | Payment plan details to be provided",
    thumbnail: null,
    pdfUrl: null,
    status: "coming-soon",
  },
];

export const lahoreCommercialPlans: PaymentPlan[] = [
  {
    id: "rose-market-on-cash",
    city: "lahore",
    family: "Rose Commercial",
    category: "Commercial",
    title: "Rose Market — On Cash",
    details: "First Floor | Limited Inventory (Ground: Sold Out)",
    thumbnail: null,
    pdfUrl: null,
    status: "coming-soon",
  },
  {
    id: "rose-commercial-on-cash-installments",
    city: "lahore",
    family: "Rose Commercial",
    category: "Commercial",
    title: "Rose Commercial — On Cash / Installments",
    details: "4 Marla (On-Ground) & 8 Marla (Main Boulevard)",
    thumbnail: null,
    pdfUrl: null,
    status: "coming-soon",
  },
];
