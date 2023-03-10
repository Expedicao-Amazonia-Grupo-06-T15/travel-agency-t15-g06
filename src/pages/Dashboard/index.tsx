import { useContext } from 'react';
import { UserDashboard } from '../../components/UserDashboard';
import { UserContext } from '../../contexts/UserContext';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <section>
        <h2>Olá, {user?.name}</h2>
        <span>Administre as suas reservas aqui</span>
        <nav>
          <ul>
            <li>
              <Link to='/reservas'>Minhas reservas</Link>
            </li>
            <li>
              <Link to='/favorites'>Meus favoritos</Link>
            </li>
            <li>
              <Link to='/reviews'>Minhas avaliações</Link>
            </li>
          </ul>
        </nav>

        <UserDashboard />
      </section>

      <section>
        <h4>Passeio selecionado</h4>
        <span>Você não adicionou passeios extras</span>
      </section>
    </>
  );
};
