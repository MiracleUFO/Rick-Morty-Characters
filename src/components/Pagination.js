import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentPage } from '../redux/reducers/pages';

import {
    PaginationContainer,
    PageNumbersContainer,
    PageButton,
    ArrowButton
} from '../styles/Pagination';

const Pagination = () => {
    const 
        dispatch = useDispatch(),
        { pages, currentPage } = useSelector(state => state.pages),
        [allPages, setAllPages] = useState([]),
        [currentDisplayedPages, setCurrentDisplayedPages] = useState([]),
        [currentDisplayedBatch, setCurrentDisplayedBatch] = useState(1)
    ;

    // Creates array of pages [1, 2, 3, ...pages]
    useEffect(() => setAllPages([...Array(pages)].map((x, i) => i)), [pages]);

    // Shows needed batch of 5 page numbers when arrowbuttons are clicked
    useEffect(() => {
        const start = currentDisplayedBatch === 1 ? 0 : 5 * (currentDisplayedBatch - 1);
        setCurrentDisplayedPages(allPages.slice(start, start + 5));
    }, [allPages, currentDisplayedBatch]);

    // Scrolls to top when new page is loaded
    useEffect(() => {
        const top = document.getElementById('search').getBoundingClientRect().top;
        window.scroll({
            top: top,
            behavior: 'smooth'
        }); 
    }, [currentPage]);

    return (
            <>
                {pages ? 
                    <PaginationContainer id='pagination-container'>
                        <ArrowButton 
                            disabled={currentDisplayedBatch === 1}
                            onClick={() => setCurrentDisplayedBatch(currentDisplayedBatch - 1)}
                        >
                            &larr;
                        </ArrowButton>

                        <PageNumbersContainer>
                            {currentDisplayedPages.map(x =>
                                <PageButton 
                                    key={x} 
                                    currentPage={currentPage - 1 === x} 
                                    onClick={() => dispatch(updateCurrentPage(x + 1))}
                                >
                                    {x + 1}
                                </PageButton>
                            )}
                        </PageNumbersContainer>

                        <ArrowButton 
                            disabled={currentDisplayedBatch === Math.ceil(pages / 5)}
                            onClick={() => setCurrentDisplayedBatch(currentDisplayedBatch + 1)}
                        >
                            &rarr;
                        </ArrowButton>
                    </PaginationContainer>
                : null}
            </>
    );
};

export default Pagination;