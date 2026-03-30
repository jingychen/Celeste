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

const modules = import.meta.glob('/content/exhibitions/*.json', { eager: true });

export const exhibitions: Exhibition[] = (Object.values(modules) as Array<{ default: Omit<Exhibition, 'description'> & { description: string } }>)
  .map((m) => ({
    ...m.default,
    description: m.default.description.split('\n\n').filter(Boolean),
  }))
  .sort((a, b) => a.number.localeCompare(b.number));
