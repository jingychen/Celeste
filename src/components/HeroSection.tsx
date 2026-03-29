import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/50" />

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center pt-[200px] md:pt-[280px] pb-[102px] px-6">
        {/* Badge */}
        <div className="flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/10 px-4 py-2 mb-10">
          <span className="w-1 h-1 rounded-full bg-foreground" />
          <span className="text-[13px] font-medium text-foreground/60">
            Early access available from
          </span>
          <span className="text-[13px] font-medium text-foreground">
            May 1, 2026
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-gradient-hero text-4xl md:text-[56px] font-medium leading-[1.28] max-w-[613px]">
          Web3 at the Speed of Experience
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-[15px] font-normal text-foreground/70 max-w-[680px] leading-relaxed">
          Powering seamless experiences and real-time connections, EOS is the base for creators who move with purpose, leveraging resilience, speed, and scale to shape the future.
        </p>

        {/* CTA */}
        <Button variant="hero" className="mt-10 text-sm px-[29px] py-[11px] h-auto">
          Join Waitlist
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
