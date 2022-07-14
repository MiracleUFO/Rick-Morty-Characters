import { Provider } from 'react-redux';
import store from '../redux/store';

import Header from '../components/Header';
import FiltersTab from '../components/FilterTab';
import Table from '../components/Table';
import SearchBar from '../components/SearchBar';

const Home = () => (
    <Provider store={store}>
        <Header />
        <SearchBar />
        <FiltersTab />
        <Table />
    </Provider>
);

export default Home;