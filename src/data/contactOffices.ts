/* ─────────────────────────────────────────────────────────────────
   ParkView City — Official office contact records
   Single source of truth used by ContactPage, Footer, and Map.
   ───────────────────────────────────────────────────────────────── */

export interface OfficeRecord {
  id: string;
  region: "pakistan" | "international";
  city: string;
  country: string;
  label: string;
  address?: string;
  mobileDisplay?: string;
  mobileHref?: string;
  landlineDisplay?: string;
  landlineHref?: string;
  phoneDisplay?: string;
  phoneHref?: string;
  complaintsDisplay?: string;
  complaintsHref?: string;
  email?: string;
  emailHref?: string;
  mapQuery?: string;
}

export const officeRecords: OfficeRecord[] = [
  {
    id: "islamabad-corporate-office",
    region: "pakistan",
    city: "Islamabad",
    country: "Pakistan",
    label: "Islamabad Corporate Office",
    address: "First Floor, Zakia Aziz Plaza, 23-East AK Fazal-e-Haq Road, Block B, G-6/3, Blue Area, Islamabad",
    landlineDisplay: "051 111 249 249",
    landlineHref: "tel:+9251111249249",
    email: "islamabad@parkviewcity.com.pk",
    emailHref: "mailto:islamabad@parkviewcity.com.pk",
    mapQuery: "Zakia Aziz Plaza, 23-East AK Fazal-e-Haq Road, G-6/3, Blue Area, Islamabad",
  },
  {
    id: "islamabad-site-office",
    region: "pakistan",
    city: "Islamabad",
    country: "Pakistan",
    label: "Islamabad Site Office",
    address: "Malot Road, Islamabad",
    mobileDisplay: "0300 064 9649",
    mobileHref: "tel:+923000649649",
    landlineDisplay: "051 111 249 249",
    landlineHref: "tel:+9251111249249",
    email: "islamabad@parkviewcity.com.pk",
    emailHref: "mailto:islamabad@parkviewcity.com.pk",
    mapQuery: "Malot Road, Islamabad",
  },
  {
    id: "lahore-corporate-office",
    region: "pakistan",
    city: "Lahore",
    country: "Pakistan",
    label: "Lahore Corporate Office",
    address: "3-KM from Thokar Niaz Baig, Multan Road, Lahore",
    mobileDisplay: "0301 124 9249",
    mobileHref: "tel:+923011249249",
    landlineDisplay: "042 111 249 249",
    landlineHref: "tel:+9242111249249",
    complaintsDisplay: "0312 1111 782",
    complaintsHref: "tel:+923121111782",
    email: "lahore@parkviewcity.com.pk",
    emailHref: "mailto:lahore@parkviewcity.com.pk",
    mapQuery: "3-KM from Thokar Niaz Baig, Multan Road, Lahore",
  },
  {
    id: "islamabad-customer-care",
    region: "pakistan",
    city: "Islamabad",
    country: "Pakistan",
    label: "Customer Care",
    phoneDisplay: "+92 300 5011404",
    phoneHref: "tel:+923005011404",
    landlineDisplay: "051 111 249 249 Ext: 0",
    landlineHref: "tel:+9251111249249",
    email: "customerservice.isb@parkview.pk",
    emailHref: "mailto:customerservice.isb@parkview.pk",
  },
  {
    id: "karachi-office",
    region: "pakistan",
    city: "Karachi",
    country: "Pakistan",
    label: "Karachi Office",
    address: "Building 152-C, Lane 2, Main Khayaban-e-Shaheen, Al-Murtaza Commercial, DHA Phase 8, Karachi",
    phoneDisplay: "021 111 249 249",
    phoneHref: "tel:+9221111249249",
    mapQuery: "Building 152-C, Lane 2, Main Khayaban-e-Shaheen, DHA Phase 8, Karachi",
  },
  {
    id: "peshawar-office",
    region: "pakistan",
    city: "Peshawar",
    country: "Pakistan",
    label: "Peshawar Office",
    address: "Ground Floor, near Honda Showroom, Tehkal Bala, University Road, Peshawar",
    phoneDisplay: "091 3064008",
    phoneHref: "tel:+92913064008",
    mapQuery: "Tehkal Bala, University Road, Peshawar",
  },
  {
    id: "dubai-office",
    region: "international",
    city: "Dubai",
    country: "UAE",
    label: "UAE Office — Dubai",
    address: "Office Number 308, 3rd Floor, B11 (Building 11), Bay Square, Business Bay, Dubai",
    phoneDisplay: "+971 4 570 9634",
    phoneHref: "tel:+97145709634",
    mapQuery: "Bay Square Building 11, Business Bay, Dubai",
  },
  {
    id: "london-office",
    region: "international",
    city: "London",
    country: "United Kingdom",
    label: "UK Office — London",
    address: "377 Eastern Avenue, Gants Hill, Ilford, Essex, IG2 6LW",
    phoneDisplay: "+44 20 3062 6353",
    phoneHref: "tel:+442030626353",
    email: "info@parkviewcityuk.com",
    emailHref: "mailto:info@parkviewcityuk.com",
    mapQuery: "377 Eastern Avenue, Gants Hill, Ilford, Essex, IG2 6LW",
  },
];

/* IDs shown as primary cards in the left column of the contact section */
export const PRIMARY_OFFICE_IDS = [
  "islamabad-corporate-office",
  "islamabad-site-office",
  "lahore-corporate-office",
  "islamabad-customer-care",
];

/* IDs available in the Find Us map selector */
export const MAP_OFFICE_IDS = [
  "islamabad-corporate-office",
  "islamabad-site-office",
  "lahore-corporate-office",
  "karachi-office",
  "peshawar-office",
  "dubai-office",
  "london-office",
];

export function getOffice(id: string): OfficeRecord | undefined {
  return officeRecords.find(o => o.id === id);
}
