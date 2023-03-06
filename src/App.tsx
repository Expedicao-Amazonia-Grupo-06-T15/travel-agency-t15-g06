import AppRoutes from './routes/routes';
import DefaultTemplate from './templates/DefaultTemplate';

export const App = () => {
  return (
    <div className='App'>
      <DefaultTemplate>
        <AppRoutes />
      </DefaultTemplate>
    </div>
  );
};
