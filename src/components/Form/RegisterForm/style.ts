import styled from 'styled-components';

export const StyledForm = styled.form`
  display: grid;
  flex-direction: column;
  gap: 33px;
  padding-bottom: 40.83px;
  font-family: var(--font-body);
  width: fit-content;

  button {
    color: white;
    background-color: var(--color-primary);
    border-radius: 20px;
    padding: 20px 0px;
    font-size: var(--body-3);
    margin-bottom: -18px;
  }

  p {
    font-size: var(--body-5);
    justify-self: center;
    color: var(--grey-10);

    a {
      font-weight: 700;
      color: var(--grey-10);
    }
  }
`;
