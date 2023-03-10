import { ReservationsProvider } from './contexts/ReservationsContext';
import { AppRoutes } from './routes/routes';
import { DefaultTemplate } from './templates/DefaultTemplate';
import { UserProvider } from './contexts/UserContext';

export const App = () => {
  return (
    <div className='App'>
      <DefaultTemplate>
        <ReservationsProvider>
          <UserProvider>
            <AppRoutes />
          </UserProvider>
        </ReservationsProvider>
      </DefaultTemplate>
    </div>
  );
};
