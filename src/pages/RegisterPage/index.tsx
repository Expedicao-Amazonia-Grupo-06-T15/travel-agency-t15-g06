import RegisterForm from '../../components/Form/RegisterForm';
import { PageContainer, TitleWrapper } from './style';

export const RegisterPage = () => {
  return (
    <PageContainer>
      <main>
        <TitleWrapper>
          <h1>Crie uma conta</h1>
        </TitleWrapper>
        <RegisterForm />
      </main>
    </PageContainer>
  );
};
