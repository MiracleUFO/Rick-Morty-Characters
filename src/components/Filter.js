import initialCaps from '../helpers/initialCaps';
import { FiFilter } from 'react-icons/fi';

import '../styles/Filter.css';

const Filter = ({ tag, filters}) => {
    return (
        <div className='filters-container'>
            <div className='tag-card'>
                <FiFilter />
                {initialCaps(tag)}
                {}
            </div>
            {/*<div className='checkboxes-card'>
                {Object.entries(filters).map(([key, value], index) =>
                    <div key={index}>
                        <label htmlFor={`checkbox-${index}`}>
                            {initialCaps(key)}
                        </label>
                        <input
                            id={`checkbox-${index}`}
                            type='checkbox'
                            value={key}
                            checked={value}
                        />
                    </div>
                )}
                </div>*/}
        </div>
    );
};

export default Filter;