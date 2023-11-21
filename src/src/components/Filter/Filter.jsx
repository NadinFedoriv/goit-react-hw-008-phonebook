import './Filter.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (    
      <label className="filter">
        Find contacts by name
        <input
          className="field"
          type="text"
          name="filter"
          value={filter}
          onChange={changeFilter}
        />
      </label>
    
  );
}
