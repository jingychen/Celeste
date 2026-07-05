export interface Participant {
  name: string;
  works: string[];
}

export interface Exhibition {
  slug: string;
  number: string;
  title: string;
  artist: string;
  date: string;
  poster: string;
  images?: string[];
  location: string;
  description: string[];
  status?: 'upcoming' | 'past';
  featured?: boolean;
  virtualOpen?: boolean;
  embedCode?: string;
  catalogueUrl?: string;
  participants?: Participant[];
  details: {
    medium: string;
    works: string;
    curated: string;
  };
}

export function extractIframeSrc(embedCode: string): string | null {
  const match = embedCode.match(/src=["']([^"']+)["']/);
  return match ? match[1] : null;
}

const modules = import.meta.glob('/content/exhibitions/*.json', { eager: true });

export const exhibitions: Exhibition[] = (Object.values(modules) as Array<{ default: Omit<Exhibition, 'description'> & { description: string } }>)
  .map((m) => ({
    ...m.default,
    description: m.default.description.split('\n\n').filter(Boolean),
    images: m.default.images ?? [],
  }))
  .sort((a, b) => a.number.localeCompare(b.number));
