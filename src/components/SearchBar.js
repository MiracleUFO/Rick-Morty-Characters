import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { updateSearch } from '../redux/reducers/search';

import Input from '../styles/SearchBar';

const SearchBar = () => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateSearch(search.trim()));
    }, [dispatch, search]);

    return (
        <Input
            id='search'
            value={search}
            onChange={(e) => setSearch(e.target.value)} 
            placeholder='Search characters...'
        />
    );
};

export default SearchBar;