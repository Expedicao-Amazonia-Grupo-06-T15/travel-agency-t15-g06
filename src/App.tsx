import { AppRoutes } from './routes/routes';
import { DefaultTemplate } from './templates/DefaultTemplate';
import { UserProvider } from './contexts/UserContext';

export const App = () => {
  return (
    <div className='App'>
      <DefaultTemplate>
        <UserProvider>
          <AppRoutes />
        </UserProvider>
      </DefaultTemplate>
    </div>
  );
};
