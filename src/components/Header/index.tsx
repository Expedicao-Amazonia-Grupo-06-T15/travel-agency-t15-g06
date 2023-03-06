import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <div>
        <h4>aqui vai o logo (img)</h4>
      </div>
      <nav>
        <ul>
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
            <Link to='/about'>Sobre nós</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/register'>Cadastre-se</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
