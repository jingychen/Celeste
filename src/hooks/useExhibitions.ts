import { useState, useEffect } from "react";

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

// Fallback static data (shown before CMS data loads, or if no CMS data exists)
const fallback: Exhibition[] = [
  {
    slug: "fragments-of-gold",
    number: "01",
    title: "Fragments of Gold",
    artist: "Marcus Veil",
    date: "Jun 12 — Aug 30, 2026",
    image: "/images/uploads/exhibition-1.jpg",
    poster: "/images/uploads/poster-1.jpg",
    location: "Main Hall, Celeste Gallery",
    description: [
      "Marcus Veil's latest body of work explores the Japanese philosophy of kintsugi — the art of repairing broken pottery with gold.",
    ],
    details: {
      medium: "Oil on canvas, gold leaf, mixed media",
      works: "12 paintings, 1 site-specific installation",
      curated: "Elena Marchetti",
    },
  },
];

export function useExhibitions() {
  const [exhibitions, setExhibitions] = useState<Exhibition[]>(fallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/content/exhibitions.json")
      .then((r) => r.json())
      .then((data: Exhibition[]) => {
        if (Array.isArray(data) && data.length > 0) setExhibitions(data);
      })
      .catch(() => {}) // silently use fallback
      .finally(() => setLoading(false));
  }, []);

  return { exhibitions, loading };
}
