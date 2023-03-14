import styled from 'styled-components';

export const MainActivities = styled.section`
  display: flex;
  flex-direction: column;
  width: 88.43%;
  margin: 0 auto;
  color: var(--grey-100);
`;

export const TitleSection = styled.h2`
  color: var(--color-primary);
  font-family: var(--font-title);
  font-weight: 500;
  font-size: var(--body-5);
  margin-bottom: 12.92px;

  @media (min-width: 769px) {
    font-size: var(--title-2);
  }
`;

export const TextSection = styled.p`
  width: 100%;
  font-family: var(--font-body);
  font-size: 0.625rem;
  line-height: 168%;
  margin-bottom: 67px;

  @media (min-width: 769px) {
    font-size: var(--body-3);
  }
`;

export const ActivitiesList = styled.ul`
  display: flex;
  gap: 77px;
  width: 100%;
  overflow-x: auto;
  padding: 15px;
  margin-bottom: 30px;
`;
