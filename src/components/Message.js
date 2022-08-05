import { useDispatch } from 'react-redux';
import { updateStrict } from '../redux/reducers/search';

import { AiOutlineWarning } from 'react-icons/ai';
import loader from '../assets/beaker.gif';

import { Error, Warning } from '../styles/Message';
import { LoadingImg } from '../styles/Loading';

const Message = ({ 
    loading,
    error,
    dataLength,
    strict,
    search
}) => {
    const dispatch = useDispatch();

    const scrollToPagination = () => {
        const top = document.getElementById('pagination-container').getBoundingClientRect().top;
        window.scroll({
            top: top,
            behavior: 'smooth'
        }); 
    };

    if (error?.message) return <Error><AiOutlineWarning /><p>{error?.message}. Try Again.</p></Error>;
        else if (loading) return <LoadingImg src={loader} alt='Loader... bubbling beaker' />;
    
    if (!dataLength && !loading && !error) {
        return (
            <Warning onClick={scrollToPagination}>
                <AiOutlineWarning />
                <p>No data found on page.<br/><span>(Try different page?)</span></p>
                {search && strict ? 
                    <p className='disable-strict-text' onClick={() => dispatch(updateStrict(false))}>
                        Or disable strict search mode
                    </p>
                :
                    null
                }
            </Warning>
        );
    }
};

export default Message;