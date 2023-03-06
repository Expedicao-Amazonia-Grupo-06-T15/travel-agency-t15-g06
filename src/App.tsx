import AppRoutes from './routes/routes';
import DefaultTemplate from './templates/DefaultTemplate';

const App = () => {
  return (
    <div className='App'>
      <DefaultTemplate>
        <AppRoutes />
      </DefaultTemplate>
    </div>
  );
};

export default App;
