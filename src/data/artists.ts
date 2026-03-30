import artist1 from "@/assets/artist-1.jpg";
import artist2 from "@/assets/artist-2.jpg";
import artist3 from "@/assets/artist-3.jpg";

export interface Artist {
  slug: string;
  name: string;
  medium: string;
  location: string;
  portrait: string;
  bio: string[];
  works: { title: string; year: string; image: string }[];
}

export const artists: Artist[] = [
  {
    slug: "marcus-veil",
    name: "Marcus Veil",
    medium: "Oil on Canvas, Gold Leaf",
    location: "Berlin, DE",
    portrait: artist1,
    bio: [
      "Marcus Veil is a Berlin-based painter whose work explores the intersection of destruction and beauty. Drawing from the Japanese philosophy of kintsugi, Veil creates large-scale canvases where dark surfaces are interrupted by luminous veins of gold.",
      "His practice involves months of layering oil paint, then deliberately fracturing the surface to reveal golden seams beneath — a meditation on resilience and the beauty of imperfection.",
    ],
    works: [
      { title: "Golden Fracture I", year: "2026", image: artist1 },
      { title: "Veins of Light", year: "2025", image: artist1 },
      { title: "Broken Horizon", year: "2024", image: artist1 },
    ],
  },
  {
    slug: "elena-sorano",
    name: "Elena Sorano",
    medium: "Sculpture & Installation",
    location: "Milan, IT",
    portrait: artist2,
    bio: [
      "Elena Sorano's sculptural practice interrogates the tension between presence and absence. Working primarily in marble and bronze, she creates forms that seem to emerge from — or dissolve into — the spaces they inhabit.",
      "Her installations transform architectural environments into immersive landscapes of contemplation, inviting viewers to reconsider their relationship with physical space.",
    ],
    works: [
      { title: "Void Study III", year: "2026", image: artist2 },
      { title: "Emergence", year: "2025", image: artist2 },
      { title: "Still Echo", year: "2024", image: artist2 },
    ],
  },
  {
    slug: "leo-tanaka",
    name: "Leo Tanaka",
    medium: "Mixed Media & Digital",
    location: "Tokyo, JP",
    portrait: artist3,
    bio: [
      "Leo Tanaka bridges the physical and digital worlds through mixed media works that combine traditional Japanese printmaking techniques with generative algorithms and augmented reality.",
      "His practice questions the boundaries between organic and synthetic, creating pieces that evolve over time through embedded digital layers accessible via companion applications.",
    ],
    works: [
      { title: "Data Garden", year: "2026", image: artist3 },
      { title: "Pixel Bloom", year: "2025", image: artist3 },
      { title: "Neural Landscape", year: "2024", image: artist3 },
    ],
  },
];
