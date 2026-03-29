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

      {/* Exhibition Grid — asymmetric */}
      <div className="px-6 md:px-12 lg:px-20">
        {exhibitions.map((ex, i) => (
          <Link
            to={`/exhibition/${ex.slug}`}
            key={i}
            className={`group block cursor-pointer border-t border-border py-8 md:py-12 ${
              i === 0 ? "md:grid md:grid-cols-[1fr_1.5fr] md:gap-12 items-start" :
              i === 1 ? "md:grid md:grid-cols-[1.5fr_1fr] md:gap-12 items-start" :
              "md:grid md:grid-cols-[1fr_1.5fr] md:gap-12 items-start"
            }`}
          >
            {/* Text */}
            <div className={`flex flex-col justify-between h-full ${i === 1 ? "md:order-2" : ""}`}>
              <div>
                <span className="text-foreground/20 text-[11px] tracking-[0.2em] font-normal editorial-number">{ex.number}</span>
                <h3 className="text-2xl md:text-4xl font-light text-foreground mt-4 mb-3 tracking-tight group-hover:text-gold transition-colors duration-500">
                  {ex.title}
                </h3>
                <p className="text-sm text-foreground/40 font-light">{ex.artist}</p>
              </div>
              <div className="flex items-center justify-between mt-6">
                <p className="text-[12px] text-foreground/30 tracking-[0.1em] uppercase">{ex.date}</p>
                <ArrowUpRight size={18} className="text-foreground/20 group-hover:text-gold transition-colors duration-500" />
              </div>
            </div>

            {/* Image */}
            <div className={`overflow-hidden mt-6 md:mt-0 ${i === 1 ? "md:order-1" : ""}`}>
              <img
                src={ex.image}
                alt={ex.title}
                loading="lazy"
                className="w-full h-[300px] md:h-[450px] object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ExhibitionSection;
