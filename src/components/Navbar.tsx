import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  type?: "button";
};

const globalLeftLinks: NavItem[] = [
  { label: "Lahore", href: "/lahore" },
  { label: "Islamabad", href: "/islamabad" },
  { label: "Gallery", href: "/#home-gallery" },
];

const globalRightLinks: NavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const cityNames = {
  lahore: "Lahore",
  islamabad: "Islamabad",
} as const;

type CityKey = keyof typeof cityNames;

const cityRoutes: Record<CityKey, string> = {
  lahore: "/lahore",
  islamabad: "/islamabad",
};

function getCityPath(city: CityKey, target: "properties" | "amenities" | "virtual-tour" | "payment-plans" | "contact") {
  if (target === "properties") return `${cityRoutes[city]}#properties`;
  if (target === "amenities") return `${cityRoutes[city]}/amenities`;
  if (target === "virtual-tour") return `${cityRoutes[city]}#virtual-tour`;
  if (target === "payment-plans") return `${cityRoutes[city]}/payment-plans`;
  return `${cityRoutes[city]}#${city}-enquiry-form`;
}

function isActivePath(pathname: string, href: string) {
  const base = href.split("#")[0];
  if (base === "/") return pathname === "/";
  return pathname === base;
}

function NavigationDrawer({
  open,
  solid,
  city,
  pathname,
  close,
  goTo,
}: {
  open: boolean;
  solid: boolean;
  city: CityKey | null;
  pathname: string;
  close: () => void;
  goTo: (href: string) => void;
}) {
  const otherCity: CityKey | null = city === "lahore" ? "islamabad" : city === "islamabad" ? "lahore" : null;
  const drawerItems: NavItem[] = city
    ? [
        ...(otherCity ? [{ label: cityNames[otherCity], href: cityRoutes[otherCity] }] : []),
        { label: "Properties", href: getCityPath(city, "properties") },
        { label: "Amenities", href: getCityPath(city, "amenities") },
        { label: "Virtual Tours", href: getCityPath(city, "virtual-tour") },
        { label: "Payment Plans", href: getCityPath(city, "payment-plans") },
        { label: "About Us", href: "/about" },
        { label: "Contact Us", href: getCityPath(city, "contact") },
      ]
    : [
        { label: "Gallery", href: "/#home-gallery" },
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
      ];

  return (
    <>
      <div
        className={[
          "fixed inset-0 z-50 bg-black/45 transition-opacity duration-[250ms] lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
        aria-hidden="true"
        onClick={close}
      />
      <aside
        id="mobile-navigation-drawer"
        className={[
          "fixed right-0 top-0 z-[55] h-dvh w-[min(86vw,360px)] bg-white shadow-2xl transition-transform duration-[250ms] ease-out lg:hidden",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        aria-hidden={!open}
      >
        <div className="flex h-[70px] items-center justify-between border-b border-black/10 px-5">
          <img
            src="/parkview-city-mobile-logo-black.png"
            alt="ParkView City"
            className="h-auto max-h-10 max-w-[170px] object-contain"
          />
          <button
            type="button"
            onClick={close}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-pvc-ink/10 text-pvc-ink transition-colors hover:border-pvc-gold hover:text-pvc-gold"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex h-[calc(100dvh-70px)] flex-col overflow-y-auto px-6 py-6">
          {!city && (
            <div className="mb-5">
              <p className="mb-3 font-roboto text-[9px] uppercase tracking-[0.24em] text-pvc-grey">Projects</p>
              <div className="grid grid-cols-2 gap-2">
                {(["lahore", "islamabad"] as CityKey[]).map(option => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => goTo(cityRoutes[option])}
                    className="rounded-full border border-pvc-ink/15 px-4 py-2.5 font-roboto text-[10px] uppercase tracking-[0.18em] text-pvc-ink/70 transition-colors hover:border-pvc-gold hover:text-pvc-gold"
                  >
                    {cityNames[option]}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col divide-y divide-black/10">
            {drawerItems.map(item => {
              const active = isActivePath(pathname, item.href);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={event => {
                    event.preventDefault();
                    goTo(item.href);
                  }}
                  className={[
                    "flex items-center py-4 font-roboto text-sm uppercase tracking-[0.18em] transition-colors",
                    active ? "font-medium text-pvc-gold" : "font-normal text-pvc-ink/75 hover:text-pvc-green",
                  ].join(" ")}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => goTo(city ? getCityPath(city, "contact") : "/contact#contact-enquiry-form")}
            className="mt-7 flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-pvc-gold px-5 font-roboto text-[11px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-pvc-gold/85"
          >
            <Phone className="h-3.5 w-3.5" />
            Enquire Now
          </button>
        </nav>
      </aside>
    </>
  );
}

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = location;
  const city: CityKey | null = pathname.startsWith("/lahore")
    ? "lahore"
    : pathname.startsWith("/islamabad")
    ? "islamabad"
    : null;
  const cityBase = city ? cityRoutes[city] : "/lahore";

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    if (open) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const linkCls = [
    "group relative pb-1 font-roboto text-[11px] font-normal uppercase tracking-[0.2em] transition-colors duration-300 cursor-pointer whitespace-nowrap",
    solid ? "text-pvc-ink/75 hover:text-pvc-green" : "text-white/85 hover:text-white",
  ].join(" ");
  const activeLinkCls = `${linkCls} !text-pvc-gold`;
  const underline = "absolute bottom-0 left-0 h-px w-0 bg-pvc-gold transition-all duration-300 group-hover:w-full";
  const activeUnderline = "absolute bottom-0 left-0 h-px w-full bg-pvc-gold";
  const logoSrc = solid ? "/blacklogo.png" : "/whitelogo.png";
  const mobileLogoSrc = solid ? "/parkview-city-mobile-logo-black.png" : "/parkview-city-mobile-logo-white.png";

  const enquireNowCls = [
    "flex items-center gap-2 rounded-full border px-5 py-2 font-roboto text-[10px] font-normal uppercase tracking-[0.18em] transition-all duration-300 cursor-pointer whitespace-nowrap",
    solid
      ? "border-pvc-ink/25 text-pvc-ink/60 hover:border-pvc-gold hover:text-pvc-gold"
      : "border-white/65 bg-[rgba(0,0,0,0.38)] text-white hover:border-[#C4973A] hover:bg-[#C4973A] hover:text-white",
  ].join(" ");

  function scrollToId(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function goTo(href: string) {
    setOpen(false);
    const [base, hash] = href.split("#");
    if (hash) {
      const targetPath = base || "/";
      if (pathname === targetPath) {
        navigate(href, { state: { scrollTo: hash, ts: Date.now() } });
        window.requestAnimationFrame(() => scrollToId(hash));
        return;
      }
      navigate(href, { state: { scrollTo: hash, ts: Date.now() } });
      return;
    }
    navigate(href);
  }

  function goToCitySection(id: string) {
    setOpen(false);
    if (pathname === cityBase) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    navigate(`${cityBase}#${id}`);
  }

  function renderLink(item: NavItem) {
    const active = isActivePath(pathname, item.href);
    return (
      <a
        key={item.label}
        href={item.href}
        onClick={event => {
          event.preventDefault();
          goTo(item.href);
        }}
        className={active ? activeLinkCls : linkCls}
      >
        {item.label}
        <span className={active ? activeUnderline : underline} />
      </a>
    );
  }

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-b from-black/45 to-transparent transition-opacity duration-300 ${solid ? "opacity-0" : "opacity-100"}`} />
      <div className={`pointer-events-none absolute inset-0 border-b border-gray-200/60 bg-white/20 backdrop-blur-2xl transition-opacity duration-300 ${solid ? "opacity-100" : "opacity-0"}`} />

      <div className="relative z-10 mx-auto hidden h-[75px] max-w-[1500px] items-center px-10 lg:flex">
        <a
          href="/"
          onClick={event => {
            event.preventDefault();
            goTo("/");
          }}
          className="absolute left-1/2 flex shrink-0 -translate-x-1/2 cursor-pointer items-center"
        >
          <img src={logoSrc} alt="ParkView City" className="h-[50px] w-auto object-contain transition-opacity duration-300" />
        </a>

        <nav className="flex flex-1 items-center justify-end gap-6 pr-20">
          {city ? (
            <>
              {renderLink({ label: city === "lahore" ? "Islamabad" : "Lahore", href: city === "lahore" ? "/islamabad" : "/lahore" })}
              <a href={getCityPath(city, "properties")} onClick={event => { event.preventDefault(); goToCitySection("properties"); }} className={linkCls}>Properties<span className={underline} /></a>
              {renderLink({ label: "Amenities", href: getCityPath(city, "amenities") })}
            </>
          ) : (
            globalLeftLinks.map(renderLink)
          )}
        </nav>

        <div className="flex flex-1 items-center gap-6 pl-20">
          {city ? (
            <>
              <a href={getCityPath(city, "virtual-tour")} onClick={event => { event.preventDefault(); goToCitySection("virtual-tour"); }} className={linkCls}>Virtual Tours<span className={underline} /></a>
              {renderLink({ label: "Payment Plans", href: getCityPath(city, "payment-plans") })}
              <a href={getCityPath(city, "contact")} onClick={event => { event.preventDefault(); goTo(getCityPath(city, "contact")); }} className={linkCls}>Contact Us<span className={underline} /></a>
            </>
          ) : (
            globalRightLinks.map(renderLink)
          )}

          <div className="ml-auto">
            <button
              type="button"
              onClick={() => goTo(city ? getCityPath(city, "contact") : "/contact#contact-enquiry-form")}
              className={enquireNowCls}
            >
              <Phone className="h-3 w-3" />
              Enquire Now
            </button>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex h-[70px] items-center justify-between px-5 lg:hidden">
        <a
          href="/"
          onClick={event => {
            event.preventDefault();
            goTo("/");
          }}
          className="flex items-center"
        >
          <img src={mobileLogoSrc} alt="ParkView City" className="h-auto max-w-[145px] object-contain transition-opacity duration-300" />
        </a>
        <button
          type="button"
          className={["p-2 transition-colors duration-200 cursor-pointer", solid ? "text-pvc-ink" : "text-white"].join(" ")}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-navigation-drawer"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      <NavigationDrawer
        open={open}
        solid={solid}
        city={city}
        pathname={pathname}
        close={() => setOpen(false)}
        goTo={goTo}
      />
    </header>
  );
}
