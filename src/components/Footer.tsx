import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const columns = [
  {
    heading: "Development",
    links: ["Overview", "Master Plan", "Blocks & Plots", "Payment Plans", "Download Brochure"],
  },
  {
    heading: "Lifestyle",
    links: ["Amenities", "Golf Course", "Parks & Recreation", "Schools", "Hospitals"],
  },
  {
    heading: "Company",
    links: ["About Us", "Vision & Mission", "Careers", "News & Updates", "Press Kit"],
  },
  {
    heading: "Legal",
    links: ["Terms & Conditions", "Privacy Policy", "NOC Certificate", "CDA Approval"],
  },
];

const socials = [
  { Icon: Instagram, href: "#" },
  { Icon: Facebook,  href: "#" },
  { Icon: Youtube,   href: "#" },
  { Icon: Twitter,   href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a2340] text-white">
      <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 sm:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">

          {/* Brand column */}
          <div className="flex flex-col gap-6">
            <img src="/pvc-white.png" alt="Park View City" className="h-16 w-auto object-contain object-left" />
            <p className="font-roboto text-[13px] leading-relaxed text-white/50">
              Islamabad's most prestigious CDA-approved housing development — where nature and luxury coexist.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ Icon, href }, i) => (
                <a key={i} href={href}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all duration-200 hover:border-pvc-gold hover:text-pvc-gold cursor-pointer">
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <p className="mb-5 font-roboto text-[13px] uppercase tracking-[0.28em] text-pvc-gold">{col.heading}</p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#"
                      className="font-roboto text-[13px] text-white/55 transition-colors duration-200 hover:text-white cursor-pointer">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 px-6 py-5 font-roboto text-[13px] text-white/35 sm:flex-row sm:px-10">
          <p>© {new Date().getFullYear()} Park View City. All rights reserved. CDA Approved Housing Scheme.</p>
          <p>Developed by Vision Group Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
