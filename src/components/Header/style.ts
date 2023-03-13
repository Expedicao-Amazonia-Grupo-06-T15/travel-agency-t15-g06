import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  justify-content: space-between;
  font-family: var(--font-title);
  font-size: var(--body-2);

  @media (min-width: 769px) {
    font-family: var(--font-title);
    font-size: 0.75rem;
  }
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
  min-width: 466px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const UlLinksContainer = styled.ul`
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 32px;
  width: 100%;
  display: flex;

  @media (min-width: 769px) {
    font-size: 1.125rem;
  }
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
  font-size: 1.125rem;

  button {
    border: none;
    outline: none;
    background-color: var(--color-primary-2);
    color: white;
  }

  div {
    border: none;
    outline: none;
    background-color: var(--color-primary-2);
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 179px;
    margin-right: 71px;
    border-radius: 12px;
    color: var(--grey-100);

    a {
      color: white;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const DropdownMenuContainer = styled.div`
  display: grid;
  width: 100%;

  @media (min-width: 769px) {
    display: none;
  }

  img {
    align-self: center;
    justify-self: flex-end;
    margin-right: 1.4375rem;
  }
`;
