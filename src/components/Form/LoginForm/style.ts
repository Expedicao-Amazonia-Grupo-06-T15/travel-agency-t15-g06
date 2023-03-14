import styled from 'styled-components';

export const StyledForm = styled.form`
  display: grid;
  flex-direction: column;
  gap: 33px;
  padding-bottom: 40.83px;
  font-family: var(--font-body);
  width: fit-content;

  @media (min-width: 769px) {
    width: 100%;
  }

  button {
    background-color: var(--color-primary);
    color: white;
    padding: 16.5px 84px;
    border-radius: 20px;
    font-size: var(--body-2);
    margin-bottom: -18px;
  }

  span {
    width: fit-content;
    margin-top: -15px;
    font-size: var(--body-5);
    color: var(--grey-10);
    justify-self: flex-end;
  }

  p {
    font-size: var(--body-5);
    color: var(--grey-10);
  }

  a {
    font-weight: 700;
    color: var(--grey-10);
  }
`;
