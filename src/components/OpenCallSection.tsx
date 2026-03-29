import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const OpenCallSection = () => {
  return (
    <section id="open-call" className="bg-background py-24 md:py-32 px-6 md:px-[120px]">
      <div className="border border-border p-10 md:p-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        <div className="max-w-xl">
          <p className="text-gold text-sm font-medium tracking-widest uppercase mb-4">Open Call</p>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6">
            Submit Your Work
          </h2>
          <p className="text-foreground/60 text-[15px] leading-relaxed">
            We invite emerging and established artists to submit proposals for our upcoming exhibition seasons. All mediums welcome — painting, sculpture, digital, installation, and performance.
          </p>
        </div>
        <Button variant="hero" className="text-sm px-8 py-3 h-auto flex items-center gap-2">
          Apply Now <ArrowRight size={16} />
        </Button>
      </div>
    </section>
  );
};

export default OpenCallSection;
