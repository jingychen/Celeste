import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { exhibitions } from "@/data/exhibitions";

const ExhibitionSection = () => {
  return (
    <section id="exhibition" className="bg-background py-20 md:py-32">
      {/* Section Header */}
      <div className="px-6 md:px-12 lg:px-20 mb-16 md:mb-24">
        <div className="flex items-start gap-4">
          <span className="text-gold text-[11px] tracking-[0.3em] uppercase font-normal mt-3">Exhibition</span>
          <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-light text-foreground leading-[0.9] tracking-tight">
            Current &<br />
            <span className="italic font-normal text-foreground/60">Upcoming</span>
          </h2>
        </div>
      </div>

      {/* Exhibition List */}
      <div className="px-6 md:px-12 lg:px-20">
        {exhibitions.map((ex, i) => (
          <Link
            to={`/exhibition/${ex.slug}`}
            key={i}
            className="group block cursor-pointer border-t border-border py-10 md:py-16 md:flex md:gap-16 items-start"
          >
            {/* Poster — alternates left/right */}
            <div className={`shrink-0 overflow-hidden w-full md:w-[344px] mb-6 md:mb-0 ${i % 2 !== 0 ? "md:order-2" : ""}`}>
              <div className="relative h-[458px]">
                <img
                  src={ex.poster || ex.image}
                  alt={ex.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                />
              </div>
            </div>

            {/* Text */}
            <div className={`flex flex-col justify-between flex-1 h-[458px] ${i % 2 !== 0 ? "md:order-1" : ""}`}>
              <div>
                <span className="text-foreground/20 text-[11px] tracking-[0.2em] font-normal">{ex.number}</span>
                <h3 className="text-3xl md:text-5xl font-light text-foreground mt-6 mb-4 tracking-tight leading-[1.05] group-hover:text-gold transition-colors duration-500">
                  {ex.title}
                </h3>
                <p className="text-sm text-foreground/40 font-light mb-6 tracking-wide">{ex.artist}</p>
                {ex.description && (
                  <p className="text-sm text-foreground/50 font-light leading-loose line-clamp-6 max-w-sm">{ex.description}</p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[12px] text-foreground/30 tracking-[0.15em] uppercase">{ex.date}</p>
                <ArrowUpRight size={18} className="text-foreground/20 group-hover:text-gold transition-colors duration-500" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ExhibitionSection;
