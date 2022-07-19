import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateFilters, updateFilterResults } from '../redux/reducers/filters';

import { isAllEmpty } from '../helpers/isAllEmpty';
import { initialCaps } from '../helpers/initialCaps';
import { isInTimeFrame } from '../helpers/isInTimeFrame';
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
    const dispatch = useDispatch();
    const { filters } = useSelector(state => state.filter);
    const { allCharacters }  = useSelector(state => state.characters);
    let count = 0;

    Object.values(values).forEach((value) => {
        if (value) {
            count = count ? count + 1 : 1;
        }
    });    

    const filter = useCallback(() => {
        const newFilteredCharacters = [];
        allCharacters.forEach(character => {
            const   
                { id, name, gender, status, location, created, image } = character, 
                newCharacter = { id, name, gender, status, location, created, image };

                for (const [k, v] of Object.entries(filters[tag])) {
                    if (v) {
                        if (newCharacter[tag].toLowerCase() === k || isInTimeFrame(k, newCharacter.created)) {
                            newFilteredCharacters.push(newCharacter);
                        }
                    }
                }
                dispatch(updateFilterResults(newFilteredCharacters));
        });
    }, [allCharacters, dispatch, filters, tag]);

    const handleChange = (e) => {
        const newFilters = JSON.parse(JSON.stringify(filters));
        newFilters[tag][e.target.value] = e.target.checked;
        dispatch(updateFilters(newFilters));
    };

    useEffect(() => {
        if (!isAllEmpty(filters[tag])) {
            filter();
        }
    }, [filters, filter, tag]);

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