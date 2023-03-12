import { useContext } from 'react';
import { BlogContext } from '../../contexts/BlogContext';

export const BlogPost = () => {
  const { blogPost } = useContext(BlogContext);
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
        {blogPost && (
          <div key={blogPost.id}>
            <h2 key={blogPost.id}>{blogPost.title}</h2>
            <img src={blogPost.img} alt={blogPost.title} />
            {getParagraphs(blogPost.content)}
            <div className='author-infos'>
              <img src={blogPost.authorImg} alt={blogPost.author} />
              <span>{blogPost.author}</span>
              <span>{blogPost.date}</span>
              <span>{blogPost.reading_time}</span>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
