import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { exhibitions } from "@/data/exhibitions";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Exhibitions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 md:pt-36 pb-16 md:pb-24 px-6 md:px-12 lg:px-20">
        <span className="text-gold text-[11px] tracking-[0.3em] uppercase font-normal">Archive</span>
        <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-light text-foreground leading-[0.9] tracking-tight mt-4">
          All<br />
          <span className="italic font-normal text-foreground/60">Exhibitions</span>
        </h1>
      </section>

      <section className="px-6 md:px-12 lg:px-20 pb-24">
        {exhibitions.map((ex, i) => (
          <Link
            to={`/exhibition/${ex.slug}`}
            key={i}
            className={`group block cursor-pointer border-t border-border py-10 md:py-14 md:grid md:gap-16 items-center ${
              i % 2 === 0
                ? "md:grid-cols-[1fr_344px]"
                : "md:grid-cols-[344px_1fr]"
            }`}
          >
            <div className={`flex flex-col justify-between h-full ${i % 2 !== 0 ? "md:order-2" : ""}`}>
              <div>
                <span className="text-foreground/20 text-[11px] tracking-[0.2em] font-normal editorial-number">{ex.number}</span>
                <h3 className="text-2xl md:text-4xl font-light text-foreground mt-4 mb-3 tracking-tight group-hover:text-gold transition-colors duration-500">
                  {ex.title}
                </h3>
                <p className="text-sm text-foreground/40 font-light mb-4">{ex.artist}</p>
                {ex.description && (
                  <p className="text-sm text-foreground/50 font-light leading-relaxed line-clamp-4">{ex.description}</p>
                )}
              </div>
              <div className="flex items-center justify-between mt-8">
                <p className="text-[12px] text-foreground/30 tracking-[0.1em] uppercase">{ex.date}</p>
                <ArrowUpRight size={18} className="text-foreground/20 group-hover:text-gold transition-colors duration-500" />
              </div>
            </div>

            <div className={`overflow-hidden mt-6 md:mt-0 ${i % 2 !== 0 ? "md:order-1" : ""}`}>
              <div className="relative h-[458px] w-full">
                <img
                  src={ex.image}
                  alt={ex.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </Link>
        ))}
        <div className="border-t border-border" />
      </section>

      <Footer />
    </div>
  );
};

export default Exhibitions;
