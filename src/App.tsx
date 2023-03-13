import { ReservationsProvider } from './contexts/ReservationsContext';
import { AppRoutes } from './routes/routes';
import { DefaultTemplate } from './templates/DefaultTemplate';
import { UserProvider } from './contexts/UserContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <div className='App'>
      <ReservationsProvider>
        <UserProvider>
          <DefaultTemplate>
            <AppRoutes />
          </DefaultTemplate>
        </UserProvider>
      </ReservationsProvider>
      <ToastContainer position='top-center' theme='light' />
    </div>
  );
};
