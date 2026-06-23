import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { exhibitions, Exhibition } from "@/data/exhibitions";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const upcoming = exhibitions.filter((ex) => ex.status !== 'past');
const past = exhibitions.filter((ex) => ex.status === 'past');

const ExhibitionList = ({ list, offset = 0 }: { list: Exhibition[]; offset?: number }) => (
  <div>
    {list.map((ex, i) => (
      <Link
        to={`/exhibition/${ex.slug}`}
        key={ex.slug}
        className="group block cursor-pointer border-t border-border"
      >
        <div className={`px-6 md:px-12 lg:px-20 py-12 md:py-20 md:flex md:gap-20 items-start ${(i + offset) % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
          <div className="shrink-0 w-full md:w-[38%] overflow-hidden mb-8 md:mb-0">
            <div className="relative aspect-[3/4]">
              <img
                src={ex.poster}
                alt={ex.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between flex-1 md:py-4">
            <div>
              <span className="text-foreground/20 text-[11px] tracking-[0.3em] uppercase font-normal">{ex.number}</span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-foreground mt-5 mb-5 tracking-tight leading-[1] group-hover:text-gold transition-colors duration-500">
                {ex.title}
              </h2>
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
    <div className="border-t border-border" />
  </div>
);

const Exhibitions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Upcoming */}
      <section className="pt-28 md:pt-40 pb-12 md:pb-20 px-6 md:px-12 lg:px-20">
        <span className="text-gold text-[11px] tracking-[0.3em] uppercase font-normal">Upcoming</span>
        <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-light text-foreground leading-[0.9] tracking-tight mt-4">
          Upcoming<br />
          <span className="italic font-normal text-foreground/60">Exhibitions</span>
        </h1>
      </section>

      <section className="pb-20">
        {upcoming.length > 0 ? (
          <ExhibitionList list={upcoming} />
        ) : (
          <p className="px-6 md:px-12 lg:px-20 border-t border-border pt-12 text-foreground/30 text-sm font-light">
            No upcoming exhibitions at the moment.
          </p>
        )}
      </section>

      {/* Past */}
      {past.length > 0 && (
        <>
          <section className="pb-12 md:pb-20 px-6 md:px-12 lg:px-20 border-t border-border pt-20 md:pt-32">
            <span className="text-foreground/30 text-[11px] tracking-[0.3em] uppercase font-normal">Archive</span>
            <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-light text-foreground leading-[0.9] tracking-tight mt-4">
              Past<br />
              <span className="italic font-normal text-foreground/60">Exhibitions</span>
            </h2>
          </section>

          <section className="pb-32">
            <ExhibitionList list={past} />
          </section>
        </>
      )}

      <Footer />
    </div>
  );
};

export default Exhibitions;
