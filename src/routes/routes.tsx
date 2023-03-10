import { Route, Routes } from 'react-router';
import { LandingPage } from '../pages/LandingPage';
import { ExplorePage } from '../pages/ExplorePage';
import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';
import { Dashboard } from '../pages/Dashboard';
import { Blog } from '../pages/Blog';
import { AboutPage } from '../pages/About';
import { ErrorPage } from '../pages/404Page';
import { ProtectedRoutes } from './protectedRoutes';
import { UserProvider } from '../contexts/UserContext';
import { BlogProvider } from '../contexts/BlogContext';

export const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<LandingPage />} />
    <Route path='/explore' element={<ExplorePage />} />
    <Route path='/register' element={<RegisterPage />} />
    <Route path='/login' element={<LoginPage />} />
    <Route path='/dashboard' element={<ProtectedRoutes />} />
    <Route path='/dashboard' element={<ProtectedRoutes />}>
      <Route
        path='/dashboard'
        element={
          <UserProvider>
            <Dashboard />
          </UserProvider>
        }
      />
    </Route>
    <Route
      path='/blog'
      element={
        <BlogProvider>
          <Blog />
        </BlogProvider>
      }
    />
    <Route path='/about' element={<AboutPage />} />
    <Route path='*' element={<ErrorPage />} />
  </Routes>
);
