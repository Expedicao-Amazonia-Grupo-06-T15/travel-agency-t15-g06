import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { StyledInput } from './style';

interface iInputProps {
  label: string;
  type: 'text' | 'email' | 'password';
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
  id: string;
}

export const Input = ({ label, type, register, error, id }: iInputProps) => (
  <>
    <StyledInput>
      <label htmlFor={id}>{label}</label>
      <input type={type} {...register} id={id} />
      {error ? <p>{error.message}</p> : null}
    </StyledInput>
  </>
);
