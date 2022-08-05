import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearch, updateStrict } from '../redux/reducers/search';

import Tooltip from './Tooltip';
import SearchTab from './SearchTab';
import { GiArcheryTarget } from 'react-icons/gi';

import { InputContainer, Input } from '../styles/Search';
import 'tippy.js/dist/tippy.css';

const SearchBar = () => {
    const 
        dispatch = useDispatch(),
        { strict, search } = useSelector(state => state.search),
        [searchLocal, setSearchLocal] = useState(search),
        [noOfTimesFocus, setNoOfTimesFocus] = useState(0),
        [tooltipVisible, setTooltipVisible] = useState(false),
        toggleStrict = () => dispatch(updateStrict(!strict)),
        tooltipContent =
            <>
                {!strict ?
                    <>
                        <h1>Use Strict?</h1>
                        <p>
                            If you would like only exact matches,
                            enable strict search.
                        </p>
                    </>
                :
                    <>
                        <h1>Strict enabled.</h1>
                        <p>With strict search only exact matches will be shown.</p>
                    </>
                }
            </> 
    ;

    useEffect(() => {
        if ((noOfTimesFocus === 1 || strict)) {
            setTooltipVisible(true);
            setTimeout(() => setTooltipVisible(false), 5000);
        }
    }, [noOfTimesFocus, strict]);

    useEffect(() => {
        dispatch(updateSearch(searchLocal.trim()));
    }, [dispatch, searchLocal]);

    return (
        <>
            <InputContainer strictSearch={strict} noOfTimesFocus={noOfTimesFocus} tooltipVisible={tooltipVisible}>
                <Tooltip visible={tooltipVisible} content={tooltipContent}>
                    <Input
                        id='search'
                        value={searchLocal}
                        placeholder='Search characters...'
                        onChange={(e) => setSearchLocal(e.target.value ? e.target.value.trimStart() : '')}
                        onFocus={() => setNoOfTimesFocus(noOfTimesFocus + 1)}
                        onBlur={() => setTooltipVisible(false)}
                    />
                </Tooltip>
                <GiArcheryTarget onClick={toggleStrict}  />
            </InputContainer>
            <SearchTab setSearchBar={setSearchLocal} />
        </>
    );
};

export default SearchBar;