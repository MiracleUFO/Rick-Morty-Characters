import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0.1;
    }
    to {
        opacity: 1;
    }
`;

const TableContainer = styled.div`
    position: relative;
    width: 85vw;
    height: 47vh;
    margin: 0 auto;
    overflow: scroll;
    transition: var(--default-transition);

    &::-webkit-scrollbar {
        -webkit-appearance: none;
        height: 15px;

        @media (min-width: 800px) {
            -webkit-appearance: initial;
            height: 0;
        }
    }

    &::-webkit-scrollbar-thumb:horizontal {
        width: 100vw;
        border-radius: 8px;
        border: 3px solid white;
        background-color: rgba(0, 0, 0, 0.2);
    }

    &::-webkit-scrollbar-track-piece:end {
        margin-right: 7.5vw;
    }

    &::-webkit-scrollbar-track-piece:start {
        margin-left: 7.5vw;
    }

    & tbody {
        border-bottom: 3px solid aliceblue;
    }

    & tr {
        height: 80px;
    }

    & tr:nth-of-type(odd) {
        background-color: #fafafa;
    }

    & tr:nth-of-type(even) {
        border: 1px solid aliceblue;
    }

    & td {
        min-width: 20vw;
        & img {
            width: 70px;
            max-width: 60%;
            border-radius: 50%;

            @media (min-width: 800px) {
                max-width: 30%;
                width: 120px;
            }
        }
        @media (min-width: 800px) {
            width: revert;
            min-width: revert;
        }
    }

    @media (min-width: 800px) {
        height: max-content;
    }
`;

const TableContent = styled.table`
    width: 100%;
    margin: 40px auto;
    color: #5a5a5a;
    border-collapse: collapse;
    overflow: auto;
    white-space: nowrap;

    & tr {
        animation:  ${fadeIn} 0.5s;
    }  
`;

const TableHead = styled.thead`
    & tr {
        background-color: #fafafa;
        height: 60px;
    }
`;

const GroupTitle = styled.td`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px 0;
    height: 70px;
    background-color: aliceblue !important;
    border: 2px solid lightblue;
    width: 20vw;
    min-width: max-content !important;

    @media (min-width: 800px) {
        width: revert;
        min-width: revert;
    }
`;

export {
    TableContainer,
    TableContent,
    TableHead,
    GroupTitle
}