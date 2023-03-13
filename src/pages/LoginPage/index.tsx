import { LoginForm } from '../../components/Form/LoginForm';
import { PageContainer, TitleWrapper } from './style';

export const LoginPage = () => {
  return (
    <PageContainer>
      <main>
        <TitleWrapper>
          <h1>bem-vindo</h1>
        </TitleWrapper>
        <LoginForm />
      </main>
    </PageContainer>
  );
};
