import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Awards = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 md:pt-36 pb-20 md:pb-32 px-6 md:px-12 lg:px-20 flex flex-col items-center justify-center min-h-[60vh]">
        <span className="text-gold text-[11px] tracking-[0.3em] uppercase font-normal">Recognition</span>
        <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-light text-foreground leading-[0.9] tracking-tight mt-4 text-center">
          Coming<br />
          <span className="italic font-normal text-foreground/60">Soon</span>
        </h1>
        <p className="text-foreground/30 text-[15px] font-light mt-10 text-center max-w-md">
          Our awards programme is currently being curated. Stay tuned for announcements.
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default Awards;
