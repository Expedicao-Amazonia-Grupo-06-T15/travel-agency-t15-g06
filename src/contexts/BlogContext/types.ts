export interface iDefaultProviderProps {
  children: React.ReactNode;
}

export interface iBlogContext {
  getAllPosts: () => Promise<void>;
  blogPosts: iBlogPost[];
}

export interface iBlogPost {
  author: string;
  authorImg: string;
  content: string;
  date: string;
  id: number;
  img: string;
  reading_time: string;
  title: string;
}
