import { Outlet } from 'react-router-dom';
import { Container, Header } from './Layout.styled';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { HomePage } from 'pages/HomePage';
import { UserPage } from 'pages/UserPage';
import { Item, Link, List } from 'components/AuthNav/AuthNav.styled';

export const Layout = () => {
  const isAuth = useSelector(state => state.auth.isAuth);
  // const isAuth = false;
  return (
    <>
      <Header>
        <Navigation />
        {isAuth ? <UserMenu /> : <AuthNav />}
      </Header>
      <main>
        {isAuth ? <UserPage /> : <HomePage />}
        <Outlet />
      </main>
    </>
  );
};
