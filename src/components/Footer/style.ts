import styled from 'styled-components';

export const FooterContainer = styled.footer`
  font-family: var(--font-body);

  @media (min-width: 769) {
    border: 1px solid red;
    font-size: 1rem;
  }
`;

export const FooterNavigation = styled.nav`
  @media (min-width: 769px) {
    display: flex;
    justify-content: space-between;
    padding: 81px 0px 65px 0px;
    width: 90%;
    margin: 0 auto;
  }
`;

export const MembersContainer = styled.div`
  @media (min-width: 769px) {
    p {
      width: 283px;
      line-height: 147.5%;
      color: var(--grey-50);
    }
  }
`;

export const LogoAndList = styled.div`
  @media (min-width: 769px) {
    display: flex;
    flex-direction: column;
    gap: 55px;

    ul {
      display: flex;
      gap: 27px;
      margin: 0 auto;
    }
  }
`;

export const ContactInfos = styled.div`
  @media (min-width: 769px) {
    width: 228px;
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    gap: 12px;
    text-align: center;

    span:first-child {
      margin-bottom: 46px;
    }
  }
`;
