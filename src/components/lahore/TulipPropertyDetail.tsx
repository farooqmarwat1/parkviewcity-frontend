import PropertyDetailOverlay from "./PropertyDetailOverlay";
import { TULIP_DETAIL } from "@/data/lahoreProperties";

interface Props {
  onClose: () => void;
  onEnquire: () => void;
  onPaymentPlans: (route: string) => void;
}

export default function TulipPropertyDetail({ onClose, onEnquire, onPaymentPlans }: Props) {
  return (
    <PropertyDetailOverlay
      data={TULIP_DETAIL}
      onClose={onClose}
      onEnquire={onEnquire}
      onPaymentPlans={onPaymentPlans}
    />
  );
}
