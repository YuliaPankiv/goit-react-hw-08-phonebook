import { useDispatch, useSelector } from 'react-redux';
import Contacts from '../components/Contacts/index';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/user/operation';
import { selectIsAuth } from '../redux/auth/selectors';

//sfc
const UserPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  console.log('userPage');

  return <Contacts />;
};
export default UserPage;
