import { useState, useEffect } from "react";

export interface Artist {
  slug: string;
  name: string;
  medium: string;
  location: string;
  portrait: string;
  bio: string[];
  works: { title: string; year: string; image: string }[];
}

const fallback: Artist[] = [
  {
    slug: "marcus-veil",
    name: "Marcus Veil",
    medium: "Oil on Canvas, Gold Leaf",
    location: "Berlin, DE",
    portrait: "/images/uploads/artist-1.jpg",
    bio: [
      "Marcus Veil is a Berlin-based painter whose work explores the intersection of destruction and beauty.",
    ],
    works: [
      { title: "Golden Fracture I", year: "2026", image: "/images/uploads/artist-1.jpg" },
    ],
  },
];

export function useArtists() {
  const [artists, setArtists] = useState<Artist[]>(fallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/content/artists.json")
      .then((r) => r.json())
      .then((data: Artist[]) => {
        if (Array.isArray(data) && data.length > 0) setArtists(data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return { artists, loading };
}
