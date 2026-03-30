import { useParams, Link } from "react-router-dom";
import { exhibitions } from "@/data/exhibitions";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";

const ExhibitionDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const exhibition = exhibitions.find((e) => e.slug === slug);
  const currentIndex = exhibitions.findIndex((e) => e.slug === slug);
  const nextExhibition = exhibitions[(currentIndex + 1) % exhibitions.length];
  const prevExhibition = exhibitions[(currentIndex - 1 + exhibitions.length) % exhibitions.length];

  if (!exhibition) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-foreground/40">Exhibition not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero — poster + title side by side */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-24 px-6 md:px-12 lg:px-20">
        <Link
          to="/exhibitions"
          className="inline-flex items-center gap-2 text-foreground/30 text-[12px] tracking-[0.15em] uppercase hover:text-gold transition-colors duration-500 mb-12 md:mb-16"
        >
          <ArrowLeft size={14} /> Back to Exhibitions
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12 lg:gap-20 items-start">
          {/* Poster — portrait, prominent */}
          <div className="w-full max-w-[400px] lg:max-w-[440px] mx-auto lg:mx-0">
            <div className="relative">
              <img
                src={exhibition.poster}
                alt={`${exhibition.title} poster`}
                width={700}
                height={1000}
                className="w-full h-auto object-cover"
              />
              {/* Subtle shadow beneath poster */}
              <div className="absolute -bottom-6 left-4 right-4 h-12 bg-gold/5 blur-2xl" />
            </div>
          </div>

          {/* Title & Meta — right side */}
          <div className="flex flex-col justify-between min-h-[400px] lg:min-h-[560px]">
            <div>
              <span className="text-foreground/15 text-[11px] tracking-[0.2em] font-normal editorial-number">
                {exhibition.number}
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-light text-foreground leading-[0.9] tracking-tight mt-4">
                {exhibition.title.split(" ").slice(0, -1).join(" ")}
                <br />
                <span className="italic font-normal text-foreground/60">
                  {exhibition.title.split(" ").slice(-1)}
                </span>
              </h1>

              <div className="mt-10 space-y-4">
                <div className="flex items-baseline gap-8">
                  <span className="text-[11px] text-foreground/20 tracking-[0.15em] uppercase w-20 shrink-0">Artist</span>
                  <span className="text-foreground/60 text-sm font-light">{exhibition.artist}</span>
                </div>
                <div className="flex items-baseline gap-8">
                  <span className="text-[11px] text-foreground/20 tracking-[0.15em] uppercase w-20 shrink-0">Date</span>
                  <span className="text-foreground/60 text-sm font-light">{exhibition.date}</span>
                </div>
                <div className="flex items-baseline gap-8">
                  <span className="text-[11px] text-foreground/20 tracking-[0.15em] uppercase w-20 shrink-0">Location</span>
                  <span className="text-foreground/60 text-sm font-light">{exhibition.location}</span>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border grid grid-cols-3 gap-6">
              <div>
                <p className="text-[11px] text-foreground/20 tracking-[0.15em] uppercase mb-2">Medium</p>
                <p className="text-foreground/50 text-[13px] font-light leading-relaxed">{exhibition.details.medium}</p>
              </div>
              <div>
                <p className="text-[11px] text-foreground/20 tracking-[0.15em] uppercase mb-2">Works</p>
                <p className="text-foreground/50 text-[13px] font-light leading-relaxed">{exhibition.details.works}</p>
              </div>
              <div>
                <p className="text-[11px] text-foreground/20 tracking-[0.15em] uppercase mb-2">Curated by</p>
                <p className="text-foreground/50 text-[13px] font-light leading-relaxed">{exhibition.details.curated}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="border-t border-border py-16 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-32">
          <div>
            <span className="text-gold text-[11px] tracking-[0.3em] uppercase font-normal">About the Exhibition</span>
          </div>
          <div className="space-y-8">
            {exhibition.description.map((para, i) => (
              <p key={i} className="text-foreground/35 text-[15px] font-light leading-[1.9]">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Exhibition Image — full width */}
      <section className="px-6 md:px-12 lg:px-20 pb-16 md:pb-24">
        <div className="overflow-hidden">
          <img
            src={exhibition.image}
            alt={exhibition.title}
            loading="lazy"
            className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover"
          />
        </div>
      </section>

      {/* Prev / Next navigation */}
      <section className="border-t border-border">
        <div className="grid grid-cols-2">
          <Link
            to={`/exhibition/${prevExhibition.slug}`}
            className="group border-r border-border px-6 md:px-12 lg:px-20 py-12 md:py-16 hover:bg-secondary/30 transition-colors duration-500"
          >
            <div className="flex items-center gap-3 text-foreground/20 text-[11px] tracking-[0.15em] uppercase mb-4">
              <ArrowLeft size={14} /> Previous
            </div>
            <p className="text-lg md:text-2xl font-light text-foreground/50 group-hover:text-foreground transition-colors duration-500 tracking-tight">
              {prevExhibition.title}
            </p>
          </Link>

          <Link
            to={`/exhibition/${nextExhibition.slug}`}
            className="group px-6 md:px-12 lg:px-20 py-12 md:py-16 text-right hover:bg-secondary/30 transition-colors duration-500"
          >
            <div className="flex items-center justify-end gap-3 text-foreground/20 text-[11px] tracking-[0.15em] uppercase mb-4">
              Next <ArrowRight size={14} />
            </div>
            <p className="text-lg md:text-2xl font-light text-foreground/50 group-hover:text-foreground transition-colors duration-500 tracking-tight">
              {nextExhibition.title}
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ExhibitionDetail;
