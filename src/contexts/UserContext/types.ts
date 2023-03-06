export interface iDefaultProviderProps {
  children: React.ReactNode;
}

export interface iUser {
  id: string;
  name: string;
  email: string;
}

export interface iRegisterFormValues {
  name: string;
  email: string;
  password: string;
}

export interface iuserRegisterAndLogin {
  user: iUser;
  accessToken: string;
}

export interface iLoginFormValues {
  email: string;
  password: string;
}

export interface iUserLoad {
  email: string;
  id: string;
  name: string;
  password: string;
}

export interface iUserContext {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  user: null | iUser;
  userRegister: (formData: iRegisterFormValues) => Promise<void>;
  userLogin: (formData: iLoginFormValues) => Promise<void>;
  userLogout: () => void;
  userLoad: () => Promise<void>;
}
