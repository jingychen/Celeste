import { ArrowUpRight } from "lucide-react";
import settings from "../../content/settings.json";

const OpenCallSection = () => {
  if (!settings.openCallEnabled) return null;

  const hasPoster = Boolean(settings.openCallPoster);

  return (
    <section id="open-call" className="bg-background border-t border-border py-20 md:py-32 px-6 md:px-12 lg:px-20">
      <div className={`grid grid-cols-1 gap-12 md:gap-16 lg:gap-24 ${hasPoster ? "lg:grid-cols-[auto_1fr] items-start" : "lg:grid-cols-[2fr_1fr]"}`}>

        {/* Poster — only rendered when provided */}
        {hasPoster && (
          <div className="w-full max-w-[320px] lg:max-w-[360px] mx-auto lg:mx-0 shrink-0">
            <img
              src={settings.openCallPoster}
              alt="Open Call poster"
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Text content */}
        <div className={`flex flex-col ${hasPoster ? "justify-start" : "justify-between"}`}>
          <div>
            <span className="text-gold text-[11px] tracking-[0.3em] uppercase font-normal">
              Open Call — Currently Open
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-light text-foreground leading-[0.9] tracking-tight mt-4 mb-10">
              Submit<br />
              Your <span className="italic font-normal text-foreground/60">Work</span>
            </h2>

            {!hasPoster && (
              <div className="mb-10 space-y-4">
                <p className="text-foreground/55 text-[15px] font-light leading-[1.8]">
                  We invite emerging and established artists to submit proposals for our upcoming exhibition seasons.
                </p>
                <p className="text-foreground/55 text-[15px] font-light leading-[1.8]">
                  All mediums welcome — painting, sculpture, digital, installation, and performance.
                </p>
              </div>
            )}

            {settings.openCallDeadline && (
              <div className="mb-10 pt-6 border-t border-border inline-block">
                <p className="text-[11px] text-foreground/20 tracking-[0.2em] uppercase">Deadline</p>
                <p className="text-foreground/60 text-lg font-light mt-1">{settings.openCallDeadline}</p>
              </div>
            )}

            {settings.applyNowUrl && (
              <div className={settings.openCallDeadline ? "" : "mt-4"}>
                <a
                  href={settings.applyNowUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-gold text-[13px] tracking-[0.1em] uppercase font-normal border-b border-gold/40 pb-2 hover:text-foreground hover:border-foreground transition-colors duration-500"
                >
                  Apply Now <ArrowUpRight size={14} />
                </a>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default OpenCallSection;
