import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Delete, Item, List } from './Contacts.styled.js.js';
import { deleteContact, getContacts } from 'redux/user/operation.js';
import { selectFilteredContacts } from 'redux/user/selectors.js';
import { selectToken } from 'redux/auth/selectors.js';

export const Contacts = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const token = useSelector(selectToken);
  useEffect(() => {
    dispatch(getContacts(token));
  }, [dispatch, token]);

  return (
    <>
      <List>
        {filteredContacts.map(({ name, id, number }) => {
          return (
            <Item key={id}>
              <p>
                {name}&nbsp;: {number}
              </p>
              <Delete type="button" onClick={() => dispatch(deleteContact(id))}>
                Delete
              </Delete>
            </Item>
          );
        })}
      </List>
    </>
  );
};
