import { Button, Mail } from './UserMenu.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectEmail } from 'redux/auth/selectors';
import { logOutUser } from 'redux/auth/operation';

export const UserMenu = () => {
  const email = useSelector(selectEmail);
  const dispatch = useDispatch();
  return (
    <>
      <Mail>
        Welcome&nbsp;<span>{email}</span>
      </Mail>

      <Button type="button" onClick={() => dispatch(logOutUser())}>
        Logout
      </Button>
    </>
  );
};
