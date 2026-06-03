import { MessageCircle, Phone, Mail, CalendarClock } from "lucide-react";

const links = [
  { label: "WhatsApp",      Icon: MessageCircle },
  { label: "Call us",       Icon: Phone },
  { label: "Get in touch",  Icon: Mail },
  { label: "Schedule call", Icon: CalendarClock },
];

export default function TopBar() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 h-9 border-b border-white/10 bg-black/70 text-white/80 backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-[1500px] items-center justify-between px-5 text-[11px] tracking-wide sm:px-8">
        <div className="flex items-center gap-2">
          <span>Language: EN</span>
          <span className="text-pvc-gold/70">•</span>
          <span className="hidden sm:inline">Preferences: PKR / Imperial</span>
        </div>
        <nav className="flex items-center gap-4 sm:gap-6">
          {links.map(({ label, Icon }) => (
            <a key={label} href="#"
              className="group flex items-center gap-1.5 transition-colors duration-200 hover:text-white cursor-pointer">
              <span className="hidden md:inline">{label}</span>
              <Icon className="h-3.5 w-3.5 text-pvc-gold-light transition-transform duration-200 group-hover:scale-110" />
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
