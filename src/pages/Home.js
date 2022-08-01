import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useQuery } from '@apollo/client';
import GET_CHARACTERS from '../queries/getCharacters';

import { setPages } from '../redux/reducers/pages';
import { updateCharactersLength } from '../redux/reducers/characters';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import FiltersTab from '../components/FilterTab';
import Table from '../components/Table';
import Message from '../components/Message';
import Pagination from './Pagination';

const Home = () => {
    const
        dispatch = useDispatch(),
        { currentPage } = useSelector(state => state.pages),
        { charactersLength } = useSelector(state => state.characters),

        { data, loading, error } = useQuery(GET_CHARACTERS, {
            variables: {
                page: currentPage
            }
        })
    ;

    useEffect(() => {
        if (data) {
            dispatch(updateCharactersLength(data?.characters.results.length));
            dispatch(setPages(data?.characters?.info?.pages));
        }
    }, [data, dispatch]);

    return (
        <>
            <Header />
            {!(loading || error?.message) ?
                <>
                    <SearchBar />
                    <FiltersTab />
                    {charactersLength ? 
                        <Table data={data?.characters.results} />
                    :   <Message dataLength={charactersLength} />
                    }
                    <Pagination />
                </>
            :   <Message loading={loading} error={error} />
            }
        </>
    );  
};

export default Home;