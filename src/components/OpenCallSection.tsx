import { ArrowUpRight } from "lucide-react";

const OpenCallSection = () => {
  return (
    <section id="open-call" className="bg-background border-t border-border py-20 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16 lg:gap-32">
        <div>
          <span className="text-gold text-[11px] tracking-[0.3em] uppercase font-normal">Open Call</span>
          <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-light text-foreground leading-[0.9] tracking-tight mt-4 mb-10">
            Submit<br />
            Your <span className="italic font-normal text-foreground/60">Work</span>
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-3 text-foreground/50 text-[13px] tracking-[0.1em] uppercase font-normal border-b border-foreground/20 pb-2 hover:text-gold hover:border-gold transition-colors duration-500"
          >
            Apply Now <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="flex flex-col justify-end">
          <p className="text-foreground/35 text-[15px] font-light leading-[1.8]">
            We invite emerging and established artists to submit proposals for our upcoming exhibition seasons.
          </p>
          <p className="text-foreground/35 text-[15px] font-light leading-[1.8] mt-4">
            All mediums welcome — painting, sculpture, digital, installation, and performance.
          </p>
          <div className="mt-10 pt-6 border-t border-border">
            <p className="text-[11px] text-foreground/20 tracking-[0.2em] uppercase">Deadline</p>
            <p className="text-foreground/60 text-lg font-light mt-1">September 30, 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenCallSection;
