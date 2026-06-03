import { motion, type Variants } from "framer-motion";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.75, ease: easeOut } },
};

export default function CollaborationsSection() {
  return (
    <section className="bg-white py-16 px-6">
      <motion.div
        variants={fadeUp} initial="hidden" whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="mx-auto max-w-3xl rounded-sm border border-dashed border-blue-300/70 px-12 py-12 flex flex-col items-center gap-10"
      >
        {/* heading */}
        <p className="text-center text-[11px] uppercase tracking-[0.35em] text-pvc-green font-medium">
          A New Realm of Curated Collaborations
        </p>

        {/* logos */}
        <div className="flex items-center justify-center gap-8 sm:gap-12">
          <img
            src="/pvc-black.png"
            alt="Park View City"
            className="h-12 w-auto object-contain sm:h-14"
          />
          <img
            src="/infinity.png"
            alt="×"
            className="h-7 w-auto object-contain sm:h-8 opacity-70"
          />
          <img
            src="/vision-group.png"
            alt="Vision Group"
            className="h-12 w-auto object-contain sm:h-14"
          />
        </div>
      </motion.div>
    </section>
  );
}
