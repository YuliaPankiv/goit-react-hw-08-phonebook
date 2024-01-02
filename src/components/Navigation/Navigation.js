import { Header } from 'components/Layout/Layout.styled';
import { useSelector } from 'react-redux';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { Item, Link, List } from 'components/NavStyle.styled';
import { selectIsAuth } from '../../redux/auth/selectors';

export const Navigation = () => {
  const isAuth = useSelector(selectIsAuth);
  return (
    <>
      <Header>
        <nav>
          <List>
            <Item>
              <Link to="/">Home</Link>
            </Item>
          </List>
        </nav>

        {isAuth ? <UserMenu /> : <AuthNav />}
      </Header>
    </>
  );
};
