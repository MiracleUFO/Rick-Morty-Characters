import { configureStore } from '@reduxjs/toolkit';

import charactersReducer from './reducers/characters';
import searchReducer from './reducers/search';
import filterReducer from './reducers/filters';

const store = configureStore({
    reducer: {
        characters: charactersReducer,
        search: searchReducer,
        filter: filterReducer,
    }
});
export default store;