import { AiOutlineWarning } from 'react-icons/ai';

import loader from '../assets/beaker.gif';

import { Error, Warning } from '../styles/Message';
import { LoadingImg } from '../styles/Loading';

const Message = ({ loading, error, dataLength}) => {
    if (error?.message) {
        return <Error><AiOutlineWarning /><p>{error?.message}. Try Again.</p></Error>;
    } else if (loading) {
        return <LoadingImg src={loader} alt='Loader... bubbling beaker' />;
    }
    
    if (!dataLength && !loading && !error) {
        return <Warning><AiOutlineWarning /><p>No data found on page.<br/>(Try different page?)</p></Warning>;
    }
};

export default Message;