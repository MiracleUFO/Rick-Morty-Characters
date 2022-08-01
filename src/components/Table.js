import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCharactersLength } from '../redux/reducers/characters';

import { combine } from '../helpers/getUniqueValues';
import { isAllNestedEmpty } from '../helpers/isAllEmpty';

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
        { search, searchTerms } = useSelector(state => state.search),
        { filters } = useSelector(state => state.filter),

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
    }, [results]);

    // Calls groupDataByDate when results is updated
    useEffect(() => {
        console.log('here');
        setGroupedData((groupDataByDate(results)));
    }, [results, groupDataByDate]);

    /*// Combines search and filter results
    useEffect(() => {
        if (data) {
            const uniqueResults = combine(filterResults, searchResults);
            updateResults((uniqueResults));
        }
    }, [filterResults, searchResults]);

    // Controls results in table to be displayed depending on search terms and filters having a value
    useEffect(() => {
        if (data) {
            const isEmpty = isAllNestedEmpty(filters);
            if (searchTerms.length === 0 && isEmpty) {
                updateResults([...data]);
            } else if (searchTerms.length === 0) {
                updateResults(filterResults);
            } else if (isEmpty) {
                updateResults(searchResults);
            }
        }
    }, [dispatch, searchTerms, filters, filterResults, searchResults, results.length, data]);

    useEffect(() => {
        if (data) {
            console.log(results);
            dispatch(updateCharactersLength(results.length));
            console.log('hey')
        }
    }, [data, results.length]);*/

    return (
        <TableContainer>
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
        </TableContainer> 
    );
};

export default Table;