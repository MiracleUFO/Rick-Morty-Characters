import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    updateCurrentPage,
    updateDisplayedPageNumbers,
    setCurrentDisplayedBatchNumber
} from '../redux/reducers/pages';

import {
    PaginationContainer,
    PageNumbersContainer,
    PageButton,
    ArrowButton
} from '../styles/Pagination';

const Pagination = () => {
    const 
        dispatch = useDispatch(),
        {
            pages,
            currentPage,
            displayedPageNumbers,
            currentDisplayedBatchNumber
        } = useSelector(state => state.pages),
        [allPages, setAllPages] = useState([])
    ;

    // Creates array of pages [1, 2, 3, ...pages]
    useEffect(() => setAllPages([...Array(pages)].map((x, i) => i)), [pages]);

    // Shows needed batch of 5 page numbers when arrowbuttons are clicked
    useEffect(() => {
        const start = currentDisplayedBatchNumber === 1 ? 0 : 5 * (currentDisplayedBatchNumber - 1);
        dispatch(updateDisplayedPageNumbers(allPages.slice(start, start + 5)));
    }, [allPages, currentDisplayedBatchNumber, dispatch]);

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
                            disabled={displayedPageNumbers.includes(1)}
                            onClick={() => dispatch(setCurrentDisplayedBatchNumber(currentDisplayedBatchNumber - 1))}
                        >
                            &larr;
                        </ArrowButton>

                        <PageNumbersContainer>
                            {displayedPageNumbers.map(x =>
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
                            disabled={displayedPageNumbers.includes(pages - 1)}
                            onClick={() => dispatch(setCurrentDisplayedBatchNumber(currentDisplayedBatchNumber + 1))}
                        >
                            &rarr;
                        </ArrowButton>
                    </PaginationContainer>
                : null}
            </>
    );
};

export default Pagination;