import { FileText } from "lucide-react";
import type { PaymentPlan } from "@/data/lahorePaymentPlans";

interface Props {
  plan: PaymentPlan;
}

export default function PaymentPlanCard({ plan }: Props) {
  const isResidential = plan.category === "Residential";
  const isAvailable   = plan.status === "available" && plan.pdfUrl !== null;

  /* ── Placeholder gradient colours ───────────────────────────── */
  const gradientStyle = isResidential
    ? { background: "linear-gradient(135deg, #F0F4F8 0%, #E4ECF4 100%)" }
    : { background: "linear-gradient(135deg, #F5F0E8 0%, #EDE3D0 100%)" };

  /* ── Accessible label ────────────────────────────────────────── */
  const ariaLabel = isAvailable
    ? `View ${plan.title} payment plan PDF`
    : `${plan.title} — PDF coming soon`;

  const media = (
    <div
      className="relative flex h-[240px] w-full shrink-0 items-center justify-center overflow-hidden"
      style={plan.thumbnail ? undefined : gradientStyle}
    >
      {plan.thumbnail ? (
        <img
          src={plan.thumbnail}
          alt={plan.title}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      ) : (
        <>
          {/* Subtle grid pattern */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* Dashed icon container */}
          <div className="relative z-10 flex flex-col items-center gap-3 text-center">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-dashed border-[#C4973A]/50"
              style={{ background: "rgba(196,151,58,0.07)" }}
            >
              <FileText className="h-6 w-6 text-[#C4973A]" strokeWidth={1.5} />
            </div>
            <p className="font-roboto text-[11px] font-medium uppercase tracking-[0.18em] text-[#1D2D4E]/55">
              Payment Plan Image
            </p>
            <p className="font-roboto text-[10px] font-light text-[#58595B]/55">
              To be provided by client
            </p>
          </div>

          {/* Coming Soon badge */}
          <span
            className="absolute bottom-3.5 right-3.5 rounded-full border border-[#C4973A]/35
                       bg-white/80 px-3 py-1 font-roboto text-[8px] uppercase tracking-[0.18em] text-[#C4973A]/80
                       backdrop-blur-sm"
          >
            PDF will be added soon
          </span>
        </>
      )}
    </div>
  );

  const body = (
    <div className="flex flex-1 flex-col px-5 py-4">
      <span
        className={[
          "font-roboto text-[8px] uppercase tracking-[0.22em]",
          isResidential ? "text-[#58595B]/65" : "text-[#C4973A]",
        ].join(" ")}
      >
        {plan.category}
      </span>

      {/* Fixed-height title area: 2-line reserve prevents layout shifting between cards */}
      <div className="mt-1.5 min-h-[42px]">
        <h3
          className="font-roboto leading-[1.35] text-[#1D2D4E]"
          style={{
            fontSize: "15px",
            lineHeight: "21px",
            letterSpacing: "0.9px",
          }}
        >
          {plan.title}
        </h3>
      </div>

      <p className="mt-1.5 font-roboto text-[11px] font-light leading-[16px] text-[#58595B]/80">
        {plan.details}
      </p>
    </div>
  );

  if (isAvailable) {
    return (
      <a
        href={plan.pdfUrl!}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className="group flex h-full flex-col overflow-hidden rounded-[14px] border border-black/10 bg-white
                   shadow-sm transition-shadow duration-300 hover:shadow-md
                   focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C4973A]"
      >
        {media}
        {body}
      </a>
    );
  }

  return (
    <div
      aria-label={ariaLabel}
      className="flex h-full flex-col overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-sm"
    >
      {media}
      {body}
    </div>
  );
}
