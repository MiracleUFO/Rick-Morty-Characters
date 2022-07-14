import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCharacters, updateCharacters } from '../redux/reducers/characters';

import { useQuery } from '@apollo/client';
import GET_CHARACTERS from '../queries/getCharacters';

import { getUniqueValues } from '../helpers/getUniqueValues';

import DateGroup from './DateGroup';

import '../styles/Table.css';

const Table = () => {
    const [groupedData, setGroupedData] = useState([]);

    const filteredCharacters  = useSelector(state => state.characters.results);
    const { allCharacters }  = useSelector(state => state.characters);
    const { searchResults, searchTerms } = useSelector(state => state.search);

    const dispatch = useDispatch();

    const { data } = useQuery(GET_CHARACTERS);
    const results  = data?.characters.results;

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

    useEffect(() => {
        setGroupedData((groupDataByDate(filteredCharacters)));
    }, [filteredCharacters, groupDataByDate]);

    useEffect(() => {
        if (searchTerms.length > 0 && searchResults.length > 0) {
            const uniqueResults = getUniqueValues(searchResults);
            dispatch(updateCharacters(uniqueResults));
        } else {
            dispatch(updateCharacters([]));
        }
        if (searchTerms.length === 0) {
            dispatch(updateCharacters(allCharacters));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, searchResults, searchTerms]);

    return (
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Status</th>
                    <th>Location</th>
                </tr>
            </thead>
            {groupedData?.map((group, index) => <DateGroup key={index} date={group.date} characters={group.characters} />)}
        </table>
    );
};

export default Table;