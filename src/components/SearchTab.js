import { useSelector, useDispatch } from 'react-redux';
import { updateSearch } from '../redux/reducers/search';

import { TabContainer, Tab } from '../styles/Search';

const SearchTab = ({ setSearchBar }) => {
    const 
        dispatch = useDispatch(),
        { search, searchTermsCount } = useSelector(state => state.search),
        { charactersLength } = useSelector(state => state.characters)
    ;

    const removeTerm = (key) => {
        const newSearch = search.replace(key, '');
        setSearchBar(newSearch);
        dispatch(updateSearch(newSearch));
    };

    return (
        <TabContainer>
            {charactersLength && search ?
                Object.entries(searchTermsCount).map(([key, value], index) =>
                    <Tab key={index}>
                        <span className='x-icon' onClick={() => removeTerm(key)}>x</span>
                        <p className='term'>{key}</p>
                        <div className='count'>{value}</div>
                    </Tab>
                )
                :   null
            }
        </TabContainer>
    )
};

export default SearchTab;