import { ArrowUpRight } from "lucide-react";
import settings from "../../content/settings.json";

const InterviewApplySection = () => {
  if (!settings.interviewApplyUrl) return null;

  return (
    <section className="bg-background border-t border-border py-20 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16 lg:gap-32 items-end">
        <div>
          <span className="text-gold text-[11px] tracking-[0.3em] uppercase font-normal">
            In Conversation
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-light text-foreground leading-[0.9] tracking-tight mt-4 mb-10">
            Share Your<br />
            <span className="italic font-normal text-foreground/60">Practice</span>
          </h2>
          <a
            href={settings.interviewApplyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-gold text-[13px] tracking-[0.1em] uppercase font-normal border-b border-gold/40 pb-2 hover:text-foreground hover:border-foreground transition-colors duration-500"
          >
            Apply for an Interview <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="flex flex-col justify-end">
          <p className="text-foreground/55 text-[15px] font-light leading-[1.8]">
            We are always looking to speak with artists whose practice challenges, questions, or reimagines the world around us.
          </p>
          <p className="text-foreground/55 text-[15px] font-light leading-[1.8] mt-4">
            If you would like to be featured in our Interview series, we would love to hear from you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InterviewApplySection;
