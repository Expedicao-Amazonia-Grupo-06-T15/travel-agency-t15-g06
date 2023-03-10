import { createContext, useState } from 'react';
import { api } from '../../services/api';
import { iBlogContext, iBlogPost, iDefaultProviderProps } from './types';

export const BlogContext = createContext({} as iBlogContext);

export const BlogProvider = ({ children }: iDefaultProviderProps) => {
  const [blogPosts, setBlogPosts] = useState<iBlogPost[]>([]);

  const getAllPosts = async () => {
    try {
      const response = await api.get<iBlogPost[]>('/blogPosts');
      setBlogPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BlogContext.Provider
      value={{
        getAllPosts,
        blogPosts,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
