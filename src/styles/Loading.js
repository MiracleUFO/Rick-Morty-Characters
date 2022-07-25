import styled from 'styled-components';

const LoadingImg = styled.img`
    width: 22%;
    margin-top: 9vh;
    filter: 
        drop-shadow(2px 7px 2px rgba(50, 50, 50, 0.45))
        drop-shadow(2px -3px 3.5px rgba(50, 50, 50, 0.2))
    ;
    animation: fadeIn 0.5s ease;
    @keyframes fadeIn {
        from {opacity: 0.1, margin-top: 9vh}
        to {opacity: 1, margin-top: 10vh}
    }
`;

export { LoadingImg }