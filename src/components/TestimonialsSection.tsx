import { motion, type Variants } from "framer-motion";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 50 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.85, ease: easeOut } },
};

const testimonials = [
  {
    seed:  "pvc-t1-usman",
    name:  "Usman Ahmed",
    quote: "I visited the site and was blown away. The greenery and infrastructure is exactly what Park View City promised — and more.",
  },
  {
    seed:  "pvc-t2-farrukh",
    name:  "Farrukh Malik",
    quote: "I own two plots in the Overseas Block. The value has nearly tripled since I bought. Best investment decision of my life.",
  },
  {
    seed:  "pvc-t3-amna",
    name:  "Amna & Bilal",
    quote: "As first-time buyers in Islamabad, we compared every society. The moment we saw Park View City, there was no going back.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-10">

        {/* heading */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="mb-16 text-center text-2xl font-light uppercase tracking-[0.14em] text-pvc-ink sm:text-3xl lg:text-4xl">
          My Park View Home
        </motion.h2>

        {/* cards */}
        <motion.div
          variants={container} initial="hidden" whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {testimonials.map(({ seed, name, quote }) => (
            <motion.article key={seed} variants={card}
              className="group relative cursor-pointer overflow-hidden rounded-sm"
              style={{ aspectRatio: "3/4" }}>

              {/* photo */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[1100ms] ease-out group-hover:scale-105"
                style={{ backgroundImage: `url('https://picsum.photos/seed/${seed}/600/800')` }}
              />

              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* text */}
              <div className="absolute inset-x-0 bottom-0 p-7">
                <h3 className="mb-3 font-display text-xl text-white">{name}</h3>
                <p className="text-sm leading-relaxed text-white/80">{quote}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
