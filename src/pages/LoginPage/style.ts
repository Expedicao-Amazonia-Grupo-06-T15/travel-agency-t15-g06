import styled from 'styled-components';
import tropicalBg from '../../assets/images/tropical-bg.jpg';

export const PageContainer = styled.div`
  width: 100%;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  background-color: beige;
  background-image: url(${tropicalBg});
  background-size: cover;
  background-position: center;
  padding: 18px 0px;

  img {
    display: none;
  }

  @media (min-width: 769px) {
    justify-content: space-between;
    flex-direction: row;

    img {
      display: block;
      width: 593px;
      height: 364px;
    }
  }
`;

export const Main = styled.main`
  background-color: white;
  border-radius: 20px;
  padding: 18px 18px 0px 18px;

  @media (min-width: 769px) {
    width: 30%;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  font-size: var(--form-1);
  font-family: var(--font-title);
  font-weight: bold;
  color: var(--grey-100);
  margin: 30px 0px 32.86px 0px;
`;

export const ContentContainer = styled.div`
  @media (min-width: 769px) {
    display: flex;
    margin: 0 auto;
    width: 1270px;
    justify-content: space-around;

    img {
      height: 100%;
      border-radius: 20px;
    }
  }
`;
