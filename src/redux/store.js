import { configureStore } from '@reduxjs/toolkit';

import charactersReducer from './reducers/characters';
import searchReducer from './reducers/search';
import filterReducer from './reducers/filters';
import pagesReducer from './reducers/pages';

const store = configureStore({
    reducer: {
        characters: charactersReducer,
        search: searchReducer,
        filter: filterReducer,
        pages: pagesReducer
    }
});
export default store;