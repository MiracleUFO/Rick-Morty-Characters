import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateCharactersLength } from '../redux/reducers/characters';
import { updateSearchTermsCountObject } from '../redux/reducers/search';

import { combine, getUniqueValues } from '../helpers/getUniqueValues';
import { getDuplicateValues } from '../helpers/getDuplicateValues';
import { isAllNestedFalsy } from '../helpers/isAllFalsy';
import { isInTimeFrame } from '../helpers/isInTimeFrame';

import DateGroup from './DateGroup';
import Message from './Message';

import {
    TableContainer,
    TableContent,
    TableHead,
} from '../styles/Table';

const Table = ({ data }) => {
    const
        dispatch = useDispatch(),
        { strict, search, searchTerms } = useSelector(state => state.search),
        { filters, currentFilterTag } = useSelector(state => state.filter),
        { charactersLength } = useSelector(state => state.characters),
        [results, updateResults] = useState([]),
        [groupedData, setGroupedData] = useState([]),
        [searchResults, updateSearchResults] = useState([]),
        [filterResults, updateFilterResults] = useState([])
    ;

    useEffect(() => {
        if (data) {
            updateResults([...data]);
        }
    }, [data]);

    // Groups characters by date for display
    const groupDataByDate = useCallback(() => {
        if (results) {
            const groups = results.reduce((groups, character) => {
                const date = character.created.split('T')[0];
                if (!groups[date]) {
                    groups[date] = [];
                }
                groups[date].push(character);
                return groups;
            }, {});
              
            const groupArrays = Object.keys(groups).map((date) => {
                return {
                    date,
                    characters: groups[date]
                };
            });
            return groupArrays;
        }
    }, [results]);

    // Calls groupDataByDate each time results is updated
    useEffect(() => {
        setGroupedData((groupDataByDate(results)));
    }, [results, groupDataByDate]);

    // Changes characters length in store when results is updated
    useEffect(() => {
        if (data.length) dispatch(updateCharactersLength(results?.length));
    }, [data.length, dispatch, results?.length]);

    // Filters results when search term is inputted
    useEffect(() => {
        if (search && data.length) {
            const tempResults = [], termsCountObject = {};

            data.forEach(character => {
                const 
                    { name, gender, status, location } = character,
                    newCharacter = { name, gender, status, location }
                ;
                Object.values(newCharacter).forEach(v => {
                    searchTerms.forEach(term => {
                        const 
                            value = typeof v === 'string' ? v.toLowerCase() : v.name.toLowerCase(),
                            valueArray = value.split(' ')
                        ;

                        if (strict) {
                            if (value.toLowerCase().startsWith(search.toLowerCase())) {
                                tempResults.push(character);
                            }
                        } else {
                            if (value.includes(term)) {
                                valueArray.forEach(val => {
                                    if (val.startsWith(term)) {
                                        tempResults.push(character);
                                        termsCountObject[term] = termsCountObject[term] ? termsCountObject[term] + 1 : 1;
                                    }
                                });
                            } else {
                                termsCountObject[term] = termsCountObject[term] ?? 0;
                            }
                        }
                    });
                });     
            });
            dispatch(updateSearchTermsCountObject(termsCountObject));
            updateSearchResults(getUniqueValues(tempResults));
        } else updateSearchResults([]);
    }, [data, dispatch, search, searchTerms, strict]);

    // Filters results when filters are changed
    useEffect(() => {
        if (!isAllNestedFalsy(filters)) {
            let allFilterResults = [];
            const differentFilterResults = [];

            data.forEach(character => {
                const
                    { id, name, gender, status, location, created } = character,
                    newCharacter = { id, name, gender, status, location, created };

                Object.entries(filters).forEach(filter => {
                    const newTag = filter[0];

                    for (const [k, v] of Object.entries(filter[1])) {
                        if (v) {
                            if ((newCharacter[newTag].toLowerCase() === k || isInTimeFrame(k, newCharacter.created))) {
                                allFilterResults.push(character);
                                if (newTag === currentFilterTag[0]) {
                                    differentFilterResults.push(character);
                                }
                            }
                        }
                    }
                });
            });

            if (!differentFilterResults.length && filters[currentFilterTag[0]][currentFilterTag[1]]) allFilterResults = [];
            else allFilterResults = getDuplicateValues(allFilterResults).length ? getDuplicateValues(allFilterResults) : allFilterResults;

            updateFilterResults(allFilterResults); 
        } else updateFilterResults([])
    }, [data, currentFilterTag, filters]);

    // Combines search and filter results
    useEffect(() => {
        const isFalsy = isAllNestedFalsy(filters);

        if (filterResults.length && searchResults.length) {
            const uniqueResults = combine(filterResults, searchResults);
            updateResults((uniqueResults));
        }   else if ((!filterResults.length && !isFalsy) || (!searchResults.length && search)) updateResults([]);
            else if (filterResults.length) updateResults(filterResults)
            else if (searchResults.length) updateResults(searchResults)
            else if (!filterResults.length && !searchResults.length) updateResults(data)
        ;
    }, [data, search, filters, searchResults, filterResults]);

    return (
        <TableContainer>
            {charactersLength ?
                <TableContent>
                    <TableHead>
                        <tr>
                            <th>Date</th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Status</th>
                            <th>Location</th>
                        </tr>
                    </TableHead>

                    {groupedData?.map((group, index) => 
                        <DateGroup 
                            key={index}
                            date={group.date} 
                            characters={group.characters}
                        />
                    )}
                </TableContent>
            :   <Message dataLength={charactersLength} search={search} strict={strict} />
            }
        </TableContainer>
    );
};

export default Table;