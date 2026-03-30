import { useParams, Link } from "react-router-dom";
import { artists } from "@/data/artists";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ArtistDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const artist = artists.find((a) => a.slug === slug);

  if (!artist) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-foreground/40">Artist not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 md:pt-36 pb-16 md:pb-24 px-6 md:px-12 lg:px-20">
        <Link
          to="/artists"
          className="inline-flex items-center gap-2 text-foreground/30 text-[12px] tracking-[0.15em] uppercase hover:text-gold transition-colors duration-500 mb-12 md:mb-16"
        >
          <ArrowLeft size={14} /> Back to Artists
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12 lg:gap-20 items-start">
          {/* Portrait */}
          <div className="w-full max-w-[380px] mx-auto lg:mx-0">
            <img
              src={artist.portrait}
              alt={artist.name}
              className="w-full h-[480px] object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-between min-h-[400px]">
            <div>
              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-light text-foreground leading-[0.9] tracking-tight">
                {artist.name.split(" ")[0]}
                <br />
                <span className="italic font-normal text-foreground/60">
                  {artist.name.split(" ").slice(1).join(" ")}
                </span>
              </h1>

              <div className="mt-10 space-y-4">
                <div className="flex items-baseline gap-8">
                  <span className="text-[11px] text-foreground/20 tracking-[0.15em] uppercase w-20 shrink-0">Medium</span>
                  <span className="text-foreground/60 text-sm font-light">{artist.medium}</span>
                </div>
                <div className="flex items-baseline gap-8">
                  <span className="text-[11px] text-foreground/20 tracking-[0.15em] uppercase w-20 shrink-0">Based in</span>
                  <span className="text-foreground/60 text-sm font-light">{artist.location}</span>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border space-y-6">
              {artist.bio.map((para, i) => (
                <p key={i} className="text-foreground/35 text-[15px] font-light leading-[1.9]">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Works */}
      <section className="border-t border-border py-16 md:py-24 px-6 md:px-12 lg:px-20">
        <span className="text-gold text-[11px] tracking-[0.3em] uppercase font-normal">Selected Works</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">
          {artist.works.map((work, i) => (
            <div key={i} className="group">
              <div className="overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  loading="lazy"
                  className="w-full h-[350px] md:h-[400px] object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <h3 className="text-foreground/60 text-sm font-light">{work.title}</h3>
                <span className="text-foreground/20 text-[11px] tracking-[0.1em]">{work.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ArtistDetail;
