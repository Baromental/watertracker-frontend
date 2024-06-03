import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout'
import WelcomePage from '../pages/WelcomePage/WelcomePage';
import SignupPage from '../pages/SignupSigninPage/SignupPage';
import SigninPage from '../pages/SignupSigninPage/SigninPage';
import PrivateRoutes from '../routes/PrivateRoutes'
import PublicRoutes from '../routes/PublicRoutes'

import 'modern-normalize';
import MainPage from '../pages/MainPage/MainPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage />} />
          <Route path="signup" element={ <PublicRoutes> <SignupPage/> </PublicRoutes> } />
          <Route path="signin" element={ <PublicRoutes> <SigninPage /> </PublicRoutes> } />
          <Route path="water-tracker" element={ <PrivateRoutes> <MainPage /> </PrivateRoutes> } />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
