import { Provider } from 'react-redux';
import store from '../redux/store';

import Header from '../components/Header';
import FilterTab from '../components/FilterTab';
import Table from '../components/Table';

const Home = () => (
    <Provider store={store}>
        <Header />
        <FilterTab />
        <Table />
    </Provider>
);

export default Home;