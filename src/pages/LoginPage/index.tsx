import { LoginForm } from '../../components/Form/LoginForm';
import { ContentContainer, Main, PageContainer, TitleWrapper } from './style';
import loginImg from '../../assets/images/loginImg.png';

export const LoginPage = () => {
  return (
    <PageContainer>
      <ContentContainer>
        <img src={loginImg} alt='Ilustração' />
        <Main>
          <TitleWrapper>
            <h1>bem-vindo</h1>
          </TitleWrapper>
          <LoginForm />
        </Main>
      </ContentContainer>
    </PageContainer>
  );
};
