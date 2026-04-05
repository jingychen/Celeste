import Navbar from "@/components/Navbar";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/60" />

      {/* Navbar */}
      <Navbar />

      {/* Hero Content — bottom-left aligned, editorial */}
      <div className="absolute bottom-0 left-0 right-0 z-20 px-6 md:px-12 lg:px-20 pb-12 md:pb-20">
        <div className="max-w-5xl">
          <p className="text-foreground/40 text-[11px] tracking-[0.3em] uppercase font-normal mb-6">
            Celeste Gallery — Est. 2020
          </p>
          <h1 className="text-gradient-hero text-[clamp(2.5rem,8vw,7rem)] font-light leading-[0.95] tracking-tight">
            Art that
            <br />
            <span className="italic font-normal">thinks</span>
          </h1>
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
  );
};

export default HeroSection;
