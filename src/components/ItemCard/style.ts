import styled from 'styled-components';

export const ItemsContainer = styled.div`
  width: 250px;
`;

export const Li = styled.li`
  width: 250px;
  height: fit-content;
  border-radius: 8px;
  box-shadow: -4px 4px 10px 1px rgba(0, 0, 0, 0.1);
`;

export const LiImageContainer = styled.div`
  width: 100%;
  height: 150px;
  padding: 0px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px 8px 0px 0px;
  }
`;

export const CardsInfos = styled.div`
  width: 77.66%;
  margin: 28.79px auto;
  font-family: var(--font-body);
  display: grid;
  gap: 8px;

  img {
    width: 60px;
  }

  h6 {
    color: var(--grey-100);
    font-size: var(--body-4);
    font-weight: 500;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    width: fit-content;
  }
`;

export const Description = styled.p`
  font-size: 0.75rem;
  line-height: 155%;
  color: var(--grey-50);
  text-align: justify;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 3.6rem;
`;

export const Price = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--grey-100);
  justify-self: flex-end;
`;

export const ReviewsContainer = styled.div`
  margin-bottom: 17.63px;
  display: flex;

  legend {
    display: flex;
    gap: 5px;
    font-size: 0.625rem;
    align-items: center;
    justify-content: center;
  }
`;
