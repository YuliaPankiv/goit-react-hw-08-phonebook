import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/auth/selectors';
import { useEffect } from 'react';
import { refreshCurrentUser } from 'redux/auth/operation';
import { Navigation } from 'components/Navigation/Navigation';
import { UserPage } from 'pages/UserPage';
import { Contacts } from 'components/Contact/ContactList/Contacts';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { AuthForm } from 'components/AuthForm/AuthForm';
import { HomePage } from 'pages/HomePage';

export const App = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshCurrentUser);
  }, [dispatch]);
  return (
    <>
      <Navigation />
      {isAuth ? (
        <Routes>
          <Route path="/users" element={<UserPage />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      ) : (
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/register" element={<AuthForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      )}
    </>
  );
};
