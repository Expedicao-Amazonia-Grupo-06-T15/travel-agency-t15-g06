import styled from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 9px 23px;
  margin-bottom: 13px;

  img:first-child {
    width: 98px;
  }

  @media (min-width: 769px) {
    padding: 33px 72px;

    img:first-child {
      width: 180px;
    }
  }
`;
