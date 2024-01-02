import { useSelector } from 'react-redux';
import { selectIsAuth } from '../redux/auth/selectors';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { LoginForm } from '../components/LoginForm/LoginForm';

const LoginPage = () => {
  const isAuth = useSelector(selectIsAuth);

  const navigate = useNavigate();

  useEffect(() => {
    isAuth && navigate('contacts');
  }, [isAuth, navigate]);

  return <LoginForm />;
};

export default LoginPage;
