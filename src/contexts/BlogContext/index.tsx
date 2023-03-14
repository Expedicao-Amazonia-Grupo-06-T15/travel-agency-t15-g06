import { createContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { api } from '../../services/api';
import { iBlogContext, iBlogPost, iDefaultProviderProps } from './types';

export const BlogContext = createContext({} as iBlogContext);

export const BlogProvider = ({ children }: iDefaultProviderProps) => {
  const [blogPosts, setBlogPosts] = useState<iBlogPost[]>([]);
  const [blogPost, setBlogPost] = useState<iBlogPost | null>(null);
  const navigate = useNavigate();

  const getAllPosts = async () => {
    try {
      const response = await api.get<iBlogPost[]>('/blogPosts');
      setBlogPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPostById = async (idPost: string) => {
    try {
      const response = await api.get<iBlogPost>(`/blogPosts/${idPost}`);
      setBlogPost(response.data);
      navigate(`/blog/${idPost}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BlogContext.Provider
      value={{
        getAllPosts,
        blogPosts,
        getPostById,
        blogPost,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
