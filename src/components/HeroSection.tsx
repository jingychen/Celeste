import Navbar from "@/components/Navbar";
import { ArrowUpRight } from "lucide-react";

const VIRTUAL_EXHIBITION_URL = "https://art.kunstmatrix.com/apps/artspaces/?external=true&language=en&uid=142727&exhibition=15493473";

const HeroSection = () => {
  return (
    <>
      {/* Now Showing — Virtual Exhibition iframe */}
      <section className="relative w-full bg-background">
        <Navbar />

        <div className="pt-28 md:pt-32 pb-16 md:pb-24 px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-end">
            <div>
              <p className="text-gold text-[11px] tracking-[0.3em] uppercase font-normal mb-6">
                Now Showing — Virtual Exhibition
              </p>
              <h1 className="text-gradient-hero text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[0.95] tracking-tight">
                Synthesized
                <br />
                <span className="italic font-normal">Empathy</span>
              </h1>
              <p className="text-foreground/40 text-sm font-light mt-8 max-w-md leading-relaxed">
                Step inside our 3D virtual gallery and explore the exhibition in your browser.
              </p>
              <a
                href={VIRTUAL_EXHIBITION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-3 text-gold text-[13px] tracking-[0.1em] uppercase font-normal border-b border-gold/40 pb-2 hover:text-foreground hover:border-foreground transition-colors duration-500"
              >
                Enter Exhibition <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="w-full overflow-hidden border border-border">
              <iframe
                title="Virtual Exhibition — Synthesized Empathy"
                src={VIRTUAL_EXHIBITION_URL}
                allowFullScreen
                loading="lazy"
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Original brand hero — video background */}
      <section className="relative h-screen w-full overflow-hidden bg-background border-t border-border">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-background/60" />

        <div className="absolute bottom-0 left-0 right-0 z-20 px-6 md:px-12 lg:px-20 pb-12 md:pb-20">
          <div className="max-w-5xl">
            <p className="text-foreground/40 text-[11px] tracking-[0.3em] uppercase font-normal mb-6">
              Celeste Gallery — Est. 2020
            </p>
            <h2 className="text-gradient-hero text-[clamp(2.5rem,8vw,7rem)] font-light leading-[0.95] tracking-tight">
              Art that
              <br />
              <span className="italic font-normal">thinks</span>
            </h2>
            <div className="mt-8 md:mt-12 flex items-end justify-between">
              <p className="text-foreground/40 text-sm font-light max-w-xs leading-relaxed hidden md:block">
                Not just a gallery. A signal from the future.
              </p>
              <p className="text-foreground/30 text-[11px] tracking-[0.2em] uppercase">
                Scroll to explore ↓
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
