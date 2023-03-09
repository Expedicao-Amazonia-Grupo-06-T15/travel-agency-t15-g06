import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { StyledNotFound } from './style';

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <StyledNotFound>
      <h1>4 0 4</h1>
      <p>Oops! Essa página não existe ou foi removida.</p>
      <div className='btns'>
        <button className='homeBtn'>
          <Link to={'/'}>Home </Link>
        </button>
        <button className='backBtn' onClick={() => navigate(-1)}>
          Voltar
        </button>
      </div>
    </StyledNotFound>
  );
};
