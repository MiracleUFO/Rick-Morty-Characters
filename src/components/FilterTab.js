import { useSelector } from 'react-redux';
import Filter from './Filter';

import { Tab } from '../styles/Filter';

const FiltersTab = () => {
    const { filters } = useSelector(state => state.filter);
    return (
        <Tab>
            {Object.entries(filters).map(([key, value], index) =>
                <Filter key={index} tag={key} values={value} />
            )}
        </Tab>
    )
}

export default FiltersTab;