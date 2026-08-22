import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { interviews } from "@/data/interviews";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Interviews = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-28 md:pt-40 pb-16 md:pb-24 px-6 md:px-12 lg:px-20">
        <span className="text-gold text-[11px] tracking-[0.3em] uppercase font-normal">
          In Conversation
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-light text-foreground leading-[0.9] tracking-tight mt-4">
          Artist
          <br />
          <span className="italic font-normal text-foreground/60">Interviews</span>
        </h1>
      </section>

      {/* Staggered card grid */}
      <section className="border-t border-border pb-32">
        {interviews.length === 0 ? (
          <p className="px-6 md:px-12 lg:px-20 pt-12 text-foreground/30 text-sm font-light">
            No interviews published yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2">
            {interviews.map((interview, i) => {
              // Alternate: even cards sit at top, odd cards pushed down
              const isOffset = i % 2 !== 0;
              return (
                <Link
                  key={interview.slug}
                  to={`/interview/${interview.slug}`}
                  className={`group block border-b border-border px-6 md:px-12 lg:px-16 py-16 md:py-24 hover:bg-secondary/20 transition-colors duration-500 ${
                    isOffset ? "md:mt-20" : ""
                  } ${i % 2 === 0 ? "md:border-r md:border-border" : ""}`}
                >
                  {/* Thumbnail */}
                  <div className="overflow-hidden mb-8 aspect-[4/3] w-full">
                    <img
                      src={interview.thumbnail}
                      alt={interview.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                    />
                  </div>

                  {/* Meta */}
                  <p className="text-foreground/25 text-[11px] tracking-[0.25em] uppercase font-normal mb-4">
                    {interview.date}
                  </p>

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-light text-foreground tracking-tight leading-[1.15] group-hover:text-gold transition-colors duration-500 mb-3">
                    {interview.title}
                  </h2>

                  {/* Artist */}
                  <p className="text-foreground/40 text-[13px] tracking-[0.12em] uppercase font-normal mb-8">
                    {interview.artist}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-foreground/20 group-hover:text-gold transition-colors duration-500">
                    <span className="text-[11px] tracking-[0.15em] uppercase">Read Interview</span>
                    <ArrowUpRight size={14} />
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Interviews;
