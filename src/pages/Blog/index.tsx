import { useContext, useEffect } from 'react';
import { BlogContext } from '../../contexts/BlogContext';

export const Blog = () => {
  const { getAllPosts, blogPosts } = useContext(BlogContext);

  useEffect(() => {
    getAllPosts();
  }, []);

  const getParagraphs = (content: string) => {
    return content
      .split('\n\n')
      .map((paragraph, index) => <p key={index}>{paragraph}</p>);
  };

  return (
    <div>
      <div>
        <h1>AMAZÔNIA E SEUS ENCANTOS</h1>
        <p>
          Tudo o que você precisa saber para curtir ao máximo a melhor aventura
          da sua vida!
        </p>
      </div>
      <main>
        <ul>
          {blogPosts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <img src={post.img} alt={post.title} />
              {getParagraphs(post.content)}
              <div className='author-infos'>
                <img src={post.authorImg} alt={post.author} />
                <span>{post.author}</span>
                <span>{post.date}</span>
                <span>{post.reading_time}</span>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};
