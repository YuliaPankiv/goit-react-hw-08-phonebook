import { Button, Mail } from './UserMenu.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectEmail } from 'redux/auth/selectors';
import { logOutUser } from 'redux/auth/operation';
import { Item, Link, List } from 'components/NavStyle.styled';

export const UserMenu = () => {
  const email = useSelector(selectEmail);
  const dispatch = useDispatch();
  return (
    <>
      <List>
        <Item>
          <Link to="contacts">Contacts</Link>
        </Item>
      </List>

      <Mail>
        Welcome&nbsp;<span>{email}</span>
      </Mail>

      <Button type="button" onClick={() => dispatch(logOutUser())}>
        Logout
      </Button>
    </>
  );
};
