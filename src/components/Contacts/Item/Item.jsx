// import { SlUserUnfollow } from 'react-icons/sl';
import { Delete } from 'components/Contacts/contactList/ContactList.styled';
import { useDispatch } from 'react-redux';
import { TodoWrapper } from './Item.styled';
import { deleteContact } from '../../../redux/user/operation';

export const ItemContact = ({ currentContact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <TodoWrapper>
      <p>
        <span>{name}</span>: <span>{number}</span>
      </p>
      <div>
        <Delete onClick={() => dispatch(deleteContact(id))}>
          {/* <SlUserUnfollow /> */}Delete
        </Delete>
      </div>
    </TodoWrapper>
  );
};
