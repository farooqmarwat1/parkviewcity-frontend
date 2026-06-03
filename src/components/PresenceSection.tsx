import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";

/* ── Two rows — row1 drifts RIGHT, row2 drifts LEFT as page scrolls ── */
const row1 = [
  { seed: "pvc-isl-phase1",   brand: "PARK VIEW CITY", name: "PHASE I · BLOCKS",    loc: "Islamabad" },
  { seed: "pvc-isl-overseas",  brand: "PARK VIEW CITY", name: "OVERSEAS BLOCK",      loc: "Islamabad" },
  { seed: "pvc-isl-golf",      brand: "GOLF ESTATE",    name: "FAIRWAY VILLAS",      loc: "Islamabad" },
  { seed: "pvc-isl-downtown",  brand: "DOWNTOWN",       name: "COMMERCIAL DISTRICT", loc: "Islamabad" },
  { seed: "pvc-isl-hills",     brand: "HILLS ESTATE",   name: "ELEVATED LIVING",     loc: "Islamabad" },
  { seed: "pvc-isl-botanical", brand: "BOTANICAL",      name: "GARDEN DISTRICT",     loc: "Islamabad" },
];

const row2 = [
  { seed: "pvc-lhr-phase2",   brand: "PARK VIEW CITY", name: "PHASE II",             loc: "Lahore" },
  { seed: "pvc-lhr-terrace",  brand: "TERRACE",        name: "SKY APARTMENTS",       loc: "Lahore" },
  { seed: "pvc-lhr-walk",     brand: "THE WALK",       name: "RETAIL & DINING",      loc: "Lahore" },
  { seed: "pvc-lhr-cine",     brand: "CINEGOLD",       name: "PLEX",                 loc: "Lahore" },
  { seed: "pvc-lhr-lake",     brand: "LAKE VIEW",      name: "RESIDENCES",           loc: "Lahore" },
  { seed: "pvc-lhr-tower",    brand: "PARK VIEW",      name: "TOWER",                loc: "Lahore" },
];

/* ── Single card ──────────────────────────────────────────────────── */
function Card({ seed, brand, name, loc }: (typeof row1)[0]) {
  return (
    <a
      href="#"
      className="group relative block shrink-0 overflow-hidden cursor-pointer"
      style={{ width: "clamp(260px, 26vw, 390px)", aspectRatio: "16/11" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[1100ms] ease-out group-hover:scale-105"
        style={{ backgroundImage: `url('https://picsum.photos/seed/${seed}/700/440')` }}
      />
      {/* dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

      {/* centred logo + project name */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-center">
        <img src="/pvc-white.png" alt="" aria-hidden
          className="h-8 w-auto object-contain opacity-60 sm:h-10" />
        <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-white/80">{brand}</p>
        <p className="text-[10px] uppercase tracking-[0.18em] text-white/50">{name}</p>
      </div>

      {/* bottom city label */}
      <div className="absolute inset-x-0 bottom-0 p-4 text-center">
        <p className="text-xs uppercase tracking-widest text-white/70">{loc}</p>
      </div>
    </a>
  );
}

/* ── Section ──────────────────────────────────────────────────────── */
const easeOut: [number,number,number,number] = [0.22, 1, 0.36, 1];
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

export default function PresenceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // row 1 drifts RIGHT, row 2 drifts LEFT
  const x1 = useTransform(scrollYProgress, [0, 1], ["-10%",  "4%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], [ "4%", "-10%"]);

  return (
    <section ref={sectionRef} className="overflow-hidden bg-white py-20 sm:py-28">

      {/* heading */}
      <div className="mx-auto mb-14 max-w-[1400px] px-6 sm:px-10">
        <motion.h2
          variants={fadeUp} initial="hidden" whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center text-2xl font-light uppercase tracking-[0.14em] text-pvc-ink sm:text-3xl lg:text-4xl">
          Our Presence
        </motion.h2>
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="mx-auto mt-4 max-w-xl text-center text-sm tracking-wide text-pvc-ink/50">
          Two iconic master-planned communities across Pakistan's most desirable cities.
        </motion.p>
      </div>

      {/* ── Row 1 → drifts right ── */}
      <motion.div style={{ x: x1 }} className="flex gap-3 pb-3">
        {/* duplicate for seamless fill on both edges */}
        {[...row1, ...row1].map((card, i) => (
          <Card key={`r1-${i}`} {...card} />
        ))}
      </motion.div>

      {/* ── Row 2 → drifts left ── */}
      <motion.div style={{ x: x2 }} className="flex gap-3 pt-0">
        {[...row2, ...row2].map((card, i) => (
          <Card key={`r2-${i}`} {...card} />
        ))}
      </motion.div>
    </section>
  );
}
