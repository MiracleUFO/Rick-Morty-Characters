import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateFilters, updateFilterResults } from '../redux/reducers/filters';

import { isAllEmpty } from '../helpers/isAllEmpty';
import { initialCaps } from '../helpers/initialCaps';
import { isInTimeFrame } from '../helpers/isInTimeFrame';
import { combineFilters } from '../helpers/getUniqueValues';

import { FiFilter } from 'react-icons/fi';

import {
    FiltersContainer,
    TagCard,
    Count,
    CheckboxesCard,
    CheckboxContainer,
    Checkbox
} from '../styles/Filter';

const Filter = ({ tag, values }) => {
    let count = 0;
    Object.values(values).forEach((value) => {
        if (value) count = count ? count + 1 : 1;
    });

    const 
        dispatch = useDispatch(),
        { filters } = useSelector(state => state.filter),
        { allCharacters }  = useSelector(state => state.characters);

    const filter = useCallback((filters) => {
        const sameFilterResults = [], differentFilterResults = [];

        allCharacters.forEach(character => {
            const
                { id, name, gender, status, location, created, image } = character,
                newCharacter = { id, name, gender, status, location, created, image };

            Object.entries(filters).forEach(filter => {
                const newTag = filter[0];
                for (const [k, v] of Object.entries(filter[1])) {
                    if (v) {
                        if (newTag !== tag) {
                            if ((newCharacter[newTag].toLowerCase() === k || isInTimeFrame(k, newCharacter.created))) {
                                differentFilterResults.push(newCharacter);
                            }  
                        } if (newCharacter[tag].toLowerCase() === k || isInTimeFrame(k, newCharacter.created)) {
                            sameFilterResults.push(newCharacter);
                        }
                    }
                }
            });
        });

        dispatch(updateFilterResults(combineFilters(sameFilterResults, differentFilterResults)));
    }, [allCharacters, dispatch, tag]);

    useEffect(() => {
        if (!isAllEmpty(filters[tag])) {
            filter(filters);
        }
    }, [filters, filter, tag]);

    const handleChange = (e) => {
        const newFilters = JSON.parse(JSON.stringify(filters));
        newFilters[tag][e.target.value] = e.target.checked;
        dispatch(updateFilters(newFilters));
    };

    return (
        <FiltersContainer>
            <TagCard>
                <FiFilter />
                {initialCaps(tag)}
                {count ? <Count>{count}</Count> : null}
            </TagCard>

            <CheckboxesCard>
                {Object.keys(values).map((key, index) =>
                    <CheckboxContainer key={index}>
                        <Checkbox
                            id={`checkbox-${key}-${index}`}
                            type='checkbox'
                            value={key}
                            checked={filters[tag][key]}
                            onChange={handleChange}
                        />
                        
                        <label htmlFor={`checkbox-${key}-${index}`}>
                            {initialCaps(key)}
                        </label>
                    </CheckboxContainer>
                )}
            </CheckboxesCard>
        </FiltersContainer>
    );
};

export default Filter;