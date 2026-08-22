export interface InterviewBlock {
  type: 'question' | 'answer' | 'image';
  text?: string;
  src?: string;
  caption?: string;
}

export interface Interview {
  slug: string;
  title: string;
  artist: string;
  date: string;
  thumbnail: string;
  artistPhoto?: string;
  bio?: string;
  content: InterviewBlock[];
}

const modules = import.meta.glob('/content/interviews/*.json', { eager: true });

export const interviews: Interview[] = (
  Object.values(modules) as Array<{ default: Interview }>
)
  .map((m) => m.default)
  .sort((a, b) => a.date.localeCompare(b.date));
