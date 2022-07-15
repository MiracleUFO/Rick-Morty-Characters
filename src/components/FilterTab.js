import { useSelector } from 'react-redux';
import Filter from './Filter';

import '../styles/FiltersTab.css';

const FiltersTab = () => {
    const { filters } = useSelector(state => state.filter);
    return (
        <section className='filter-tab'>
            {Object.entries(filters).map(([key, value], index) =>
                <Filter key={index} tag={key} values={value} />
            )}
        </section>
    )
}

export default FiltersTab;