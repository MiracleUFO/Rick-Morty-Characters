import styled from 'styled-components';

const PaginationContainer = styled.section`
    width: 90vw;
    margin: 50px auto;
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    
    @media (min-width: 800px) {
        width: 80vw;
    }
`;

const PageNumbersContainer = styled.div`
    width: 90%;
    margin: 0 auto;

    @media (min-width: 800px) {
        width: 60%;
    }
`;

const PaginationButton = styled.button`
    background-color: ${props => props.currentPage || props.disabled ? 'rgba(188, 212, 230, 0.5)' : 'aliceblue'};
    color: ${props => props.currentPage || props.disabled ? 'var(--light-grey)' : 'var(--darker-grey)'};
    border: ${props => props.currentPage || props.disabled ? '1px solid lightgrey' : '1px solid lightblue'};
    box-shadow: 2px 4px 2px 0.5px rgb(0 0 0 / 4%);

    @media (min-width: 800px) {
        &:hover {
            color: ${props => props.currentPage || props.disabled ? 'var(--light-grey)' : '#3ea4c4'};
            transform: ${props => props.currentPage || props.disabled ? 'none' : 'scale(1.15)'};
            border: ${props => props.currentPage || props.disabled ? '1px solid lightgrey' : '2px solid rgba(62, 164, 196, 0.3)'};
        }
    }
`;

const PageButton = styled(PaginationButton)`
    min-width: 12%;
    min-height: 40px;
    margin-left: 5%;
    border-radius: 5px;
    font-size: 1em;

    @media (min-width: 800px) {
        min-width: 3vw;
        min-height: 3vw;
    }
`;

const ArrowButton = styled(PaginationButton)`
    width: 10vw;
    height: 10vw;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 1.2em;
    
    @media (min-width: 800px) {
        width: 4vw;
        height: 4vw;
    }
`;

export {
    PaginationContainer,
    PageNumbersContainer,
    PageButton,
    ArrowButton
}