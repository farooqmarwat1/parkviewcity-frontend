import { Facebook, Linkedin, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { getOffice } from "@/data/contactOffices";

const quickLinks = [
  { label: "About Us",                href: "/about"    },
  { label: "Projects & Communities",  href: "/projects" },
  { label: "Downloads",               href: "#"         },
  { label: "Contact Us",              href: "/contact"  },
  { label: "Privacy Policy",          href: "#"         },
  { label: "Terms & Conditions",      href: "#"         },
];

const socials = [
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Youtube,  href: "#", label: "YouTube"  },
];

/* Pull official records from the single data source */
const isb  = getOffice("islamabad-corporate-office")!;
const lhr  = getOffice("lahore-corporate-office")!;
const uk   = getOffice("london-office")!;

export default function Footer() {
  return (
    <footer className="bg-pvc-navy text-white">

      {/* Logo + description */}
      <div className="mx-auto max-w-[1200px] px-6 pt-8 pb-5 sm:pt-10 sm:pb-6 sm:px-10 text-center">
        <img src="/whitelogo.png" alt="Parkview City" className="mx-auto h-12 sm:h-16 w-auto object-contain" />
        <p className="mt-2 sm:mt-3 font-roboto text-[13px] sm:text-[16px] font-normal leading-[22px] sm:leading-[26px] tracking-[0.9px] text-center text-white/65 mx-auto w-full max-w-[767px]">
          Parkview City continues to set new benchmarks in secure, scenic, and modern real estate development in Pakistan.
        </p>
      </div>

      {/* Three columns */}
      <div className="mx-auto max-w-[1200px] px-6 pb-6 sm:pb-8 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:gap-10 md:grid-cols-3">

          {/* Contact Us */}
          <div>
            <p className="mb-6 font-roboto text-[10px] uppercase tracking-[0.28em] text-white/55">Contact Us</p>
            <div className="flex flex-col gap-4">

              {/* Phones */}
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-white/50" strokeWidth={1.5} />
                <div className="flex flex-col gap-1 font-roboto text-[13px] font-normal leading-[20px] tracking-[-0.15px] text-white/55">
                  <a href={isb.landlineHref} className="hover:text-white transition-colors duration-200">
                    Islamabad: {isb.landlineDisplay}
                  </a>
                  <a href={lhr.landlineHref} className="hover:text-white transition-colors duration-200">
                    Lahore: {lhr.landlineDisplay}
                  </a>
                  <a href={uk.phoneHref} className="hover:text-white transition-colors duration-200">
                    UK: {uk.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Emails */}
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white/50" strokeWidth={1.5} />
                <div className="flex flex-col gap-1 font-roboto text-[13px] font-normal leading-[20px] tracking-[-0.15px] text-white/55">
                  <a href={isb.emailHref} className="hover:text-white transition-colors duration-200 break-all">
                    {isb.email}
                  </a>
                  <a href={lhr.emailHref} className="hover:text-white transition-colors duration-200 break-all">
                    {lhr.email}
                  </a>
                </div>
              </div>

              {/* Islamabad address */}
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/50" strokeWidth={1.5} />
                <address className="not-italic font-roboto text-[13px] font-normal leading-[20px] tracking-[-0.15px] text-white/55">
                  {isb.address}
                </address>
              </div>

            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start md:items-center md:text-center">
            <p className="mb-6 font-roboto text-[10px] uppercase tracking-[0.28em] text-white/55">Quick Links</p>
            <ul className="flex flex-col gap-1.5">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href}
                    className="font-roboto text-[14px] font-normal leading-[20px] tracking-[-0.15px] text-white/55 transition-colors duration-200 hover:text-white cursor-pointer">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe to Newsletter */}
          <div className="md:pl-16">
            <p className="mb-6 font-roboto text-[10px] uppercase tracking-[0.28em] text-white/55">Subscribe to Newsletter</p>
            <div className="border-b border-white/30 pb-2">
              <input
                type="email"
                placeholder="Enter Your Email"
                autoComplete="email"
                className="w-full bg-transparent font-roboto text-[13px] text-white placeholder:text-white/50 outline-none"
              />
            </div>
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white/55 transition-all duration-200 hover:border-pvc-gold hover:text-pvc-gold cursor-pointer">
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1200px] px-6 py-5 text-center sm:px-10">
          <p className="font-roboto text-[10px] font-normal leading-[15px] tracking-[0.62px] uppercase text-center text-white/35">
            © Copyright {new Date().getFullYear()} Parkview City. All Rights Reserved.
          </p>
        </div>
      </div>

    </footer>
  );
}
