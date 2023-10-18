import { Link, List } from 'components/Navigation/Navigation.styled';
import { Button, Container } from './UserMenu.styled';

export const UserMenu = () => {
  return (
    <>
      {/* <ul>
        <List>
          <Link to="/users">Contacts</Link>
        </List>
      </ul> */}
      <>
        <p>mango@mail.com</p>

        <Button>Logout</Button>
      </>
    </>
  );
};
