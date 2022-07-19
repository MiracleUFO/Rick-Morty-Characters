import styled from 'styled-components';

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    height: max-content;
    font-weight: bolder;
    font-size: 1.2em;
    margin: 0 2.5vw;
    padding: 20px 0;
    border-bottom: 2px solid #f9fafe;
`;

const HeaderImg = styled.img`
    width: 10%;
    padding-right: 10px;

    @media (min-width: 800px) {
        width: 5%;
    }
`;

export { HeaderContainer, HeaderImg };