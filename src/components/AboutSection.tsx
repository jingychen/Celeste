const AboutSection = () => {
  return (
    <section id="about" className="bg-background py-24 md:py-32 px-6 md:px-[120px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-gold text-sm font-medium tracking-widest uppercase mb-4">About</p>
          <h2 className="text-3xl md:text-5xl font-medium text-foreground leading-tight">
            A Space for the <span className="text-gradient-gold">Extraordinary</span>
          </h2>
        </div>
        <div className="space-y-6">
          <p className="text-foreground/60 text-[15px] leading-relaxed">
            Founded in 2020, our gallery stands at the intersection of contemporary art and cultural innovation. We represent a curated roster of artists whose works challenge perception and redefine boundaries.
          </p>
          <p className="text-foreground/60 text-[15px] leading-relaxed">
            Our mission is to create a platform where artistic vision meets global audiences — through physical exhibitions, digital experiences, and meaningful collector relationships.
          </p>
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
            <div>
              <p className="text-3xl font-medium text-foreground">50+</p>
              <p className="text-sm text-muted-foreground mt-1">Exhibitions</p>
            </div>
            <div>
              <p className="text-3xl font-medium text-foreground">30</p>
              <p className="text-sm text-muted-foreground mt-1">Artists</p>
            </div>
            <div>
              <p className="text-3xl font-medium text-foreground">12</p>
              <p className="text-sm text-muted-foreground mt-1">Countries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
