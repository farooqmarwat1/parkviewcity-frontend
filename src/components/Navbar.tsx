import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";

/* ── Global page links (non-city pages) ─────────────────────────── */
const globalLeftLinks  = ["Lahore", "Islamabad", "Parkview City UK"];
const globalRightLinks = ["Gallery", "About Us", "Contact"];

/* ── City section-scroll links ──────────────────────────────────── */
const cityScrollLinks: { label: string; id: string }[] = [
  { label: "Properties",    id: "properties"   },
  { label: "Amenities",     id: "amenities"    },
  { label: "Virtual Tours", id: "virtual-tour" },
  { label: "About Us",      id: "about"        },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [solid, setSolid] = useState(false);
  const [open, setOpen]   = useState(false);

  /* Close mobile menu on route change */
  useEffect(() => { setOpen(false); }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const { pathname } = location;
  const isLahore        = pathname.startsWith("/lahore");
  const isIslamabad     = pathname.startsWith("/islamabad");
  const isUk            = pathname === "/uk";
  const isContact       = pathname === "/contact";
  const isAbout         = pathname === "/about";
  const isPaymentPlans  = pathname === "/lahore/payment-plans" || pathname === "/islamabad/payment-plans";

  const cityBase = isIslamabad ? "/islamabad" : "/lahore";

  function paymentPlansRoute(): string {
    return `${cityBase}/payment-plans`;
  }

  const linkCls = [
    "group relative pb-1 text-[11px] font-light uppercase tracking-[0.2em] transition-colors duration-300 cursor-pointer font-roboto whitespace-nowrap",
    solid ? "text-pvc-ink/75 hover:text-pvc-green" : "text-white/85 hover:text-white",
  ].join(" ");

  const underline = "absolute bottom-0 left-0 h-px w-0 bg-pvc-gold transition-all duration-300 group-hover:w-full";

  const activeLinkCls = `${linkCls} !text-pvc-gold`;

  const enquireNowCls = [
    "flex items-center gap-2 rounded-full border px-5 py-2 text-[10px] font-light uppercase tracking-[0.18em] transition-all duration-300 cursor-pointer font-roboto whitespace-nowrap",
    solid
      ? "border-pvc-ink/25 text-pvc-ink/60 hover:border-pvc-gold hover:text-pvc-gold"
      : "border-white/65 bg-[rgba(0,0,0,0.38)] text-white hover:bg-[#C4973A] hover:border-[#C4973A] hover:text-white",
  ].join(" ");

  /* ── Section smooth-scroll for active city ──────────────────── */
  function goToCitySection(id: string) {
    setOpen(false);
    if (pathname === cityBase) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    navigate(`${cityBase}#${id}`);
  }

  /* ── Page navigation (closes mobile menu) ──────────────────── */
  function goTo(path: string) {
    setOpen(false);
    navigate(path);
  }

  const logoSrc = solid ? "/blacklogo.png" : "/whitelogo.png";

  return (
    <header className="fixed inset-x-0 top-0 z-40">

      {/* Dark gradient for hero readability */}
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-b from-black/45 to-transparent transition-opacity duration-300 ${solid ? "opacity-0" : "opacity-100"}`} />

      {/* Blurred white for scrolled state */}
      <div className={`pointer-events-none absolute inset-0 bg-white/20 backdrop-blur-2xl border-b border-gray-200/60 transition-opacity duration-300 ${solid ? "opacity-100" : "opacity-0"}`} />

      {/* ── Desktop bar ─────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto hidden h-[75px] max-w-[1500px] items-center px-10 lg:flex">

        {/* Logo — always pinned to exact page centre */}
        <a
          href="/"
          onClick={e => { e.preventDefault(); goTo("/"); }}
          className="absolute left-1/2 -translate-x-1/2 flex shrink-0 cursor-pointer items-center"
        >
          <img
            src={logoSrc}
            alt="Park View City"
            className="h-[50px] w-auto object-contain transition-opacity duration-300"
          />
        </a>

        {/* Left links — right-aligned toward centre */}
        <nav className="flex flex-1 items-center justify-end gap-7 pr-20">
          {(isLahore || isIslamabad) ? (
            cityScrollLinks.slice(0, 3).map(({ label, id }) => (
              <a
                key={label}
                href={`${cityBase}#${id}`}
                onClick={e => { e.preventDefault(); goToCitySection(id); }}
                className={linkCls}
              >
                {label}<span className={underline} />
              </a>
            ))
          ) : (
            globalLeftLinks.map(link => {
              const href =
                link === "Lahore"           ? "/lahore"    :
                link === "Islamabad"        ? "/islamabad" :
                link === "Parkview City UK" ? "/uk"        : "/";
              const isActive =
                (link === "Lahore"           && isLahore)    ||
                (link === "Islamabad"        && isIslamabad) ||
                (link === "Parkview City UK" && isUk);
              return (
                <a
                  key={link}
                  href={href}
                  onClick={e => { e.preventDefault(); goTo(href); }}
                  className={isActive ? activeLinkCls : linkCls}
                >
                  {link}<span className={isActive ? "absolute bottom-0 left-0 h-px w-full bg-pvc-gold" : underline} />
                </a>
              );
            })
          )}
        </nav>

        {/* Right links + Enquire Now — left-aligned from centre */}
        <div className="flex flex-1 items-center gap-7 pl-20">
          {(isLahore || isIslamabad) ? (
            <>
              {cityScrollLinks.slice(3).map(({ label, id }) => (
                <a
                  key={label}
                  href={`${cityBase}#${id}`}
                  onClick={e => { e.preventDefault(); goToCitySection(id); }}
                  className={linkCls}
                >
                  {label}<span className={underline} />
                </a>
              ))}
              <a
                href={paymentPlansRoute()}
                onClick={e => { e.preventDefault(); goTo(paymentPlansRoute()); }}
                className={isPaymentPlans ? activeLinkCls : linkCls}
              >
                Payment Plans
                <span className={isPaymentPlans ? "absolute bottom-0 left-0 h-px w-full bg-pvc-gold" : underline} />
              </a>
              <a
                href="/contact"
                onClick={e => { e.preventDefault(); goTo("/contact"); }}
                className={isContact ? activeLinkCls : linkCls}
              >
                Contact Us
                <span className={isContact ? "absolute bottom-0 left-0 h-px w-full bg-pvc-gold" : underline} />
              </a>
            </>
          ) : (
            globalRightLinks.map(link => {
              const href =
                link === "Contact"  ? "/contact"  :
                link === "About Us" ? "/about"    :
                link === "Gallery"  ? "/#gallery" : "/";
              const isActive =
                (link === "Contact"  && isContact) ||
                (link === "About Us" && isAbout);
              return (
                <a
                  key={link}
                  href={href}
                  onClick={e => { e.preventDefault(); goTo(href); }}
                  className={isActive ? activeLinkCls : linkCls}
                >
                  {link}
                  <span className={isActive ? "absolute bottom-0 left-0 h-px w-full bg-pvc-gold" : underline} />
                </a>
              );
            })
          )}

          {/* Enquire Now */}
          <div className="ml-auto">
            <button
              type="button"
              onClick={() => goTo("/contact#contact-form")}
              className={enquireNowCls}
            >
              <Phone className="h-3 w-3" />
              Enquire Now
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile bar ──────────────────────────────────────────── */}
      <div className="relative z-10 flex h-[70px] items-center justify-between px-5 lg:hidden">
        <a
          href="/"
          onClick={e => { e.preventDefault(); goTo("/"); }}
          className="flex items-center"
        >
          <img
            src={logoSrc}
            alt="Park View City"
            className="h-[52px] w-auto object-contain transition-opacity duration-300"
          />
        </a>
        <button
          className={["transition-colors duration-200 cursor-pointer p-2", solid ? "text-pvc-ink" : "text-white"].join(" ")}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(v => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* ── Mobile dropdown ─────────────────────────────────────── */}
      {open && (
        <div className="absolute inset-x-0 top-[70px] z-50 bg-white/95 backdrop-blur-2xl shadow-xl lg:hidden">
          <nav className="flex flex-col divide-y divide-gray-100 px-6 py-2">
            {(isLahore || isIslamabad) ? (
              <>
                {cityScrollLinks.map(({ label, id }) => (
                  <a
                    key={label}
                    href={`${cityBase}#${id}`}
                    onClick={e => { e.preventDefault(); goToCitySection(id); }}
                    className="flex items-center py-4 font-roboto text-sm font-light uppercase tracking-[0.18em] text-pvc-ink/75 transition-colors hover:text-pvc-gold cursor-pointer"
                  >
                    {label}
                  </a>
                ))}
                <a
                  href={paymentPlansRoute()}
                  onClick={e => { e.preventDefault(); goTo(paymentPlansRoute()); }}
                  className={[
                    "flex items-center py-4 font-roboto text-sm font-light uppercase tracking-[0.18em] transition-colors cursor-pointer",
                    isPaymentPlans ? "text-pvc-gold" : "text-pvc-ink/75 hover:text-pvc-gold",
                  ].join(" ")}
                >
                  Payment Plans
                </a>
                <a
                  href="/contact"
                  onClick={e => { e.preventDefault(); goTo("/contact"); }}
                  className={[
                    "flex items-center py-4 font-roboto text-sm font-light uppercase tracking-[0.18em] transition-colors cursor-pointer",
                    isContact ? "text-pvc-gold" : "text-pvc-ink/75 hover:text-pvc-gold",
                  ].join(" ")}
                >
                  Contact Us
                </a>
              </>
            ) : (
              [...globalLeftLinks, ...globalRightLinks].map(link => {
                const href =
                  link === "Lahore"    ? "/lahore"    :
                  link === "Islamabad" ? "/islamabad" :
                  link === "Parkview City UK" ? "/uk" :
                  link === "Contact"   ? "/contact"   :
                  link === "About Us"  ? "/about"     :
                  link === "Gallery"   ? "/#gallery"  : "/";
                const isActive =
                  (link === "Lahore"    && isLahore)    ||
                  (link === "Islamabad" && isIslamabad)  ||
                  (link === "Parkview City UK" && isUk)   ||
                  (link === "Contact"   && isContact)    ||
                  (link === "About Us"  && isAbout);
                return (
                  <a
                    key={link}
                    href={href}
                    onClick={e => { e.preventDefault(); goTo(href); }}
                    className={[
                      "flex items-center py-4 font-roboto text-sm font-light uppercase tracking-[0.18em] transition-colors cursor-pointer",
                      isActive ? "text-pvc-gold" : "text-pvc-ink/75 hover:text-pvc-green",
                    ].join(" ")}
                  >
                    {link}
                  </a>
                );
              })
            )}
            <button
              type="button"
              onClick={() => goTo("/contact#contact-form")}
              className="flex items-center gap-2 py-4 font-roboto text-sm font-light uppercase tracking-[0.18em] text-pvc-gold transition-colors hover:text-pvc-green cursor-pointer text-left"
            >
              <Phone className="h-4 w-4" />
              Enquire Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
