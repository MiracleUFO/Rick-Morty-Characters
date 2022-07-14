import { configureStore } from '@reduxjs/toolkit'
import charactersReducer from './reducers/characters';
import searchReducer from './reducers/search';

const store = configureStore({
    reducer: {
        characters: charactersReducer,
        search: searchReducer
    }
});
export default store;