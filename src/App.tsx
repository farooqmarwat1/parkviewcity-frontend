import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroStack from "@/components/HeroStack";
import CuratedSection from "@/components/CuratedSection";
import StatsSection from "@/components/StatsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        {/* S1 — Cinematic hero panels (snap scroll) */}
        <HeroStack />
        {/* S2 — Curated living: logos + parallax masonry */}
        <CuratedSection />
        {/* S3 — Stats band with animated counters */}
        <StatsSection />
        {/* S4 — Discover Your Dream Property */}
        <ProjectsSection />
        {/* S5 — Amenities */}
        <AmenitiesSection />
        {/* S6 — Contact / Enquiry */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
