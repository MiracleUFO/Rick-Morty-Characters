import { AiOutlineWarning, AiOutlineLoading3Quarters } from 'react-icons/ai';

import { Loading, Error, Warning } from '../styles/Message';

const Message = ({ loading, error, data }) => (
    <>
        {loading ?
            <Loading><AiOutlineLoading3Quarters /><p>Loading...</p></Loading>
        :
            null
        }
        {error?.message ?
            <Error><AiOutlineWarning /><p>{error?.message}. Try Again.</p></Error>
        :
            null
        }
        {data?.length === 0 && !error?.message && !loading ?
            <Warning><AiOutlineWarning /><p>No data found on page. (Try different page?)</p></Warning>
        :
            null
        }
    </>
);

export default Message;