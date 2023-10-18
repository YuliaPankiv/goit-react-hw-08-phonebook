import { Item, Link } from './AuthNav.styled';
import { List } from './Navigation.styled';

export const Navigation = () => {
  return (
    <>
      <List>
        <Item>
          <Link to="/">Home</Link>
        </Item>
      </List>
    </>
  );
};
