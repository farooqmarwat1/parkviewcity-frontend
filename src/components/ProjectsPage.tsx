import { useNavigate } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight, MapPin, Shield, TrendingUp, Layers,
} from "lucide-react";
import { projects, type ProjectData } from "@/data/projects";

/* ── Animation variants ──────────────────────────────────────── */
const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.75, ease: easeOut } },
};

const stagger: Variants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1 } },
};

/* ── Why ParkView features ───────────────────────────────────── */
const features = [
  {
    Icon: MapPin,
    title: "Prime Locations",
    description: "Strategically positioned communities with practical access to major city routes and destinations.",
  },
  {
    Icon: Layers,
    title: "Modern Infrastructure",
    description: "Well-planned roads, utilities, community services, green spaces, and modern development standards.",
  },
  {
    Icon: Shield,
    title: "Secure Communities",
    description: "Gated environments with security systems designed for residents, families, and businesses.",
  },
  {
    Icon: TrendingUp,
    title: "Investment Potential",
    description: "Residential and commercial opportunities developed for lifestyle value and long-term growth.",
  },
];

/* ── Gallery images ──────────────────────────────────────────── */
const galleryImages = [
  { src: "/ProjectLahore.png",              alt: "ParkView City Lahore aerial view",          city: "Lahore"       },
  { src: "/Tulip-Overseas-Block-HERO.webp", alt: "Tulip Overseas Block, ParkView City Lahore", city: "Lahore"       },
  { src: "/A%20Place%20to%20call%20home.webp", alt: "ParkView City residential community",    city: "Lahore"       },
  { src: "/ProjectIslamabad.png",           alt: "ParkView City Islamabad aerial view",        city: "Islamabad"    },
  { src: "/VirtualTourSection.webp",        alt: "ParkView City community aerial panorama",    city: "ParkView City"},
  { src: "/payment-plan-lahore-hero.webp",  alt: "ParkView City Lahore road and infrastructure", city: "Lahore"    },
];

/* ── Project card ────────────────────────────────────────────── */
function ProjectCard({ project }: { project: ProjectData }) {
  const navigate = useNavigate();
  const available = project.status === "available";

  function handlePrimary() {
    if (available) navigate(project.route);
  }

  function handleSecondary() {
    if (available) navigate(project.paymentPlansRoute);
  }

  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-[20px]"
      style={{ minHeight: "clamp(480px, 50vw, 560px)" }}
    >
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="h-full w-full object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(15,25,47,0.92) 0%, rgba(15,25,47,0.40) 55%, rgba(15,25,47,0.15) 100%)",
          }}
        />
      </div>

      {/* Logo — top-left */}
      <div className="relative z-10 p-6 sm:p-8">
        <img
          src={project.logo}
          alt={`${project.name} logo`}
          className="h-10 w-auto object-contain"
        />
      </div>

      {/* Coming Soon badge */}
      {!available && (
        <div className="absolute right-5 top-5 z-20 rounded-full bg-pvc-gold/90 px-3 py-1 backdrop-blur-sm">
          <span className="font-roboto text-[9px] font-medium uppercase tracking-[0.2em] text-white">
            Coming Soon
          </span>
        </div>
      )}

      {/* Content — bottom */}
      <div className="relative z-10 mt-auto p-6 sm:p-8">
        <p className="mb-1.5 font-roboto text-[10px] font-light uppercase tracking-[0.3em] text-pvc-gold">
          {project.eyebrow}
        </p>
        <h2 className="font-termina font-normal leading-tight text-white"
          style={{ fontSize: "clamp(22px, 2.8vw, 32px)" }}
        >
          {project.name}
        </h2>
        <p className="mt-3 max-w-[480px] font-roboto text-[13px] font-light leading-[22px] text-white/70">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {/* Primary button */}
          <button
            type="button"
            onClick={handlePrimary}
            disabled={!available}
            aria-label={available ? `Explore ${project.city}` : `${project.city} — Coming Soon`}
            className={[
              "flex h-[46px] items-center gap-2 rounded-full px-6 font-roboto text-[10px] uppercase tracking-[0.22em] transition-all duration-300",
              available
                ? "bg-pvc-gold text-white hover:bg-pvc-gold/85 cursor-pointer"
                : "bg-white/15 text-white/50 cursor-not-allowed",
            ].join(" ")}
          >
            {available ? `Explore ${project.city}` : "Coming Soon"}
            {available && <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />}
          </button>

          {/* Secondary button */}
          {available && (
            <button
              type="button"
              onClick={handleSecondary}
              className="flex h-[46px] items-center gap-2 rounded-full border border-white/35 px-6 font-roboto text-[10px] uppercase tracking-[0.22em] text-white/80 transition-all duration-300 hover:border-pvc-gold hover:text-pvc-gold cursor-pointer"
            >
              View Payment Plans
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

/* ── Main page ───────────────────────────────────────────────── */
export default function ProjectsPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white">

      {/* ═══════════════════════════════════════════════════════
          1 ▸ HERO
      ═══════════════════════════════════════════════════════ */}
      <section
        id="projects-hero"
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
        style={{ minHeight: "100svh" }}
        aria-label="Explore Projects hero"
      >
        <img
          src="/ProjectIslamabad.png"
          alt="ParkView City aerial view"
          className="absolute inset-0 h-full w-full object-cover object-center"
          draggable={false}
        />
        <div className="figma-hero-overlay" />

        <motion.div
          variants={stagger} initial="hidden" animate="show"
          className="relative z-10 mx-auto flex max-w-[900px] flex-col items-center px-6 text-center pt-[75px]"
        >
          <motion.p variants={fadeUp}
            className="mb-5 font-roboto text-[11px] font-light uppercase tracking-[0.35em] text-pvc-gold"
          >
            Explore ParkView City
          </motion.p>

          <motion.h1 variants={fadeUp}
            className="font-termina font-normal leading-[1.1] text-white"
            style={{ fontSize: "clamp(36px, 6vw, 72px)" }}
          >
            DISCOVER OUR PROJECTS
          </motion.h1>

          <motion.div variants={fadeUp} className="mt-3 h-px w-16 bg-pvc-gold/70" />

          <motion.p variants={fadeUp}
            className="mt-8 max-w-[620px] font-roboto text-[15px] font-light leading-[26px] tracking-[0.04em] text-white/75"
          >
            Explore ParkView City's landmark communities in Lahore and Islamabad—designed
            around modern living, premium amenities, secure environments, and long-term
            investment value.
          </motion.p>

          <motion.div variants={fadeUp}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <button
              type="button"
              onClick={() => navigate("/lahore")}
              className="flex h-[52px] min-w-[180px] items-center justify-center gap-2 rounded-full bg-pvc-gold px-8 font-roboto text-[11px] uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-pvc-gold/85 cursor-pointer"
            >
              Explore Lahore
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => navigate("/projects")}
              className="flex h-[52px] min-w-[180px] items-center justify-center gap-2 rounded-full border border-white/35 px-8 font-roboto text-[11px] uppercase tracking-[0.25em] text-white/80 transition-all duration-300 hover:border-pvc-gold hover:text-pvc-gold cursor-pointer"
            >
              Explore Islamabad
            </button>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-white to-transparent" />
      </section>


      {/* ═══════════════════════════════════════════════════════
          2 ▸ INTRODUCTION
      ═══════════════════════════════════════════════════════ */}
      <section id="project-introduction" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[860px] px-6 text-center sm:px-10">
          <motion.div
            variants={stagger} initial="hidden" whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.p variants={fadeUp}
              className="mb-4 font-roboto text-[11px] font-light uppercase tracking-[0.35em] text-pvc-gold"
            >
              Our Communities
            </motion.p>
            <motion.h2 variants={fadeUp}
              className="font-termina font-normal text-pvc-navy"
              style={{ fontSize: "clamp(26px, 4vw, 46px)" }}
            >
              TWO CITIES. ONE VISION.
            </motion.h2>
            <motion.div variants={fadeUp} className="mx-auto mt-4 h-px w-12 bg-pvc-gold/60" />
            <motion.p variants={fadeUp}
              className="mt-7 font-roboto text-[15px] font-light leading-[26px] tracking-[0.04em] text-pvc-grey"
            >
              ParkView City brings thoughtfully planned residential and commercial communities
              to two of Pakistan's most prominent cities, combining location, infrastructure,
              lifestyle, and investment potential.
            </motion.p>
          </motion.div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          3 ▸ MAIN PROJECT CARDS
      ═══════════════════════════════════════════════════════ */}
      <section id="main-projects" className="bg-white pb-20 sm:pb-28">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10">
          <motion.div
            variants={stagger} initial="hidden" whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 gap-7 md:grid-cols-2"
          >
            {projects.map(p => (
              <motion.div key={p.id} variants={fadeUp}>
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          4 ▸ WHY PARKVIEW CITY
      ═══════════════════════════════════════════════════════ */}
      <section id="why-parkview" className="bg-[#F7F7F5] py-20 sm:py-28">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10">

          <motion.div
            variants={stagger} initial="hidden" whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-14 text-center"
          >
            <motion.p variants={fadeUp}
              className="mb-3 font-roboto text-[11px] font-light uppercase tracking-[0.35em] text-pvc-gold"
            >
              What Sets Us Apart
            </motion.p>
            <motion.h2 variants={fadeUp}
              className="font-termina font-normal text-pvc-navy"
              style={{ fontSize: "clamp(22px, 3vw, 36px)" }}
            >
              WHY PARKVIEW CITY
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {features.map(({ Icon, title, description }) => (
              <motion.div key={title} variants={fadeUp}
                className="flex flex-col items-start gap-4 rounded-[16px] border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-pvc-gold/40">
                  <Icon className="h-5 w-5 text-pvc-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-roboto text-[14px] font-medium text-pvc-navy">{title}</h3>
                  <p className="mt-2 font-roboto text-[13px] font-light leading-[21px] text-pvc-grey">
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          5 ▸ GALLERY PREVIEW
      ═══════════════════════════════════════════════════════ */}
      <section id="projects-gallery" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10">

          <motion.div
            variants={stagger} initial="hidden" whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-12 text-center"
          >
            <motion.p variants={fadeUp}
              className="mb-3 font-roboto text-[11px] font-light uppercase tracking-[0.35em] text-pvc-gold"
            >
              A Glimpse of ParkView
            </motion.p>
            <motion.h2 variants={fadeUp}
              className="font-termina font-normal text-pvc-navy"
              style={{ fontSize: "clamp(22px, 3vw, 36px)" }}
            >
              EXPLORE OUR COMMUNITIES
            </motion.h2>
            <motion.p variants={fadeUp}
              className="mx-auto mt-4 max-w-[560px] font-roboto text-[14px] font-light leading-[24px] text-pvc-grey"
            >
              Discover the landscapes, architecture, amenities, and residential environments
              across ParkView City Lahore and Islamabad.
            </motion.p>
          </motion.div>

          {/* Asymmetric gallery grid — desktop 3-col, tablet 2-col, mobile 1-col */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="gallery-grid"
          >
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`gallery-item gallery-item-${i + 1} group relative overflow-hidden rounded-[12px]`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                {/* City label on hover */}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="m-3 rounded-full bg-white/15 px-3 py-1 font-roboto text-[9px] uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                    {img.city}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          6 ▸ CHOOSE YOUR CITY
      ═══════════════════════════════════════════════════════ */}
      <section id="choose-city" className="bg-[#F7F7F5] py-20 sm:py-28">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10">

          <motion.div
            variants={stagger} initial="hidden" whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-12 text-center"
          >
            <motion.p variants={fadeUp}
              className="mb-3 font-roboto text-[11px] font-light uppercase tracking-[0.35em] text-pvc-gold"
            >
              Choose Your City
            </motion.p>
            <motion.h2 variants={fadeUp}
              className="font-termina font-normal text-pvc-navy"
              style={{ fontSize: "clamp(22px, 3vw, 36px)" }}
            >
              BEGIN YOUR PARKVIEW JOURNEY
            </motion.h2>
            <motion.p variants={fadeUp}
              className="mx-auto mt-4 max-w-[540px] font-roboto text-[14px] font-light leading-[24px] text-pvc-grey"
            >
              Select a city to explore its properties, amenities, payment plans, galleries,
              and community experience.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2"
          >
            {projects.map(p => {
              const available = p.status === "available";
              return (
                <motion.div key={p.id} variants={fadeUp}
                  className="group relative flex min-h-[220px] overflow-hidden rounded-[16px]"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(15,25,47,0.88) 0%, rgba(15,25,47,0.25) 100%)" }}
                  />
                  <div className="relative z-10 flex w-full flex-col justify-end p-6 sm:p-8">
                    <p className="mb-1 font-roboto text-[9px] font-light uppercase tracking-[0.3em] text-pvc-gold">
                      {p.eyebrow}
                    </p>
                    <p className="font-termina text-[20px] font-normal text-white sm:text-[22px]">
                      {p.name}
                    </p>
                    {!available && (
                      <span className="mt-2 inline-block w-fit rounded-full border border-white/30 px-3 py-1 font-roboto text-[9px] uppercase tracking-[0.2em] text-white/60">
                        Coming Soon
                      </span>
                    )}
                    {available && (
                      <button
                        type="button"
                        onClick={() => navigate(p.route)}
                        className="mt-4 flex w-fit items-center gap-2 rounded-full border border-white/40 px-5 py-2.5 font-roboto text-[10px] uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-pvc-gold hover:text-pvc-gold cursor-pointer"
                      >
                        Enter {p.city}
                        <ArrowRight className="h-3 w-3" strokeWidth={1.5} />
                      </button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          7 ▸ CONTACT CTA
      ═══════════════════════════════════════════════════════ */}
      <section
        id="projects-contact-cta"
        className="relative overflow-hidden py-20 sm:py-28"
        style={{
          backgroundImage: "url('/VirtualTourSection.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(0deg, rgba(15,25,47,0.88), rgba(15,25,47,0.65))" }}
        />
        <div className="relative z-10 mx-auto max-w-[800px] px-6 text-center sm:px-10">
          <motion.div
            variants={stagger} initial="hidden" whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <motion.p variants={fadeUp}
              className="mb-4 font-roboto text-[11px] font-light uppercase tracking-[0.35em] text-pvc-gold"
            >
              Talk to Our Team
            </motion.p>
            <motion.h2 variants={fadeUp}
              className="font-termina font-normal leading-tight text-white"
              style={{ fontSize: "clamp(26px, 4vw, 46px)" }}
            >
              FIND THE RIGHT PROJECT<br className="hidden sm:block" /> FOR YOU
            </motion.h2>
            <motion.div variants={fadeUp} className="mx-auto mt-4 h-px w-12 bg-pvc-gold/60" />
            <motion.p variants={fadeUp}
              className="mt-7 font-roboto text-[15px] font-light leading-[26px] tracking-[0.04em] text-white/65"
            >
              Our consultants can help you compare locations, properties, payment plans,
              investment opportunities, and available inventory across Lahore and Islamabad.
            </motion.p>
            <motion.div variants={fadeUp}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <button
                type="button"
                onClick={() => navigate("/contact#contact-form")}
                className="flex h-[52px] min-w-[180px] items-center justify-center gap-2 rounded-full bg-pvc-gold px-8 font-roboto text-[11px] uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-pvc-gold/85 cursor-pointer"
              >
                Enquire Now
              </button>
              <button
                type="button"
                onClick={() => navigate("/contact")}
                className="flex h-[52px] min-w-[180px] items-center justify-center gap-2 rounded-full border border-white/30 px-8 font-roboto text-[11px] uppercase tracking-[0.25em] text-white/70 transition-all duration-300 hover:border-white hover:text-white cursor-pointer"
              >
                Contact Us
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
