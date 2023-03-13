import styled from 'styled-components';

export const AccommodationSection = styled.section`
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
`;

export const TextSection = styled.p`
  width: 100%;
  font-family: var(--font-body);
  font-size: 0.625rem;
  line-height: 168%;
  margin-bottom: 67px;
`;

export const HotelsList = styled.ul`
  display: flex;
  gap: 77px;
  width: 100%;
  overflow-x: auto;
  padding: 15px;
  margin-bottom: 30px;
`;

export const ConfirmationButton = styled.button`
  border: 1px dashed var(--color-primary);
  color: var(--color-primary);
  font-weight: 500;
  background-color: transparent;
  border-radius: 12px;
  padding: 10px;
  width: fit-content;
  font-size: 0.625rem;
  font-family: var(--font-body);
  margin-bottom: 20px;

  :hover {
    background-color: var(--color-primary);
    border: transparent;
    color: white;
  }
`;
