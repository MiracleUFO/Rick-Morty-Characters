import styled from 'styled-components';

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    height: max-content;
    font-weight: bolder;
    font-size: 1.2em;
    padding: 20px 2.5vw;
    border-bottom: 2px solid #f9fafe;
    position: sticky;
    top: 0;
    z-index: 50;
    background: white;
    width: 95vw;
`;

const HeaderImg = styled.img`
    width: 10%;
    padding-right: 10px;

    @media (min-width: 800px) {
        width: 5%;
    }
`;

export { HeaderContainer, HeaderImg };