import { useContext, useEffect, useState } from 'react';
import { BlogContext } from '../../contexts/BlogContext';
import { BannerContainer } from '../ExplorePage/style';
import {
  BlogSectionTitle,
  BlogSlogan,
  BlogText,
  BlogTitle,
  PostContainer,
  PostOverlay,
  PostsList,
} from './style';

export const Blog = () => {
  const { getAllPosts, blogPosts, getPostById } = useContext(BlogContext);

  useEffect(() => {
    getAllPosts();
  }, []);

  const openPost = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    getPostById(e.currentTarget.id);
  };

  const getParagraphs = (content: string) => {
    return content
      .split('\n\n')
      .map((paragraph, index) => <BlogText key={index}>{paragraph}</BlogText>);
  };

  return (
    <div>
      <BannerContainer
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          height: '421px',
        }}
      >
        <BlogSectionTitle>
          AMAZÔNIA <p>E SEUS ENCANTOS</p>
        </BlogSectionTitle>
        <BlogSlogan>
          Tudo o que você precisa saber para curtir ao máximo a melhor aventura
          da sua vida!
        </BlogSlogan>
      </BannerContainer>

      <main>
        <PostsList>
          {blogPosts.map((post) => (
            <li key={post.id} id={post.id} onClick={openPost}>
              <PostContainer
                style={{
                  backgroundImage: `url(${post.img})`,
                  height: '500px',
                  width: '1130px',
                  backgroundRepeat: 'no-repeat',
                  margin: '122px auto',
                }}
              >
                <PostOverlay>
                  <BlogTitle>{post.title}</BlogTitle>
                  {getParagraphs(post.content)}
                  <div className='author-infos'>
                    {/* <img src={post.authorImg} alt={post.author} /> */}
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                    <span>{post.reading_time}</span>
                  </div>
                </PostOverlay>
              </PostContainer>
            </li>
          ))}
        </PostsList>
      </main>
    </div>
  );
};
