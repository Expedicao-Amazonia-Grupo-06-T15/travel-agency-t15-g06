import styled from 'styled-components';

export const ContentContainer = styled.div`
  width: 78.75%;
  margin: 0 auto;
  font-family: var(--font-body);

  span {
    font-size: 0.75rem;
    color: var(--grey-50);
    margin-bottom: 23px;

    @media (min-width: 769px) {
      font-size: 1.125rem;
    }
  }
`;

export const UserName = styled.h2`
  width: 100%;
  margin: 23px 0px 13px 0px;
  font-family: var(--font-title);
  font-size: var(--body-2);
  font-weight: 500;
  color: var(--color-primary);
  text-transform: capitalize;

  @media (min-width: 769px) {
    font-size: var(--form-1);
  }
`;

export const NavReservations = styled.nav`
  margin: 23px 0px 39px 0px;
  display: flex;
  font-size: 0.5rem;

  @media (min-width: 769px) {
    font-size: 1rem;
    margin-top: 59px;
  }
`;

export const LinksList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const ReservationCart = styled.section`
  background-color: #eeeeee;
  min-height: 275px;
  font-family: var(--font-body);
  color: var(--grey-100);
  padding: 17px 0px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const CartTitle = styled.p`
  font-size: var(--body-1);
  font-weight: 700;
  width: 78.75%;
  margin: 0 auto;
`;
