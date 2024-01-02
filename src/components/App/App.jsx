import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { AuthForm } from 'components/AuthForm/AuthForm';
import LoginPage from 'pages/LoginPage';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';
import Layout from '../Layout/Layout';
import UserPage from '../../pages/UserPage';
import { HomePage } from 'pages/HomePage';
// const UserPage = import(() => '../../pages/UserPage');
export const App = () => {
  return (
    <>
      <Suspense fallback={'Loading.....'}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />{' '}
            <Route
              path="/contacts"
              element={
                <PrivateRoute component={UserPage} redirectTo="/login" />
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute component={AuthForm} redirectTo="/contacts" />
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute component={LoginPage} redirectTo="/contacts" />
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
