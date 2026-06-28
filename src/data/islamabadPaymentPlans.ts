import type { LahorePaymentPlan } from "@/data/lahorePaymentPlans";

export const islamabadResidentialPlans: LahorePaymentPlan[] = [
  {
    slug: "d-block-2-kanal",
    family: "D Block",
    section: "residential",
    category: "Residential",
    title: "D Block",
    planType: "Possession on 25% Down Payment",
    image: "/Block_D.png",
    description:
      "D Block offers spacious residential plots in ParkView City Islamabad, available on 25% down payment with the balance spread across easy quarterly installments.",
    tableColumns: ["Plot Size", "Total Price (PKR)", "Downpayment 25%", "Remaining Payment", "6 Quarterly Installments"],
    tableRows: [
      ["2 Kanal", "140,000,000", "35,000,000", "105,000,000", "17,500,000"],
    ],
    pdfUrl: null,
  },
  {
    slug: "e-block-possession",
    family: "E Block",
    section: "residential",
    category: "Residential",
    title: "E Block",
    planType: "Possession on 25% Down Payment",
    image: "/Block_E.png",
    description:
      "E Block presents 1 Kanal residential and terrace plots in ParkView City Islamabad with flexible quarterly installment options after a 25% down payment.",
    tableColumns: ["Plot Size", "Total Price (PKR)", "Downpayment 25%", "Remaining Payment", "6 Quarterly Installments"],
    tableRows: [
      ["1 Kanal", "70,000,000", "17,500,000", "52,500,000", "8,750,000"],
      ["1 Kanal Terrace", "80,000,000", "20,000,000", "60,000,000", "10,000,000"],
    ],
    pdfUrl: null,
  },
  {
    slug: "f-block-possession",
    family: "F Block",
    section: "residential",
    category: "Residential",
    title: "F Block",
    planType: "Possession on 25% Down Payment",
    image: "/Block_F.png",
    description:
      "F Block spans 5 Marla to 2 Kanal terrace plots in ParkView City Islamabad, with possession available on 25% down payment and 4 quarterly installments.",
    tableColumns: ["Plot Size", "Total Price (PKR)", "Downpayment 25%", "Remaining Payment", "4 Quarterly Installments"],
    tableRows: [
      ["5 Marla", "14,000,000", "3,500,000", "10,500,000", "2,625,000"],
      ["10 Marla", "27,000,000", "6,750,000", "20,250,000", "5,062,500"],
      ["1 Kanal", "70,000,000", "17,500,000", "52,500,000", "13,125,000"],
      ["1 Kanal Terrace", "80,000,000", "20,000,000", "60,000,000", "15,000,000"],
      ["2 Kanal Terrace", "160,000,000", "40,000,000", "120,000,000", "30,000,000"],
    ],
    pdfUrl: null,
  },
  {
    slug: "h-block-possession",
    family: "H Block",
    section: "residential",
    category: "Residential",
    title: "H Block",
    planType: "Possession on 25% Down Payment",
    image: "/Block_H.png",
    description:
      "H Block offers 5 Marla residential plots in ParkView City Islamabad with possession on 25% down payment, balance payable in 4 quarterly installments.",
    tableColumns: ["Plot Size", "Total Price (PKR)", "Downpayment 25%", "Remaining Payment", "4 Quarterly Installments"],
    tableRows: [
      ["5 Marla", "37,500,000", "9,375,000", "28,125,000", "7,031,250"],
    ],
    pdfUrl: null,
  },
  {
    slug: "j-block-privilege-possession",
    family: "J Block Privilege",
    section: "residential",
    category: "Residential",
    title: "J Block Privilege",
    planType: "Possession on 25% Down Payment",
    image: "/J_Block_Privilege.png",
    description:
      "J Block Privilege is a premium residential offering in ParkView City Islamabad, with possession on 25% down payment and the balance spread across 6 quarterly installments.",
    tableColumns: ["Plot Size", "Total Price (PKR)", "Downpayment 25%", "Remaining Payment", "6 Quarterly Installments"],
    tableRows: [
      ["5 Marla", "13,000,000", "3,250,000", "9,750,000", "1,625,000"],
      ["10 Marla", "23,000,000", "5,750,000", "17,250,000", "2,875,000"],
    ],
    pdfUrl: null,
  },
  {
    slug: "terrace-c-block-possession",
    family: "Terrace C Block",
    section: "residential",
    category: "Residential",
    title: "Terrace C Block",
    planType: "Possession on 25% Down Payment",
    image: "/Terrace_Block_C.png",
    description:
      "Terrace C Block offers 10 Marla to 1 Kanal terrace residential plots in ParkView City Islamabad, with possession on 25% down payment and 6 quarterly installments.",
    tableColumns: ["Plot Size", "Total Price (PKR)", "Downpayment 25%", "Remaining Payment", "6 Quarterly Installments"],
    tableRows: [
      ["10 Marla", "25,000,000", "6,250,000", "18,750,000", "3,125,000"],
      ["1 Kanal", "70,000,000", "17,500,000", "52,500,000", "8,750,000"],
      ["1 Kanal Terrace", "80,000,000", "20,000,000", "60,000,000", "10,000,000"],
    ],
    pdfUrl: null,
  },
  {
    slug: "overseas-premium-possession",
    family: "Overseas Premium",
    section: "residential",
    category: "Residential",
    title: "Overseas Premium",
    planType: "Possession on 25% Down Payment",
    image: "/OverseasPremium.png",
    description:
      "Overseas Premium plots are designed for overseas Pakistanis investing in ParkView City Islamabad, with possession on 25% down payment and 6 quarterly installments.",
    tableColumns: ["Plot Size", "Total Price (PKR)", "Downpayment 25%", "Remaining Payment", "6 Quarterly Installments"],
    tableRows: [
      ["5 Marla", "12,000,000", "3,000,000", "9,000,000", "1,500,000"],
      ["10 Marla", "23,000,000", "5,750,000", "17,250,000", "2,875,000"],
      ["1 Kanal", "40,000,000", "10,000,000", "30,000,000", "5,000,000"],
    ],
    pdfUrl: null,
  },
];

export const islamabadCommercialPlans: LahorePaymentPlan[] = [
  {
    slug: "the-walk-on-cash",
    family: "The Walk",
    section: "commercial",
    category: "Commercial",
    title: "The Walk",
    planType: "On Cash / Lump-Sum Payment",
    image: "/The_Walk_isb.png",
    description:
      "The Walk is ParkView City Islamabad's premium retail destination, available on a lump-sum cash payment basis.",
    tableColumns: ["Plot Size / Category", "Total Price (PKR)"],
    tableRows: [
      ["1 Kanal", "400,000,000"],
    ],
    pdfUrl: null,
  },
  {
    slug: "downtown-islamabad-possession",
    family: "Downtown Islamabad",
    section: "commercial",
    category: "Commercial",
    title: "Downtown Islamabad",
    planType: "Possession on 25% Down Payment",
    image: "/Downtown_Islamabad.png",
    description:
      "Downtown Islamabad offers commercial plots across B, C, A (lake-facing) and D categories, with possession on 25% down payment and 6 quarterly installments.",
    tableColumns: ["Plot Size / Category", "Total Price (PKR)", "Downpayment 25%", "Remaining Payment", "6 Quarterly Installments"],
    tableRows: [
      ["6 Marla (B-Com)", "120,000,000", "30,000,000", "90,000,000", "15,000,000"],
      ["6 Marla (C-Com)", "120,000,000", "30,000,000", "90,000,000", "15,000,000"],
      ["8 Marla (A-Com, Lake Facing)", "300,000,000", "75,000,000", "225,000,000", "37,500,000"],
      ["8 Marla (D-Com)", "187,500,000", "46,875,000", "140,625,000", "23,437,500"],
    ],
    pdfUrl: null,
  },
  {
    slug: "overseas-commercial-possession",
    family: "Overseas Commercial",
    section: "commercial",
    category: "Commercial",
    title: "Overseas Commercial",
    planType: "Possession on 25% Down Payment",
    image: "/Overseas_commercial_isb.png",
    description:
      "Overseas Commercial plots are reserved for overseas Pakistanis, with possession on 25% down payment and 6 quarterly installments. A 10% discount applies on full cash payment.",
    tableColumns: ["Plot Size", "Total Price (PKR)", "Downpayment 25%", "Remaining Payment", "6 Quarterly Installments"],
    tableRows: [
      ["5 Marla", "50,000,000", "12,500,000", "37,500,000", "6,250,000"],
    ],
    notes: ["10% discount offer available on full cash payment."],
    pdfUrl: null,
  },
];

export const islamabadPaymentPlans: LahorePaymentPlan[] = [
  ...islamabadResidentialPlans,
  ...islamabadCommercialPlans,
];

export function getIslamabadPaymentPlanBySlug(slug: string): LahorePaymentPlan | undefined {
  return islamabadPaymentPlans.find(plan => plan.slug === slug);
}
