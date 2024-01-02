// import { Form, Label } from 'components/AuthForm/AuthForm.styled';
// import { useSelector, useDispatch } from 'react-redux';
// import { selectFilter } from 'redux/user/selectors';
// import { setFilter } from 'redux/user/slice';

// export const Filter = () => {
//   const dispatch = useDispatch();
//   const filter = useSelector(selectFilter);
//   return (
//     <Form>
//       <Label>
//         Find ny name
//         <input
//           type="text"
//           name="filter"
//           value={filter}
//           required
//           onChange={e => {
//             dispatch(setFilter(e.target.value));
//           }}
//         />
//       </Label>
//     </Form>
//   );
// };
