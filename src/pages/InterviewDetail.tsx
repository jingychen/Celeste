import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { interviews, InterviewBlock } from "@/data/interviews";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContentBlock = ({ block }: { block: InterviewBlock }) => {
  if (block.type === 'question') {
    return (
      <div className="flex gap-6 md:gap-10">
        <span className="text-gold text-[11px] tracking-[0.2em] uppercase font-normal shrink-0 mt-1 w-4">Q</span>
        <p className="text-foreground text-[15px] md:text-base font-normal leading-[1.85] tracking-wide">
          {block.text}
        </p>
      </div>
    );
  }

  if (block.type === 'answer') {
    return (
      <div className="flex gap-6 md:gap-10">
        <span className="text-foreground/20 text-[11px] tracking-[0.2em] uppercase font-normal shrink-0 mt-1 w-4">A</span>
        <p className="text-foreground/60 text-[15px] md:text-base font-light leading-[1.9]">
          {block.text}
        </p>
      </div>
    );
  }

  if (block.type === 'image' && block.src) {
    return (
      <div className="my-4">
        <img
          src={block.src}
          alt={block.caption ?? ''}
          loading="lazy"
          className="w-full object-cover"
        />
        {block.caption && (
          <p className="text-foreground/30 text-[12px] tracking-[0.1em] font-light mt-3 italic">
            {block.caption}
          </p>
        )}
      </div>
    );
  }

  return null;
};

const InterviewDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const interview = interviews.find((iv) => iv.slug === slug);
  const currentIndex = interviews.findIndex((iv) => iv.slug === slug);
  const prev = interviews[(currentIndex - 1 + interviews.length) % interviews.length];
  const next = interviews[(currentIndex + 1) % interviews.length];

  if (!interview) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-foreground/40">Interview not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-24 px-6 md:px-12 lg:px-20">
        <Link
          to="/interviews"
          className="inline-flex items-center gap-2 text-foreground/30 text-[12px] tracking-[0.15em] uppercase hover:text-gold transition-colors duration-500 mb-12 md:mb-16"
        >
          <ArrowLeft size={14} /> Back to Interviews
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-24 items-start">
          {/* Left — photo or decorative space */}
          <div>
            {interview.artistPhoto ? (
              <div className="overflow-hidden">
                <img
                  src={interview.artistPhoto}
                  alt={interview.artist}
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
            ) : (
              <div className="aspect-[3/4] bg-secondary/30 border border-border flex items-end p-8">
                <p className="text-foreground/15 text-[11px] tracking-[0.3em] uppercase">
                  {interview.artist}
                </p>
              </div>
            )}
          </div>

          {/* Right — title block */}
          <div className="flex flex-col justify-end h-full">
            <p className="text-gold text-[11px] tracking-[0.3em] uppercase font-normal mb-6">
              In Conversation — {interview.date}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-foreground leading-[0.95] tracking-tight mb-8">
              {interview.title.split(" ").slice(0, -1).join(" ")}
              <br />
              <span className="italic font-normal text-foreground/60">
                {interview.title.split(" ").slice(-1)}
              </span>
            </h1>
            <p className="text-foreground/35 text-[13px] tracking-[0.2em] uppercase font-normal">
              {interview.artist}
            </p>
          </div>
        </div>
      </section>

      {/* Interview content */}
      <section className="border-t border-border py-16 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-24">
          <div>
            <span className="text-gold text-[11px] tracking-[0.3em] uppercase font-normal">
              The Interview
            </span>
          </div>
          <div className="space-y-10">
            {interview.content.map((block, i) => (
              <ContentBlock key={i} block={block} />
            ))}
          </div>
        </div>
      </section>

      {/* Artist bio */}
      {interview.bio && (
        <section className="border-t border-border py-16 md:py-24 px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-24">
            <div>
              <span className="text-gold text-[11px] tracking-[0.3em] uppercase font-normal">
                Artist Bio
              </span>
            </div>
            <p className="text-foreground/55 text-[15px] font-light leading-[1.9]">
              {interview.bio}
            </p>
          </div>
        </section>
      )}

      {/* Prev / Next navigation — only shown when there are multiple interviews */}
      {interviews.length > 1 && (
        <section className="border-t border-border">
          <div className="grid grid-cols-2">
            <Link
              to={`/interview/${prev.slug}`}
              className="group border-r border-border px-6 md:px-12 lg:px-20 py-12 md:py-16 hover:bg-secondary/30 transition-colors duration-500"
            >
              <div className="flex items-center gap-3 text-foreground/20 text-[11px] tracking-[0.15em] uppercase mb-4">
                <ArrowLeft size={14} /> Previous
              </div>
              <p className="text-lg md:text-2xl font-light text-foreground/50 group-hover:text-foreground transition-colors duration-500 tracking-tight">
                {prev.title}
              </p>
            </Link>

            <Link
              to={`/interview/${next.slug}`}
              className="group px-6 md:px-12 lg:px-20 py-12 md:py-16 text-right hover:bg-secondary/30 transition-colors duration-500"
            >
              <div className="flex items-center justify-end gap-3 text-foreground/20 text-[11px] tracking-[0.15em] uppercase mb-4">
                Next <ArrowRight size={14} />
              </div>
              <p className="text-lg md:text-2xl font-light text-foreground/50 group-hover:text-foreground transition-colors duration-500 tracking-tight">
                {next.title}
              </p>
            </Link>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default InterviewDetail;
