import initialCaps from '../helpers/initialCaps';
import { FiFilter } from 'react-icons/fi';

import '../styles/Filter.css';

const Filter = ({ tag, filters}) => {
    let count = 0;
    Object.entries(filters).forEach(([key, value]) => {
        if (value) {
            count = count ? count + 1 : 1;
        }
    });

    return (
        <div className='filters-container'>
            <div className='tag-card'>
                <FiFilter />
                {initialCaps(tag)}
                {count ? 
                    <div className='count'>
                        {count}
                    </div>
                :
                    null
                }
            </div>
            {<div className='checkboxes-card'>
                {Object.entries(filters).map(([key, value], index) =>
                    <div key={index} className='checkbox-container'>
                        <input
                            className='checkbox'
                            id={`checkbox-${index}`}
                            type='checkbox'
                            value={key}
                            checked={value}
                        />
                        <label htmlFor={`checkbox-${index}`}>
                            {initialCaps(key)}
                        </label>
                    </div>
                )}
                </div>}
        </div>
    );
};

export default Filter;