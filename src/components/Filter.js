import { useDispatch, useSelector } from 'react-redux';
import { updateFilters, updateCurrentFilterTag } from '../redux/reducers/filters';

import { initialCaps } from '../helpers/initialCaps';

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
        { filters } = useSelector(state => state.filter)
    ;

    const handleChange = (e) => {
        const newFilters = JSON.parse(JSON.stringify(filters));
        newFilters[tag][e.target.value] = e.target.checked;
        dispatch(updateFilters(newFilters));
        dispatch(updateCurrentFilterTag([tag, e.target.value]));
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