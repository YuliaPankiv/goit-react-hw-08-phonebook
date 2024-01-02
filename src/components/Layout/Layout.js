import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshCurrentUser } from '../../redux/auth/operation';
import { Navigation } from '../Navigation/Navigation';

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default Layout;
