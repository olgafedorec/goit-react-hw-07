import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

export const SearchBox = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filters.name);
    const handleFilterChange = (evt) => {
        dispatch(changeFilter(evt.target.value));
    };
    return (
        <div>
            <p className={css.find}>Find contact by name</p>
            <input className={css.input} type="text" value={filter} onChange={handleFilterChange}/>
        </div>
    )
}