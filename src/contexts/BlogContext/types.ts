export interface iDefaultProviderProps {
  children: React.ReactNode;
}

export interface iBlogContext {
  getAllPosts: () => Promise<void>;
  blogPosts: iBlogPost[];
  getPostById: (idPost: string) => Promise<void>;
  blogPost: iBlogPost | null;
}

export interface iBlogPost {
  author: string;
  authorImg: string;
  content: string;
  date: string;
  id: string;
  img: string;
  reading_time: string;
  title: string;
}
