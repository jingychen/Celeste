import exhibition1 from "@/assets/exhibition-1.jpg";
import exhibition2 from "@/assets/exhibition-2.jpg";
import exhibition3 from "@/assets/exhibition-3.jpg";
import poster1 from "@/assets/poster-1.jpg";
import poster2 from "@/assets/poster-2.jpg";
import poster3 from "@/assets/poster-3.jpg";

export interface Exhibition {
  slug: string;
  number: string;
  title: string;
  artist: string;
  date: string;
  image: string;
  poster: string;
  location: string;
  description: string[];
  details: {
    medium: string;
    works: string;
    curated: string;
  };
}

export const exhibitions: Exhibition[] = [
  {
    slug: "fragments-of-gold",
    number: "01",
    title: "Fragments of Gold",
    artist: "Marcus Veil",
    date: "Jun 12 — Aug 30, 2026",
    image: exhibition1,
    poster: poster1,
    location: "Main Hall, Celeste Gallery",
    description: [
      "Marcus Veil's latest body of work explores the Japanese philosophy of kintsugi — the art of repairing broken pottery with gold. In 'Fragments of Gold', Veil extends this metaphor to the human experience, presenting large-scale canvases where dark, brooding surfaces are interrupted by veins of luminous gold leaf.",
      "The exhibition brings together twelve new paintings and a site-specific installation, each piece meditating on themes of imperfection, resilience, and the beauty found in fracture. Veil's process involves building up layers of oil paint over months, then deliberately breaking the surface to reveal golden seams beneath.",
      "This is Veil's first solo exhibition at Celeste Gallery and represents a significant evolution in his practice — moving from purely abstract compositions toward a more philosophical engagement with material and meaning.",
    ],
    details: {
      medium: "Oil on canvas, gold leaf, mixed media",
      works: "12 paintings, 1 site-specific installation",
      curated: "Elena Marchetti",
    },
  },
  {
    slug: "silent-forms",
    number: "02",
    title: "Silent Forms",
    artist: "Collective Show",
    date: "Sep 5 — Nov 15, 2026",
    image: exhibition2,
    poster: poster2,
    location: "Gallery A & B, Celeste Gallery",
    description: [
      "'Silent Forms' brings together five sculptors whose work investigates the tension between presence and absence, solid and void. The exhibition transforms the gallery into an immersive landscape of form — from monumental bronze figures to ethereal glass structures that seem to dissolve into the architecture.",
      "Each artist in the show approaches three-dimensionality as a philosophical question: What does it mean for a form to be silent? How does sculpture communicate without language, without narrative, through pure material presence alone?",
      "The works range from the intimate — palm-sized porcelain vessels by Yuki Tanaka — to the monumental, including a seven-meter suspended steel installation by Anders Holm that responds to air currents within the space.",
    ],
    details: {
      medium: "Bronze, marble, glass, steel, porcelain",
      works: "28 sculptures, 2 installations",
      curated: "David Chen & Sofia Rossi",
    },
  },
  {
    slug: "earth-and-ember",
    number: "03",
    title: "Earth & Ember",
    artist: "Clara Montague",
    date: "Dec 1, 2026 — Feb 28, 2027",
    image: exhibition3,
    poster: poster3,
    location: "Main Hall, Celeste Gallery",
    description: [
      "Clara Montague returns to Celeste Gallery with 'Earth & Ember', a visceral exploration of landscape, memory, and the elemental forces that shape both the natural world and human consciousness. Working with raw pigments sourced from volcanic soil, iron oxide, and charred wood, Montague creates paintings that feel geological in their depth.",
      "The exhibition traces a journey from destruction to renewal — opening with canvases consumed by deep blacks and smoldering reds, then gradually moving toward works suffused with warm amber light and rich terracotta. The progression mirrors the cycle of wildfire: devastation giving way to regeneration.",
      "Montague's process is intensely physical, involving the application of thick impasto layers with palette knives and bare hands, creating surfaces that are as much relief as painting.",
    ],
    details: {
      medium: "Natural pigments, oil, charcoal on canvas",
      works: "18 paintings",
      curated: "Elena Marchetti",
    },
  },
];
