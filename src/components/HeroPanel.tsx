import { motion, type Variants } from "framer-motion";
import type { Hero } from "@/data/heroes";
import ExploreButton from "./ExploreButton";
import SearchBar from "./SearchBar";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.85, ease: easeOut } },
};

const tintClass: Record<NonNullable<Hero["tint"]>, string> = {
  green: "bg-gradient-to-b from-pvc-green-deep/45 via-pvc-green-deep/15 to-pvc-green-deep/80",
  dark:  "bg-gradient-to-b from-black/45 via-black/15 to-black/80",
  warm:  "bg-gradient-to-b from-black/40 via-black/20 to-black/80",
};

export default function HeroPanel({ hero }: { hero: Hero }) {
  const tint      = hero.tint ?? "dark";
  const padBottom = hero.contentBottom ?? (hero.search ? "pb-[55vh] sm:pb-[26vh]" : "pb-[7vh]");

  return (
    <section className="relative h-dvh w-full snap-start snap-always overflow-hidden">
      {/* background */}
      <div className="absolute inset-0">
        {hero.image && (
          <div className="absolute inset-0 animate-kenburns bg-cover bg-center"
            style={{ backgroundImage: `url('${hero.image}')` }} />
        )}
        {hero.video && (
          <video className="absolute inset-0 h-full w-full object-cover"
            src={hero.video} {...(hero.image ? { poster: hero.image } : {})}
            autoPlay muted loop playsInline preload="none" />
        )}
      </div>

      {/* tint */}
      <div className={`absolute inset-0 ${tintClass[tint]}`} />

      {/* main content */}
      <motion.div variants={container} initial="hidden" whileInView="show"
        viewport={{ amount: 0.45 }}
        className={`relative z-10 flex h-full flex-col items-center justify-end px-6 text-center ${padBottom}`}>

        {hero.eyebrow && (
          <motion.p variants={item}
            className="mb-5 text-[11px] uppercase tracking-[0.32em] text-pvc-gold-light">
            {hero.eyebrow}
          </motion.p>
        )}

        {/* logo lock-up */}
        {hero.variant === "logo" && (
          <motion.div variants={item} className="mb-6 flex flex-col items-center">
            {hero.cursive ? (
              <span className="font-display text-5xl italic text-white sm:text-6xl">{hero.cursive}</span>
            ) : (
              <img
                src="/pvc-white.png"
                alt="Park View City"
                className="h-16 w-auto object-contain sm:h-20"
              />
            )}
            {hero.logoName && (
              <span className="mt-3 font-display text-sm uppercase tracking-[0.4em] text-white/90">
                {hero.logoName}
              </span>
            )}
          </motion.div>
        )}

        {/* title */}
        <motion.h1 variants={item}
          className={`max-w-[90vw] text-center text-white ${hero.titleFont === "termina" ? "font-termina hero-title-termina" : "font-display font-light tracking-[0.1em] sm:whitespace-nowrap sm:tracking-[0.18em]"} ${hero.titleUppercase === false ? "" : "uppercase"}`}
          style={hero.titleFont === "termina"
            ? { fontSize: "24px", fontWeight: 500, lineHeight: "88.2px", letterSpacing: "0px" }
            : { fontSize: "clamp(1.4rem, 4.5vw, 3rem)" }}>
          {hero.title}
          {hero.titleAccent && (
            <span style={{ color: "#C4973A" }}>{hero.titleAccent}</span>
          )}
        </motion.h1>

        {hero.subtitle && (
          <motion.p variants={item}
            className="mt-5 max-w-xl text-sm tracking-wide text-white/75 sm:text-base">
            {hero.subtitle}
          </motion.p>
        )}

        {/* CTAs */}
        <motion.div variants={item}
          className={`flex flex-wrap items-center justify-center gap-8 ${hero.titleFont === "termina" ? "mt-6 sm:mt-0" : "mt-9"}`}>
          
          {/* Roboto applied only to the Explore Button */}
          {hero.primaryCta && (
            <span className="font-roboto">
              <ExploreButton label={hero.primaryCta} variant={hero.primaryCtaVariant ?? "outline"} />
            </span>
          )}

          {hero.secondaryCta && (
            <a href="#"
              className="group relative pb-1.5 text-xs uppercase tracking-[0.24em] text-white cursor-pointer">
              {hero.secondaryCta}
              <span className="absolute bottom-0 left-0 h-px w-full bg-pvc-gold-light transition-colors duration-300 group-hover:bg-white" />
            </a>
          )}
        </motion.div>
      </motion.div>

      {hero.search && <SearchBar />}
    </section>
  );
}