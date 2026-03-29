import artist1 from "@/assets/artist-1.jpg";
import artist2 from "@/assets/artist-2.jpg";
import artist3 from "@/assets/artist-3.jpg";
import { ArrowUpRight } from "lucide-react";

const artists = [
  { name: "Marcus Veil", medium: "Oil on Canvas", image: artist1 },
  { name: "Elena Sorano", medium: "Sculpture & Installation", image: artist2 },
  { name: "Leo Tanaka", medium: "Mixed Media", image: artist3 },
];

const ArtistsSection = () => {
  return (
    <section id="artists" className="bg-secondary py-24 md:py-32 px-6 md:px-[120px]">
      <p className="text-gold text-sm font-medium tracking-widest uppercase mb-4">Represented</p>
      <h2 className="text-3xl md:text-5xl font-medium text-foreground mb-16">Signed Artists</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {artists.map((artist, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="overflow-hidden mb-6 relative">
              <img
                src={artist.image}
                alt={artist.name}
                loading="lazy"
                className="w-full h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-500 flex items-end justify-end p-6">
                <ArrowUpRight size={24} className="text-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <h3 className="text-lg font-medium text-foreground">{artist.name}</h3>
            <p className="text-sm text-muted-foreground">{artist.medium}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArtistsSection;
