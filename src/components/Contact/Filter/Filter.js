import { Form, Label } from 'components/AuthForm/AuthForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/user/FilterSlice';
import { selectFilter } from 'redux/user/selectors';
import { filterContacts } from 'redux/user/slice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  return (
    <>
      <Label>
        Find ny name
        <input
          type="text"
          name="filter"
          value={filter}
          required
          onChange={e => {
            dispatch(filterContacts(e.target.value));
          }}
        />
      </Label>
    </>
  );
};
