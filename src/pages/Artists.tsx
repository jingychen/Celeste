import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { artists } from "@/data/artists";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Artists = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 md:pt-36 pb-16 md:pb-24 px-6 md:px-12 lg:px-20">
        <span className="text-gold text-[11px] tracking-[0.3em] uppercase font-normal">Represented</span>
        <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-light text-foreground leading-[0.9] tracking-tight mt-4">
          Signed<br />
          <span className="italic font-normal text-foreground/60">Artists</span>
        </h1>
      </section>

      <section className="px-6 md:px-12 lg:px-20 pb-24">
        {artists.map((artist, i) => (
          <Link
            to={`/artist/${artist.slug}`}
            key={i}
            className="group flex flex-col md:flex-row md:items-center border-t border-border px-0 py-6 md:py-0 hover:bg-secondary/50 transition-colors duration-500 cursor-pointer"
          >
            <div className="w-full md:w-[200px] h-[280px] md:h-[160px] overflow-hidden shrink-0 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 md:mr-12">
              <img
                src={artist.portrait}
                alt={artist.name}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-3xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight mt-4 md:mt-0 flex-1 group-hover:text-gold transition-colors duration-500">
              {artist.name}
            </h3>

            <div className="flex items-center gap-8 mt-4 md:mt-0">
              <span className="text-[12px] text-foreground/30 tracking-[0.1em] uppercase hidden md:block">{artist.medium}</span>
              <span className="text-[12px] text-foreground/20 tracking-[0.1em] uppercase hidden lg:block">{artist.location}</span>
              <ArrowUpRight size={18} className="text-foreground/20 group-hover:text-gold transition-colors duration-500" />
            </div>
          </Link>
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default Artists;
