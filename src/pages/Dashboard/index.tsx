// import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserDashboard } from '../../components/UserDashboard';
import { UserContext } from '../../contexts/UserContext';
import { Link } from 'react-router-dom';
import { BannerContainer } from '../ExplorePage/style';
import {
  CartTitle,
  ContentContainer,
  LinksList,
  NavReservations,
  ReservationCart,
  UserName,
} from './style';

export const Dashboard = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <BannerContainer />
      <ContentContainer>
        <UserName>Olá, {user?.name}</UserName>
        <span>Administre as suas reservas aqui</span>
        <NavReservations>
          <LinksList>
            <li>
              <Link to='/reservas'>Minhas reservas</Link>
            </li>
            <li>
              <Link to='/favorites'>Meus favoritos</Link>
            </li>
            <li>
              <Link to='/reviews'>Minhas avaliações</Link>
            </li>
          </LinksList>
        </NavReservations>
      </ContentContainer>

      <ReservationCart>
        <CartTitle>Hotel selecionado</CartTitle>
        <UserDashboard />
      </ReservationCart>
    </>
  );
};
