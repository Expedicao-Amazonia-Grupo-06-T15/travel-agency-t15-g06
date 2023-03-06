import React from 'react';
import { Route, Routes } from 'react-router';
import HomePage from '../pages/HomePage';
import LandingPage from '../pages/LandingPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import Dashboard from '../pages/Dashboard';
import Blog from '../pages/Blog';
import AboutPage from '../pages/About';

const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/travels' element={<LandingPage />} />
    <Route path='/register' element={<RegisterPage />} />
    <Route path='/login' element={<LoginPage />} />
    <Route path='/dashboard' element={<Dashboard />} />
    <Route path='/blog' element={<Blog />} />
    <Route path='/about' element={<AboutPage />} />
  </Routes>
);

export default AppRoutes;
