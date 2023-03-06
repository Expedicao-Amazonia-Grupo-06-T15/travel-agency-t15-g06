import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '../Input';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { StyledForm } from './style';
import { iLoginFormValues } from '../../../contexts/UserContext/types';
import { Link } from 'react-router-dom';

const schema = yup
  .object({
    email: yup
      .string()
      .email('Digite um e-mail válido')
      .required('Digite seu e-mail'),
    password: yup.string().required('Digite sua senha'),
  })
  .required();

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginFormValues>({
    resolver: yupResolver(schema),
  });
  const { userLogin, loading } = useContext(UserContext);

  const submit: SubmitHandler<iLoginFormValues> = (
    formData: iLoginFormValues
  ) => {
    userLogin(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        label='Email'
        type='email'
        id='email'
        register={register('email')}
        error={errors.email}
      />
      <Input
        label='Senha'
        type='password'
        id='password'
        register={register('password')}
        error={errors.password}
      />
      <span>Esqueceu a senha?</span>
      <button type='submit'>Login</button>
      {loading && <p>Loading...</p>}
      <p>
        Não tem uma conta? <Link to='/register'>Cadastre-se</Link>
      </p>
    </StyledForm>
  );
};
