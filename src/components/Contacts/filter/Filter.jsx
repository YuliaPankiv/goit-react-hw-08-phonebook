import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';
import { setFilter } from '../../../redux/user/contactSlice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <TextField
      id="standard-basic"
      label="Filter"
      variant="standard"
      name="filter"
      onChange={e => {
        dispatch(setFilter(e.target.value));
      }}
    />
  );
};

export default Filter;
