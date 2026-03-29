import { Award } from "lucide-react";

const awards = [
  { year: "2025", title: "International Gallery Excellence Award", org: "Art Basel Foundation" },
  { year: "2024", title: "Best Emerging Gallery", org: "Frieze London" },
  { year: "2024", title: "Innovation in Curation", org: "Venice Biennale" },
  { year: "2023", title: "Cultural Impact Award", org: "UNESCO Arts Council" },
];

const AwardsSection = () => {
  return (
    <section id="awards" className="bg-secondary py-24 md:py-32 px-6 md:px-[120px]">
      <p className="text-gold text-sm font-medium tracking-widest uppercase mb-4">Recognition</p>
      <h2 className="text-3xl md:text-5xl font-medium text-foreground mb-16">Awards</h2>

      <div className="space-y-0">
        {awards.map((award, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-border group cursor-pointer hover:pl-4 transition-all"
          >
            <div className="flex items-center gap-6">
              <Award size={20} className="text-gold" />
              <div>
                <h3 className="text-lg font-medium text-foreground">{award.title}</h3>
                <p className="text-sm text-muted-foreground">{award.org}</p>
              </div>
            </div>
            <span className="text-sm text-muted-foreground mt-2 md:mt-0">{award.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwardsSection;
