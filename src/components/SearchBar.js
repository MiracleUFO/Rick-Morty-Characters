import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateSearch, updateSearchResults } from '../redux/reducers/search';

import '../styles/SearchBar.css';

const SearchBar = () => {
    const [search, setSearch] = useState('');

    const { allCharacters }  = useSelector(state => state.characters);
    const dispatch = useDispatch();

    // Sorts search results to include only the characters that contain all search terms
    const getMostOccuring = useCallback((givenCoincidences) => {
        const 
            noOfSearchTerms = search.trim().split(' ').length,
            mostOccuring = givenCoincidences.filter(coincidence => coincidence.count >= noOfSearchTerms),
            results = mostOccuring.map(({count, ...otherAttrs}) => otherAttrs);
            return results;
    }, [search]);

    // Searches characters using their string properties (name, gender, status, and location)
    const filterCharacters = useCallback(() => {
        if (search.trim()) {
            const terms = search.trim().toLowerCase().split(' '), charactersCounts = [], newFilteredCharacters = [...allCharacters];

            newFilteredCharacters.map(character => {
                const   
                    { id, name, gender, status, location, created, image } = character, 
                    newCharacter = { id, name, gender, status, location, created, image },
                    coincidence = {...newCharacter};

                for (const [k, v] of Object.entries(newCharacter)) {
                    terms.forEach(term => {
                        if (k !== 'image') {
                            const value = typeof v === 'string' ? v.toLowerCase() : v.name.toLowerCase();
                            const valueArray = value.split(' ');
                            if (value.startsWith(term) || value.startsWith(term) || valueArray.includes(search.trim().toLowerCase())) {
                                coincidence.count = coincidence.count ? coincidence.count + 1 : 1;
                            }
                        }
                    });
                }

                if (JSON.stringify(coincidence) !== '{}') {
                    charactersCounts.push(coincidence);
                }

                const newArray = getMostOccuring(charactersCounts);
                dispatch(updateSearchResults(newArray));
                return character;
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, getMostOccuring, search]);

    // Sets searchTerms array in store
    useEffect(() => {
        if (search.trim()) {
            dispatch(updateSearch(search.trim().toLowerCase().split(' ')));
            filterCharacters(search);
        } else {
            dispatch(updateSearch([]));
        }
    }, [search, dispatch, filterCharacters]);

    return (
        <input 
            value={search}
            onChange={(e) => setSearch(e.target.value)} 
            placeholder="Search characters..." 
        />
    );
};

export default SearchBar;