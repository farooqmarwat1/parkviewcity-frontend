import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import {
  islamabadAmenitiesHeroImage,
  islamabadAmenitiesCtaImage,
  islamabadMainAmenities,
  islamabadFeaturedAmenities,
  islamabadSupportingAmenities,
  islamabadAmenitiesGallery,
} from "@/data/islamabadAmenities";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

function scrollToSection(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className={[
        "flex flex-col",
        align === "center" ? "mx-auto max-w-[760px] items-center text-center" : "max-w-[620px] items-start text-left",
      ].join(" ")}
    >
      <span className="muted-section-eyebrow font-roboto text-[10px] font-normal uppercase tracking-[0.32em]">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-termina text-[28px] font-normal uppercase leading-tight tracking-[0.06em] text-[#1D2D4E] sm:text-[40px]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 font-roboto text-[15px] font-light leading-[28px] text-[#58595B]">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default function IslamabadAmenitiesPage() {
  const navigate = useNavigate();
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const galleryLen = islamabadAmenitiesGallery.length;

  useEffect(() => {
    if (lightboxIdx === null) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape")      setLightboxIdx(null);
      if (e.key === "ArrowLeft")   setLightboxIdx(i => ((i ?? 0) - 1 + galleryLen) % galleryLen);
      if (e.key === "ArrowRight")  setLightboxIdx(i => ((i ?? 0) + 1) % galleryLen);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIdx, galleryLen]);

  return (
    <div className="overflow-x-hidden bg-white">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        id="amenities-hero"
        className="figma-hero flex min-h-screen w-full items-center justify-center px-6 text-center sm:px-10"
        style={{ minHeight: "100svh" }}
      >
        <img
          src={islamabadAmenitiesHeroImage}
          alt="ParkView City Islamabad aerial community view"
          className="absolute inset-0 h-full w-full object-cover object-center"
          draggable={false}
        />
        <div className="figma-hero-overlay" />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeOut }}
          className="figma-hero-content mx-auto flex max-w-[980px] flex-col items-center"
        >
          <span className="font-roboto text-[10px] font-light uppercase tracking-[0.34em] text-[#C4973A] sm:text-[11px]">
            Lifestyle & Convenience
          </span>

          <h1 className="interior-hero-title mt-4">
            Amenities of ParkView City Islamabad
          </h1>

          <p className="mx-auto mt-6 max-w-[760px] font-roboto text-[15px] font-light leading-[28px] text-white/76 sm:text-[17px]">
            Discover the infrastructure, green spaces, security, recreation, dining, and community
            conveniences designed to support modern living at ParkView City Islamabad.
          </p>

          <button
            type="button"
            onClick={() => scrollToSection("#amenities-overview")}
            className="mt-9 flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#C4973A] bg-white/10 px-7 font-roboto text-[11px] font-normal uppercase tracking-[0.18em] text-[#C4973A] backdrop-blur-sm transition-all duration-300 hover:bg-[#C4973A] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Explore Amenities
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </button>
        </motion.div>
      </section>

      {/* ── Overview intro ───────────────────────────────────────── */}
      <section
        id="amenities-overview"
        className="bg-white px-6 py-24 sm:px-10 sm:py-28 lg:px-20"
        style={{ scrollMarginTop: "90px" }}
      >
        <SectionHeading
          eyebrow="Everything Within Reach"
          title="Designed for Everyday Living"
          description="ParkView City Islamabad brings underground utilities, parks, security, a dancing fountain, commercial hub, dining destinations, and a grand mosque together within one thoughtfully planned capital community."
        />
      </section>

      {/* ── Main amenities grid ──────────────────────────────────── */}
      <section id="amenities-grid" className="bg-white px-6 py-20 sm:px-10 sm:py-24 lg:px-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeading
            eyebrow="Lifestyle Essentials"
            title="Community Amenities"
            description="From infrastructure and green spaces to security, recreation, and dining — every feature is planned around daily comfort in the capital."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {islamabadMainAmenities.map((amenity, index) => {
              return (
                <motion.article
                  key={amenity.id}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  transition={{ delay: (index % 3) * 0.06 }}
                  className="group flex h-full flex-col rounded-[16px] border border-[#1D2D4E]/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <span className="font-roboto text-[9px] font-normal uppercase tracking-[0.22em] text-[#C4973A]" style={{ letterSpacing: "0.9px" }}>
                    {amenity.category}
                  </span>
                  <h3 className="mt-2 font-roboto text-[20px] font-normal leading-snug text-[#1D2D4E]" style={{ letterSpacing: "0.9px" }}>
                    {amenity.title}
                  </h3>
                  <p className="mt-3 font-roboto text-[13px] font-light leading-[24px] text-[#58595B]" style={{ letterSpacing: "0.9px" }}>
                    {amenity.shortDescription}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Featured amenities (alternating) ────────────────────── */}
      <section id="featured-amenities">
        {islamabadFeaturedAmenities.map((feature, index) => {
          const imageFirst = index % 2 === 1;
          return (
            <section
              key={feature.id}
              className={[
                "px-6 py-20 sm:px-10 sm:py-28 lg:px-20",
                "bg-white",
              ].join(" ")}
            >
              <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={fadeUp}
                  className={imageFirst ? "lg:order-2" : ""}
                >
                  <span className="muted-section-eyebrow font-roboto text-[10px] font-normal uppercase tracking-[0.32em]">
                    {feature.eyebrow}
                  </span>
                  <h2 className="mt-4 font-termina text-[27px] font-normal uppercase leading-tight tracking-[0.05em] text-[#1D2D4E] sm:text-[38px]">
                    {feature.title}
                  </h2>
                  <p className="mt-6 font-roboto text-[15px] font-light leading-[28px] text-[#58595B]">
                    {feature.description}
                  </p>
                  <ul className="mt-7 flex flex-col gap-3">
                    {feature.benefits.map(benefit => (
                      <li key={benefit} className="flex items-start gap-3 font-roboto text-[13px] font-light leading-[22px] text-[#58595B]">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C4973A]/12 text-[#C4973A]">
                          <Check className="h-3.5 w-3.5" strokeWidth={1.8} />
                        </span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={fadeUp}
                  className={imageFirst ? "lg:order-1" : ""}
                >
                  <img
                    src={feature.image}
                    alt={feature.imageAlt}
                    className="h-[310px] w-full rounded-[20px] object-cover object-center shadow-md sm:h-[430px] lg:h-[520px]"
                    draggable={false}
                  />
                </motion.div>
              </div>
            </section>
          );
        })}
      </section>

      {/* ── Supporting amenities ─────────────────────────────────── */}
      <section id="additional-amenities" className="bg-white px-6 py-20 sm:px-10 sm:py-24 lg:px-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeading
            eyebrow="More Within the Community"
            title="More Within the Community"
            description="Supporting amenities bring added comfort, convenience, and daily utility to life at ParkView City Islamabad."
          />

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {islamabadSupportingAmenities.map(item => {
              return (
                <article key={item.id} className="flex flex-col rounded-[14px] border border-[#1D2D4E]/10 bg-white p-6 transition-all duration-300 hover:border-[#C4973A]/45 hover:shadow-sm">
                  <span className="font-roboto text-[8px] font-normal uppercase tracking-[0.9px] text-[#C4973A]">
                    {item.category}
                  </span>
                  <h3 className="mt-1 font-roboto text-[20px] font-normal leading-snug text-[#1D2D4E]" style={{ letterSpacing: "0.9px" }}>
                    {item.title}
                  </h3>
                  <p className="mt-2 font-roboto text-[13px] font-light leading-[23px] text-[#58595B]" style={{ letterSpacing: "0.9px" }}>
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Gallery ──────────────────────────────────────────────── */}
      <section id="amenities-gallery" className="bg-white px-6 py-20 sm:px-10 sm:py-28 lg:px-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:items-end">
            <SectionHeading
              eyebrow="Experience the Lifestyle"
              title="A Capital Community Designed to Be Enjoyed"
              description="Explore the landscapes, infrastructure, recreation, and community environments of ParkView City Islamabad."
              align="left"
            />
            <p className="font-roboto text-[13px] font-light leading-[24px] text-[#58595B] lg:max-w-[520px] lg:justify-self-end">
              These visuals represent the ParkView City asset library and will be updated with dedicated Islamabad photography when available.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-2.5 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[250px_250px_220px]">
            {islamabadAmenitiesGallery.map((image, index) => (
              <button
                key={image.src}
                type="button"
                aria-label={`Open gallery image ${index + 1}`}
                onClick={() => setLightboxIdx(index)}
                className={[
                  "group relative min-h-[240px] overflow-hidden rounded-[16px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C4973A]",
                  index === 0 ? "lg:col-span-2 lg:row-span-2" : "",
                  index === 1 || index === 2 ? "lg:col-span-2" : "",
                ].join(" ")}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  draggable={false}
                />
                <span className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/25" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section
        id="amenities-cta"
        className="relative flex min-h-[520px] items-center justify-center overflow-hidden px-6 py-24 text-center sm:px-10 lg:px-20"
      >
        <img
          src={islamabadAmenitiesCtaImage}
          alt="ParkView City Islamabad lifestyle and community view"
          className="absolute inset-0 h-full w-full object-cover object-center"
          draggable={false}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.60) 55%, rgba(0,0,0,0.82) 100%)" }} />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="relative z-10 mx-auto flex max-w-[760px] flex-col items-center"
        >
          <span className="font-roboto text-[10px] font-normal uppercase tracking-[0.32em] text-[#C4973A]">
            Discover ParkView City Islamabad
          </span>
          <h2 className="mt-4 font-termina text-[28px] font-normal uppercase leading-tight tracking-[0.06em] text-white sm:text-[42px]">
            Find a Home Surrounded by More
          </h2>
          <p className="mt-5 font-roboto text-[15px] font-light leading-[27px] text-white/72">
            Explore available properties, review payment plans, or speak with our team to learn more about life at ParkView City Islamabad.
          </p>

          <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
            <button
              type="button"
              onClick={() => navigate("/islamabad#properties")}
              className="flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[#C4973A] bg-[#C4973A] px-7 font-roboto text-[11px] font-normal uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-white hover:text-[#1D2D4E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
            >
              Explore Properties
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => navigate("/contact#contact-form")}
              className="flex min-h-11 w-full items-center justify-center rounded-full border border-white/45 bg-white/10 px-7 font-roboto text-[11px] font-normal uppercase tracking-[0.18em] text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-[#1D2D4E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
            >
              Contact Us
            </button>
          </div>
        </motion.div>
      </section>

      {/* ── Lightbox ─────────────────────────────────────────────── */}
      {lightboxIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Amenities gallery lightbox"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/92 px-4"
          onClick={e => { if (e.target === e.currentTarget) setLightboxIdx(null); }}
        >
          <button
            type="button"
            aria-label="Close lightbox"
            onClick={() => setLightboxIdx(null)}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white transition-all hover:bg-white/28 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            <X className="h-5 w-5" strokeWidth={2} />
          </button>

          <p className="absolute left-1/2 top-5 -translate-x-1/2 select-none font-roboto text-[12px] text-white/65">
            {lightboxIdx + 1} / {galleryLen}
          </p>

          <button
            type="button"
            aria-label="Previous image"
            onClick={() => setLightboxIdx(i => ((i ?? 0) - 1 + galleryLen) % galleryLen)}
            className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white transition-all hover:bg-white/28 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:left-6"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2} />
          </button>

          <img
            src={islamabadAmenitiesGallery[lightboxIdx].src}
            alt={islamabadAmenitiesGallery[lightboxIdx].alt}
            className="max-h-[85vh] max-w-[85vw] object-contain"
            draggable={false}
          />

          <button
            type="button"
            aria-label="Next image"
            onClick={() => setLightboxIdx(i => ((i ?? 0) + 1) % galleryLen)}
            className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white transition-all hover:bg-white/28 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:right-6"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2} />
          </button>
        </div>
      )}
    </div>
  );
}
