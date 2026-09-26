export interface InterviewBlock {
  type: 'question' | 'answer' | 'image' | 'video';
  text?: string;
  src?: string;
  caption?: string;
}

/** Convert YouTube / Google Drive share URLs to embeddable URLs */
export function toEmbedUrl(url: string): string {
  if (!url) return url;

  // YouTube: youtube.com/watch?v=ID or youtu.be/ID
  const ytMatch =
    url.match(/youtube\.com\/watch\?v=([^&]+)/) ||
    url.match(/youtu\.be\/([^?]+)/);
  if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}`;

  // Google Drive: /file/d/ID/view  →  /file/d/ID/preview
  const driveMatch = url.match(/drive\.google\.com\/file\/d\/([^/]+)/);
  if (driveMatch) return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;

  // Already an embed URL or unknown — use as-is
  return url;
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
  .sort((a, b) => {
    const parse = (d: string) => new Date(d).getTime();
    return parse(b.date) - parse(a.date); // newest first
  });
