import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage';
import { UserPage } from '../pages/UserPage';
import { AuthNav } from './Navigation/AuthNav';
import { LoginForm } from './LoginForm/LoginForm';
import { AuthForm } from './AuthNav/AuthForm/AuthForm';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<AuthForm />} />
      </Route>
    </Routes>
  );
};
