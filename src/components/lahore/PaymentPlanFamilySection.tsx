import { motion } from "framer-motion";
import PaymentPlanCard from "./PaymentPlanCard";
import type { PaymentPlan } from "@/data/lahorePaymentPlans";

interface Props {
  id?: string;
  heading: string;
  plans: PaymentPlan[];
  columns?: 2 | 3;
}

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: easeOut } },
};

export default function PaymentPlanFamilySection({ id, heading, plans, columns = 3 }: Props) {
  const gridCls = columns === 2
    ? "grid grid-cols-1 gap-5 sm:grid-cols-2 items-stretch"
    : "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 items-stretch";

  return (
    <section id={id} className="pt-14 pb-2 scroll-mt-[75px]">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8 md:px-10">

        {/* Heading row */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="mb-7 flex items-start gap-3 border-b border-[#1D2D4E]/10 pb-5"
        >
          <div className="mt-0.5 h-6 w-1 shrink-0 rounded-full bg-[#C4973A]" />
          <div>
            <h2
              className="font-termina text-[20px] font-normal uppercase leading-tight tracking-[0.06em] text-[#1D2D4E]"
            >
              {heading}
            </h2>
            <p className="mt-1 font-roboto text-[10px] font-light uppercase tracking-[0.22em] text-[#58595B]/65">
              {plans.length} Payment {plans.length === 1 ? "Plan" : "Plans"}
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <div className={gridCls}>
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: i * 0.07 }}
              className="h-full"
            >
              <PaymentPlanCard plan={plan} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
