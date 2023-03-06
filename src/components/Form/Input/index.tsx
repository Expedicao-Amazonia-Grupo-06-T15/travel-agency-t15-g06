import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { StyledTextField } from './style';

interface iInputProps {
  label: string;
  type: 'text' | 'email' | 'password';
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
}

export const Input = ({ label, type, register, error }: iInputProps) => (
  <>
    <fieldset>
      <StyledTextField label={label} type={type} {...register} />
      {error ? <p>{error.message}</p> : null}
    </fieldset>
  </>
);
