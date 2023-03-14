import styled from 'styled-components';

export const MainContainer = styled.div`
  h2 {
    color: var(--grey-100);
    font-size: var(--body-5);
  }

  p {
    color: var(--grey-100);
    font-family: var(--font-title);
  }

  @media (min-width: 769px) {
    margin-left: 99px;
  }
`;

export const CardHotel = styled.div`
  display: flex;
  gap: 15px;
  background-color: white;
  width: 90%;
  margin: 0 auto;
  border-radius: 10px;

  @media (min-width: 769px) {
    width: 30%;
    margin-left: 50px;
  }
`;

export const HotelInfosReserved = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  p {
    color: var(--grey-100);
    font-family: var(--font-title);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 90%;
  }

  span {
    font-size: 0.625rem;
    color: var(--grey-50);
  }
`;
