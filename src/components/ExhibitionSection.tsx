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
      <div className="pb-8">
        {exhibitions.map((ex, i) => (
          <Link
            to={`/exhibition/${ex.slug}`}
            key={i}
            className="group block cursor-pointer border-t border-border"
          >
            <div className={`px-6 md:px-12 lg:px-20 py-12 md:py-20 md:flex md:gap-20 items-start ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>

              {/* Poster */}
              <div className="shrink-0 w-full md:w-[38%] overflow-hidden mb-8 md:mb-0">
                <div className="relative aspect-[3/4]">
                  <img
                    src={ex.poster || ex.image}
                    alt={ex.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col justify-between flex-1 md:py-4">
                <div>
                  <span className="text-foreground/20 text-[11px] tracking-[0.3em] uppercase font-normal">{ex.number}</span>
                  <h3 className="text-4xl md:text-6xl lg:text-7xl font-light text-foreground mt-5 mb-5 tracking-tight leading-[1] group-hover:text-gold transition-colors duration-500">
                    {ex.title}
                  </h3>
                  <p className="text-[13px] text-foreground/40 tracking-[0.15em] uppercase font-normal mb-8">{ex.artist}</p>
                  {Array.isArray(ex.description) && ex.description[0] && (
                    <p className="text-sm md:text-base text-foreground/50 font-light leading-loose max-w-md">{ex.description[0]}</p>
                  )}
                </div>
                <div className="flex items-center justify-between mt-12 md:mt-16">
                  <p className="text-[12px] text-foreground/30 tracking-[0.2em] uppercase">{ex.date}</p>
                  <div className="flex items-center gap-2 text-foreground/20 group-hover:text-gold transition-colors duration-500">
                    <span className="text-[11px] tracking-[0.15em] uppercase">View</span>
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ExhibitionSection;
