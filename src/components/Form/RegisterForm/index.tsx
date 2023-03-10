import { SubmitHandler, useForm } from 'react-hook-form';
import { useContext } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';
import { iRegisterFormValues } from '../../../contexts/UserContext/types';
import { Input } from '../Input';

const schema = yup
  .object({
    name: yup.string().required('Nome é obrigatório'),
    email: yup
      .string()
      .email('Digite um e-mail válido')
      .required('E-mail é obrigatório'),
    password: yup.string(),
  })
  .required();

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterFormValues>({
    resolver: yupResolver(schema),
  });

  const { userRegister } = useContext(UserContext);

  const submit: SubmitHandler<iRegisterFormValues> = (
    formData: iRegisterFormValues
  ) => {
    userRegister(formData);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input
        label='Nome'
        type='text'
        register={register('name')}
        error={errors.name}
      />
      <Input
        label='Email'
        type='email'
        register={register('email')}
        error={errors.email}
      />
      <Input
        label='Senha'
        type='password'
        register={register('password')}
        error={errors.password}
      />
      <button type='submit'>Criar conta</button>
      <p>
        Já tem uma conta? <Link to='/login'>Faça login</Link>
      </p>
    </form>
  );
};

export default RegisterForm;
