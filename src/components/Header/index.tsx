import { Link } from 'react-router-dom';
import { useContext } from 'react';
import {
  ButtonsWrapper,
  DropdownMenuContainer,
  HeaderContainer,
  LogoContainer,
  NavContainer,
  UlButtons,
  UlLinksContainer,
} from './style';
import logo from '../../assets/images/logo.svg';
import dropdownMenuImg from '../../assets/images/dropdown-menu.svg';
import { UserContext } from '../../contexts/UserContext';

export const Header = () => {
  const { user, userLogout } = useContext(UserContext);

  return (
    <>
      {user ? (
        <HeaderContainer>
          <LogoContainer>
            <img src={logo} alt='Logo' />
          </LogoContainer>
          <DropdownMenuContainer>
            <img src={dropdownMenuImg} alt='' />
          </DropdownMenuContainer>

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
              <div>
                <button onClick={userLogout}>Sair</button>
              </div>
            </UlButtons>
          </ButtonsWrapper>
        </HeaderContainer>
      ) : (
        <HeaderContainer>
          <LogoContainer>
            <img src={logo} alt='Logo' />
          </LogoContainer>
          <DropdownMenuContainer>
            <img src={dropdownMenuImg} alt='' />
          </DropdownMenuContainer>

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
      )}
    </>
  );
};
