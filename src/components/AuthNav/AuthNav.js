import { Item, Link, List } from 'components/NavStyle.styled';

export const AuthNav = () => {
  return (
    <nav>
      <List>
        <Item>
          <Link to="/register">Sign Up</Link>
        </Item>
        <Item>
          <Link to="/login">Sign In</Link>
        </Item>
      </List>
    </nav>
  );
};
