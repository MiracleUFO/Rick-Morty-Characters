import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateSearch, updateSearchResults } from '../redux/reducers/search';

import Input from '../styles/SearchBar';

const SearchBar = () => {
    const [search, setSearch] = useState('');

    const { allCharacters }  = useSelector(state => state.characters);
    const dispatch = useDispatch();

    // Sorts search results to include only the characters that contain all search terms
    const getMostOccuringCharacters = useCallback((givenCoincidences) => {
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
                            
                            if (value.includes(term)) {
                                valueArray.forEach(val => {
                                    if (val.startsWith(term)) {
                                        coincidence.count = coincidence.count ? coincidence.count + 1 : 1;
                                    }
                                });
                            }
                        }
                    });
                }

                if (JSON.stringify(coincidence) !== '{}') {
                    charactersCounts.push(coincidence);
                }
            });
            dispatch(updateSearchResults(getMostOccuringCharacters(charactersCounts)));
        }
    }, [allCharacters, dispatch, getMostOccuringCharacters]);

    // Sets searchTerms array in store and calls filter func when user inputs search term
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
        <Input
            id='search'
            value={search}
            onChange={(e) => setSearch(e.target.value)} 
            placeholder='Search characters...'
        />
    );
};

export default SearchBar;