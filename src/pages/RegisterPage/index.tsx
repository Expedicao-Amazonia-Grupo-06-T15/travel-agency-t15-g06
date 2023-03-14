import RegisterForm from '../../components/Form/RegisterForm';
import { ContentContainer, Main, PageContainer, TitleWrapper } from './style';
import registerImg from '../../assets/images/registerImg.png';

export const RegisterPage = () => {
  return (
    <PageContainer>
      <ContentContainer>
        <img src={registerImg} alt='' />
        <Main>
          <TitleWrapper>
            <h1>Crie uma conta</h1>
          </TitleWrapper>
          <RegisterForm />
        </Main>
      </ContentContainer>
    </PageContainer>
  );
};
