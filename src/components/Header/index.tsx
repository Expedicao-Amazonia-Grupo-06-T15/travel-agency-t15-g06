import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  ButtonsWrapper,
  HeaderContainer,
  LogoContainer,
  NavContainer,
  UlButtons,
  UlLinksContainer,
} from './style';
import logo from '../../assets/images/logo.svg';

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={logo} alt='Logo' />
      </LogoContainer>
      <NavContainer>
        <UlLinksContainer>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/explore'>Viagens</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
          <li>
            <Link to='/about'>Contato</Link>
          </li>
          <li>
            <Link to='/about'>Sobre</Link>
          </li>
        </UlLinksContainer>
      </NavContainer>

      <ButtonsWrapper>
        <UlButtons>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <div>
            <li>
              <Link to='/register'>Cadastre-se</Link>
            </li>
          </div>
        </UlButtons>
      </ButtonsWrapper>
    </HeaderContainer>
  );
};
