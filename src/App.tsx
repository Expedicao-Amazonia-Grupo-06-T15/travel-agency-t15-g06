import './App.css';
import { UserProvider } from './contexts/UserContext';
import { AppRoutes } from './routes/routes';

export const App = () => (
  <>
    <UserProvider>
      <AppRoutes />
    </UserProvider>
  </>
);
