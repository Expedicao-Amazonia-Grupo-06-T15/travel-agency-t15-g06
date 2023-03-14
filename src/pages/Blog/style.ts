import styled from 'styled-components';

export const PostsList = styled.ul`
  display: flex;
  gap: 100px;
  flex-direction: column;
`;

export const BlogSectionTitle = styled.h1`
  font-size: 4rem;
  color: white;
  font-family: var(--font-title);
  font-weight: 500;
  width: 649px;

  p {
    font-weight: 400;
  }
`;

export const BlogTitle = styled.h2`
  color: white;
  font-family: var(--font-body);
  width: 458px;
  font-size: var(--title-2);
  font-weight: 500;
  margin: 33px 0px 0px 68px;
`;

export const BlogText = styled.p`
  width: 441px;
  color: white;
  font-family: var(--font-body);
  line-height: 153%;
  margin-top: 15px;
  font-size: 0.625rem;
`;

export const BlogSlogan = styled.p`
  color: white;
  font-family: var(--font-body);
`;

export const PostContainer = styled.div`
  margin: 122px auto;
  width: 1130px;
`;

export const PostOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  height: 100%;
  width: fit-content;
  display: grid;
`;
