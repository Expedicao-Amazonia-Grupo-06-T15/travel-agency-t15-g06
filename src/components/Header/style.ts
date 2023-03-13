import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  justify-content: space-between;
  font-family: var(--font-title);
  font-size: var(--body-2);
`;

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

export const NavContainer = styled.nav`
  width: 466px;
`;

export const UlLinksContainer = styled.ul`
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 32px;
  width: 100%;
  display: flex;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UlButtons = styled.ul`
  width: 100%;
  display: flex;
  gap: 36px;
  align-items: center;

  div {
    background-color: var(--color-primary-2);
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 179px;
    margin-right: 71px;
    border-radius: 12px;

    a {
      color: white;
    }
  }
`;
