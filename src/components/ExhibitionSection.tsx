import exhibition1 from "@/assets/exhibition-1.jpg";
import exhibition2 from "@/assets/exhibition-2.jpg";
import exhibition3 from "@/assets/exhibition-3.jpg";
import { ArrowRight } from "lucide-react";

const exhibitions = [
  { title: "Fragments of Gold", artist: "Marcus Veil", date: "Jun 12 — Aug 30, 2026", image: exhibition1 },
  { title: "Silent Forms", artist: "Collective", date: "Sep 5 — Nov 15, 2026", image: exhibition2 },
  { title: "Earth & Ember", artist: "Clara Montague", date: "Dec 1, 2026 — Feb 28, 2027", image: exhibition3 },
];

const ExhibitionSection = () => {
  return (
    <section id="exhibition" className="bg-background py-24 md:py-32 px-6 md:px-[120px]">
      <div className="flex items-end justify-between mb-16">
        <div>
          <p className="text-gold text-sm font-medium tracking-widest uppercase mb-4">Exhibitions</p>
          <h2 className="text-3xl md:text-5xl font-medium text-foreground">Current & Upcoming</h2>
        </div>
        <a href="#" className="hidden md:flex items-center gap-2 text-sm text-foreground/60 hover:text-gold transition-colors">
          View All <ArrowRight size={16} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {exhibitions.map((ex, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="overflow-hidden mb-6">
              <img
                src={ex.image}
                alt={ex.title}
                loading="lazy"
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <p className="text-sm text-muted-foreground mb-2">{ex.date}</p>
            <h3 className="text-xl font-medium text-foreground mb-1">{ex.title}</h3>
            <p className="text-sm text-foreground/50">{ex.artist}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExhibitionSection;
