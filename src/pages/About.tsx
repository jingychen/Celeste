import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 md:pt-36 pb-20 md:pb-32 px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          <div>
            <span className="text-gold text-[11px] tracking-[0.3em] uppercase font-normal">About</span>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-light text-foreground leading-[0.9] tracking-tight mt-4">
              A Space<br />
              for the<br />
              <span className="italic font-normal text-gradient-gold">Extraordinary</span>
            </h1>
          </div>

          <div className="flex flex-col justify-end">
            <p className="text-foreground/35 text-[15px] font-light leading-[1.9] mb-6">
              Founded in London, Celeste Gallery is dedicated to contemporary art and avant-garde digital art. We represent a curated roster of artists whose works challenge perception and redefine boundaries.
            </p>
            <p className="text-foreground/35 text-[15px] font-light leading-[1.9]">
              Our mission is to create a platform where artistic vision meets global audiences — through physical exhibitions, digital experiences, and meaningful collector relationships.
            </p>

            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border">
              <div>
                <p className="text-4xl md:text-5xl font-light text-foreground editorial-number">10<span className="text-gold">+</span></p>
                <p className="text-[11px] text-foreground/30 tracking-[0.15em] uppercase mt-3">Exhibitions</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-light text-foreground editorial-number">30</p>
                <p className="text-[11px] text-foreground/30 tracking-[0.15em] uppercase mt-3">Artists</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-light text-foreground editorial-number">12</p>
                <p className="text-[11px] text-foreground/30 tracking-[0.15em] uppercase mt-3">Countries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default About;
