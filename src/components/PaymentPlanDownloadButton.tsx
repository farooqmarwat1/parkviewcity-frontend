import { useState } from "react";
import { Download } from "lucide-react";
import type { LahorePaymentPlan } from "@/data/lahorePaymentPlans";

const CONTACT_INFO = {
  lahore: {
    phone: "042 111 249 249",
    email: "lahore@parkviewcity.com.pk",
    address: "3-KM from Thokar Niaz Baig, Multan Road, Lahore",
  },
  islamabad: {
    phone: "051 111 249 249",
    email: "islamabad@parkviewcity.com.pk",
    address: "First Floor, Zakia Aziz Plaza, 23-East AK Fazal-e-Haq Road, G-6/3, Blue Area, Islamabad",
  },
};

interface Props {
  city: "lahore" | "islamabad";
  heading: string;
  plans: LahorePaymentPlan[];
}

export default function PaymentPlanDownloadButton({ city, heading, plans }: Props) {
  const [loading, setLoading] = useState(false);

  async function handleDownload() {
    if (loading) return;
    setLoading(true);
    try {
      const [{ pdf }, { default: PaymentPlanPDF }, { createElement }] = await Promise.all([
        import("@react-pdf/renderer"),
        import("./PaymentPlanPDF"),
        import("react"),
      ]);

      const logoUrl = `${window.location.origin}/blacklogo.png`;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const blob = await pdf(
        createElement(PaymentPlanPDF, {
          city: city === "lahore" ? "Lahore" : "Islamabad",
          heading,
          plans,
          logoUrl,
          contact: CONTACT_INFO[city],
        }) as any
      ).toBlob();

      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `ParkView-City-${city === "lahore" ? "Lahore" : "Islamabad"}-${heading.replace(/[\s/]+/g, "-")}-Payment-Plan.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleDownload}
      disabled={loading}
      className="flex shrink-0 items-center gap-2 rounded-full border border-[#58595B]/40 bg-white px-5 py-2 font-roboto text-[10px] font-normal uppercase tracking-[0.25em] text-[#58595B] transition-all duration-300 hover:border-[#C4973A] hover:text-[#C4973A] disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer whitespace-nowrap"
    >
      <Download className="h-3 w-3 shrink-0" strokeWidth={1.8} />
      {loading ? "Generating…" : "Download"}
    </button>
  );
}
