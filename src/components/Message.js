import { AiOutlineWarning, AiOutlineLoading3Quarters } from 'react-icons/ai';

import '../styles/Message.css';

const Message = ({ loading, error, data }) => (
    <>
        {loading ?
            <div className='loading'><AiOutlineLoading3Quarters /><p>Loading...</p></div>
        :
            null
        }
        {error?.message ?
            <div className='error'><AiOutlineWarning /><p>{error?.message}. Try Again.</p></div>
        :
            null
        }
        {data?.length === 0 && !error?.message && !loading ?
            <div className='warning'><AiOutlineWarning /><p>No data found.</p></div>
        :
            null
        }
    </>
);

export default Message;