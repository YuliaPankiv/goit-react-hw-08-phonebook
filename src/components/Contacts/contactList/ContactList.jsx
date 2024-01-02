import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/user/selectors';
import { fetchContacts } from 'redux/user/operation';
import { selectIsAuth } from 'redux/auth/selectors';

import { ItemContact } from 'components/Contacts/Item/Item';
import { Item, List } from './ContactList.styled';
import { useEffect } from 'react';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <List>
        {filteredContacts &&
          filteredContacts.map(currentContact => {
            return (
              <Item key={currentContact.id}>
                <ItemContact currentContact={currentContact} />
              </Item>
            );
          })}
      </List>
    </>
  );
};
