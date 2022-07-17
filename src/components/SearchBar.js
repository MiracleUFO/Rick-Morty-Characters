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
    const filterCharacters = useCallback((trimmedSearch) => {
        if (trimmedSearch) {
            const terms = trimmedSearch.toLowerCase().split(' '), charactersCounts = [];

            allCharacters.forEach(character => {
                const   
                    { id, name, gender, status, location, created, image } = character, 
                    newCharacter = { id, name, gender, status, location, created, image },
                    coincidence = {...newCharacter};

                for (const [k, v] of Object.entries(newCharacter)) {
                    terms.forEach(term => {
                        if (k !== 'image') {
                            const value = typeof v === 'string' ? v.toLowerCase() : v.name.toLowerCase();
                            const valueArray = value.split(' ');
                            if (value.startsWith(term) || value.startsWith(term) || valueArray.includes(trimmedSearch)) {
                                coincidence.count = coincidence.count ? coincidence.count + 1 : 1;
                            }
                        }
                    });
                }

                if (JSON.stringify(coincidence) !== '{}') {
                    charactersCounts.push(coincidence);
                }

                const arrayOfMostOccurances = getMostOccuring(charactersCounts);
                dispatch(updateSearchResults(arrayOfMostOccurances));
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, getMostOccuring, search]);

    // Sets searchTerms array in store and calls filter func
    useEffect(() => {
        const trimmedSearch = search.trim().toLowerCase();

        if (trimmedSearch) {
            dispatch(updateSearch(trimmedSearch.split(' ')));
            filterCharacters(trimmedSearch);
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