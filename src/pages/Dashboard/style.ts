import styled from 'styled-components';

export const ContentContainer = styled.div`
  width: 78.75%;
  margin: 0 auto;
  font-family: var(--font-body);

  span {
    font-size: 0.75rem;
    color: var(--grey-50);
    margin-bottom: 23px;
  }
`;

export const UserName = styled.h2`
  width: 100%;
  margin: 23px 0px 13px 0px;
  font-family: var(--font-title);
  font-size: var(--body-2);
  font-weight: 500;
  color: var(--color-primary);
`;

export const NavReservations = styled.nav`
  margin: 23px 0px 39px 0px;
  display: flex;
  font-size: 0.5rem;
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
  font-size: var(--body-4);
  font-weight: 700;
  width: 78.75%;
  margin: 0 auto;
`;
