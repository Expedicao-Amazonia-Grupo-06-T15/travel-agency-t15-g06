import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import {
  iDefaultProviderProps,
  iLoginFormValues,
  iRegisterFormValues,
  iUser,
  iUserContext,
  iUserLoad,
  iuserRegisterAndLogin,
} from './types';
import { toast } from 'react-toastify';

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iDefaultProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<iUser | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    userLoad();
  }, []);

  const userLoad = async () => {
    const token = localStorage.getItem('@TOKEN');
    const userId = localStorage.getItem('@USERID');
    if (token) {
      try {
        const response = await api.get<iUserLoad>(`/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const { email, id, name } = response.data;
        setUser({ email, id, name });
        navigate('/dashboard');
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error);
          localStorage.removeItem('@TOKEN');
        }
      }
    }
  };

  const userRegister = async (formData: iRegisterFormValues) => {
    try {
      const response = await api.post<iuserRegisterAndLogin>(
        '/users',
        formData
      );
      toast.success('Cadastro realizado com sucesso');
      navigate('/login');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.data === 'Email already exists') {
          toast.error('Este e-mail já existe');
        } else if (error.response?.data === 'Password is too short') {
          toast.warning('Senha muito curta');
        }
      }
    }
  };

  const userLogin = async (formData: iLoginFormValues) => {
    try {
      setLoading(true);
      const response = await api.post<iuserRegisterAndLogin>('login', formData);
      const userId = response.data.user.id;
      localStorage.setItem('@TOKEN', response.data.accessToken);
      localStorage.setItem('@USERID', userId);
      setUser(response.data.user);
      toast.success('Login realizado com sucesso');
      navigate('/dashboard');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.data === 'Cannot find user') {
          toast.error('Usuário não encontrado');
        } else if (error.response?.data === 'Incorrect password') {
          toast.error('Senha incorreta');
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem('@TOKEN');
    localStorage.removeItem('@USERID');
    localStorage.removeItem('@productsCart');
    navigate('/');
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        user,
        userRegister,
        userLogin,
        userLogout,
        userLoad,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
