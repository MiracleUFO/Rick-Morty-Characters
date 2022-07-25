import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCharacters, updateCharacters } from '../redux/reducers/characters';
import { setPages } from '../redux/reducers/pages';

import { useQuery } from '@apollo/client';
import GET_CHARACTERS from '../queries/getCharacters';

import { combine } from '../helpers/getUniqueValues';
import { isAllNestedEmpty } from '../helpers/isAllEmpty';

import DateGroup from './DateGroup';
import Message from './Message';
import Pagination from './Pagination';

import {
    TableContainer,
    TableContent,
    TableHead,
} from '../styles/Table';

const Table = () => {
    const [groupedData, setGroupedData] = useState([]);

    const filteredCharacters  = useSelector(state => state.characters.results);
    const { allCharacters }  = useSelector(state => state.characters);
    const { searchResults, searchTerms } = useSelector(state => state.search);
    const { filterResults, filters } = useSelector(state => state.filter);
    const { noOfPages, currentPage } = useSelector(state => state.pages);

    const dispatch = useDispatch();

    const { data, loading, error } = useQuery(GET_CHARACTERS, {
        variables: {
            page: currentPage
        }
    });

    const results  = data?.characters.results;
    const pages = data?.characters?.info?.pages;

    useEffect(() => {
        dispatch(setPages(pages));
    }, [dispatch, pages])

    useEffect(() => {
        if (results?.length > 0) {
            dispatch(setCharacters(results));
            dispatch(updateCharacters(results));
        }
    }, [results, dispatch]);

    const groupDataByDate = useCallback(() => {
        const groups = filteredCharacters.reduce((groups, character) => {
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
    }, [filteredCharacters]);

    // Groups characters by date for display
    useEffect(() => {
        setGroupedData((groupDataByDate(filteredCharacters)));
    }, [filteredCharacters, groupDataByDate]);

    // Combines search and filter results
    useEffect(() => {
        const uniqueResults = combine(filterResults, searchResults);
        dispatch(updateCharacters(uniqueResults));
    }, [dispatch, filterResults, searchResults]);

    // Controls results to be displayed depending on search terms and filters having a value
    useEffect(() => {
        const isEmpty = isAllNestedEmpty(filters);
        if (searchTerms.length === 0 && isEmpty) {
            dispatch(updateCharacters(allCharacters))
        } else if (searchTerms.length === 0) {
            dispatch(updateCharacters(filterResults))
        } else if (isEmpty) {
            dispatch(updateCharacters(searchResults))
        }
    }, [dispatch, searchTerms, filters, allCharacters, filterResults, searchResults]);

    return (
        <TableContainer data={filteredCharacters}>
            {filteredCharacters?.length > 0 ?
                <>
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
                    <Pagination pages={noOfPages} currentPage={currentPage} />
                </>
            :
                <Message 
                    loading={loading}
                    error={error}
                    data={filteredCharacters}
                />
            }
        </TableContainer>
    );
};

export default Table;