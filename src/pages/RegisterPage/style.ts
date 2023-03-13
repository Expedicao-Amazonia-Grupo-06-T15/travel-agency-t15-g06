import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  height: fit-content;
  background-color: beige;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: var(--body-1);
  font-family: var(--font-title);
  font-weight: bold;
  color: var(--grey-100);
  margin: 30px 0px 32.86px 0px;
`;
