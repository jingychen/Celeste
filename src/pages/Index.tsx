import HeroSection from "@/components/HeroSection";
import KeepInTouchSection from "@/components/KeepInTouchSection";
import ExhibitionSection from "@/components/ExhibitionSection";
import ArtistsSection from "@/components/ArtistsSection";
import OpenCallSection from "@/components/OpenCallSection";
import AwardsSection from "@/components/AwardsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <KeepInTouchSection />
      <ExhibitionSection />
      <ArtistsSection />
      <OpenCallSection />
      <AwardsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
