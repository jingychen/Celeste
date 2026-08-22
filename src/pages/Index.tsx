import HeroSection from "@/components/HeroSection";
import OpenCallSection from "@/components/OpenCallSection";
import InterviewApplySection from "@/components/InterviewApplySection";
import KeepInTouchSection from "@/components/KeepInTouchSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <OpenCallSection />
      <InterviewApplySection />
      <KeepInTouchSection />
      <Footer />
    </div>
  );
};

export default Index;
