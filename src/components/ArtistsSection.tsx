import artist1 from "@/assets/artist-1.jpg";
import artist2 from "@/assets/artist-2.jpg";
import artist3 from "@/assets/artist-3.jpg";
import { ArrowUpRight } from "lucide-react";

const artists = [
  { name: "Marcus Veil", medium: "Oil on Canvas", image: artist1, location: "Berlin, DE" },
  { name: "Elena Sorano", medium: "Sculpture & Installation", image: artist2, location: "Milan, IT" },
  { name: "Leo Tanaka", medium: "Mixed Media", image: artist3, location: "Tokyo, JP" },
];

const ArtistsSection = () => {
  return (
    <section id="artists" className="bg-background border-t border-border">
      {/* Header */}
      <div className="px-6 md:px-12 lg:px-20 py-20 md:py-32">
        <span className="text-gold text-[11px] tracking-[0.3em] uppercase font-normal">Represented</span>
        <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-light text-foreground leading-[0.9] tracking-tight mt-4">
          Signed<br />
          <span className="italic font-normal text-foreground/60">Artists</span>
        </h2>
      </div>

      {/* Artist list — full-width editorial rows */}
      <div>
        {artists.map((artist, i) => (
          <a
            key={i}
            href="#"
            className="group flex flex-col md:flex-row md:items-center border-t border-border px-6 md:px-12 lg:px-20 py-6 md:py-0 hover:bg-secondary/50 transition-colors duration-500 cursor-pointer"
          >
            {/* Image — visible on hover for desktop, always visible mobile */}
            <div className="w-full md:w-[200px] h-[280px] md:h-[160px] overflow-hidden shrink-0 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 md:mr-12">
              <img
                src={artist.image}
                alt={artist.name}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name — large */}
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight mt-4 md:mt-0 flex-1 group-hover:text-gold transition-colors duration-500">
              {artist.name}
            </h3>

            {/* Meta */}
            <div className="flex items-center gap-8 mt-4 md:mt-0">
              <span className="text-[12px] text-foreground/30 tracking-[0.1em] uppercase hidden md:block">{artist.medium}</span>
              <span className="text-[12px] text-foreground/20 tracking-[0.1em] uppercase hidden lg:block">{artist.location}</span>
              <ArrowUpRight size={18} className="text-foreground/20 group-hover:text-gold transition-colors duration-500" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ArtistsSection;
