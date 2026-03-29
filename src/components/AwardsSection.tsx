const awards = [
  { year: "2025", title: "International Gallery Excellence Award", org: "Art Basel Foundation" },
  { year: "2024", title: "Best Emerging Gallery", org: "Frieze London" },
  { year: "2024", title: "Innovation in Curation", org: "Venice Biennale" },
  { year: "2023", title: "Cultural Impact Award", org: "UNESCO Arts Council" },
];

const AwardsSection = () => {
  return (
    <section id="awards" className="bg-background border-t border-border py-20 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-32">
        {/* Left — title */}
        <div>
          <span className="text-gold text-[11px] tracking-[0.3em] uppercase font-normal">Recognition</span>
          <h2 className="text-5xl md:text-7xl font-light text-foreground leading-[0.9] tracking-tight mt-4">
            Awards
          </h2>
        </div>

        {/* Right — list */}
        <div>
          {awards.map((award, i) => (
            <div
              key={i}
              className="group border-t border-border py-8 md:py-10 flex flex-col md:flex-row md:items-baseline justify-between gap-2 cursor-default"
            >
              <div className="flex items-baseline gap-6 md:gap-10">
                <span className="text-foreground/15 text-[11px] tracking-[0.2em] font-normal editorial-number shrink-0 w-12">{award.year}</span>
                <div>
                  <h3 className="text-lg md:text-2xl font-light text-foreground tracking-tight">{award.title}</h3>
                  <p className="text-[12px] text-foreground/30 tracking-[0.08em] uppercase mt-2">{award.org}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
