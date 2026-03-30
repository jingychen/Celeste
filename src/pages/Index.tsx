import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import KeepInTouchSection from "@/components/KeepInTouchSection";
import { exhibitions } from "@/data/exhibitions";
import Footer from "@/components/Footer";

const Index = () => {
  const latest = exhibitions[0];

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <KeepInTouchSection />

      {/* Latest Exhibition */}
      <section className="bg-background py-20 md:py-32">
        <div className="px-6 md:px-12 lg:px-20 mb-16 md:mb-24">
          <div className="flex items-start gap-4">
            <span className="text-gold text-[11px] tracking-[0.3em] uppercase font-normal mt-3">Exhibition</span>
            <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-light text-foreground leading-[0.9] tracking-tight">
              Current<br />
              <span className="italic font-normal text-foreground/60">Exhibition</span>
            </h2>
          </div>
        </div>

        <div className="px-6 md:px-12 lg:px-20">
          <Link
            to={`/exhibition/${latest.slug}`}
            className="group block cursor-pointer border-t border-b border-border py-8 md:py-12 md:grid md:grid-cols-[1fr_1.5fr] md:gap-12 items-start"
          >
            <div className="flex flex-col justify-between h-full">
              <div>
                <span className="text-foreground/20 text-[11px] tracking-[0.2em] font-normal editorial-number">{latest.number}</span>
                <h3 className="text-2xl md:text-4xl font-light text-foreground mt-4 mb-3 tracking-tight group-hover:text-gold transition-colors duration-500">
                  {latest.title}
                </h3>
                <p className="text-sm text-foreground/40 font-light">{latest.artist}</p>
              </div>
              <div className="flex items-center justify-between mt-6">
                <p className="text-[12px] text-foreground/30 tracking-[0.1em] uppercase">{latest.date}</p>
                <ArrowUpRight size={18} className="text-foreground/20 group-hover:text-gold transition-colors duration-500" />
              </div>
            </div>

            <div className="overflow-hidden mt-6 md:mt-0">
              <img
                src={latest.image}
                alt={latest.title}
                loading="lazy"
                className="w-full h-[300px] md:h-[450px] object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </Link>

          <div className="mt-10">
            <Link
              to="/exhibitions"
              className="inline-flex items-center gap-3 text-foreground/50 text-[13px] tracking-[0.1em] uppercase font-normal border-b border-foreground/20 pb-2 hover:text-gold hover:border-gold transition-colors duration-500"
            >
              View All Exhibitions <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
