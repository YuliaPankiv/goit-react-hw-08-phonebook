import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { deleteContact, fetchAll } from 'redux/user/operation';
import { selectUser } from 'redux/user/selectors';
import { Delete, Item, List } from './Contacts.styled.js';

export const Contacts = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log(user);
  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);
  const { id } = useParams();
  return (
    <List>
      {user.map(({ name, id, phone }) => {
        return (
          <Item key={id}>
            <p>
              {name}: {phone}
            </p>
            <Delete type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </Delete>
          </Item>
        );
      })}
    </List>
  );
};
