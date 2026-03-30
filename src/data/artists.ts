export interface Artist {
  slug: string;
  name: string;
  medium: string;
  location: string;
  portrait: string;
  bio: string[];
  works: { title: string; year: string; image: string }[];
}

const modules = import.meta.glob('/content/artists/*.json', { eager: true });

export const artists: Artist[] = (Object.values(modules) as Array<{ default: Omit<Artist, 'bio'> & { bio: string } }>)
  .map((m) => ({
    ...m.default,
    bio: m.default.bio.split('\n\n').filter(Boolean),
  }))
  .sort((a, b) => a.name.localeCompare(b.name));
