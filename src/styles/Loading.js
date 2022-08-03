import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0.1;
        margin-top: 15vh;
    }
    to {
        opacity: 1;
        margin-top: 21vh;
    }
`;

const LoadingImg = styled.img`
    width: 50%;
    margin-top: 15vh;
    animation: ${fadeIn} 0.25s ease;
    filter: 
        drop-shadow(2px 7px 2px rgba(50, 50, 50, 0.45))
        drop-shadow(2px -3px 3.5px rgba(50, 50, 50, 0.2))
    ;

    @media (min-width: 800px) {
        width: 22%;
    }
`;

export { LoadingImg }