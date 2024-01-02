// import { useDispatch, useSelector } from 'react-redux';
// import { Delete, Item, List } from './Contacts.styled.js.js';
// import { deleteContact } from 'redux/user/operation.js';
// import { selectFilteredContacts } from 'redux/user/selectors.js';

// const Contacts = () => {
//   const dispatch = useDispatch();
//   const filteredContacts = useSelector(selectFilteredContacts);
//   return (
//     <>
//       <List>
//         {filteredContacts.map(({ name, id, number }) => {
//           return (
//             <Item key={id}>
//               <p>
//                 {name}&nbsp;: {number}
//               </p>
//               <Delete type="button" onClick={() => dispatch(deleteContact(id))}>
//                 Delete
//               </Delete>
//             </Item>
//           );
//         })}
//       </List>
//     </>
//   );
// };
// export default Contacts;
