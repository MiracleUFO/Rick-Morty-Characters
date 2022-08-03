import styled from 'styled-components';

const Input = styled.input`
    width: 80vw;
    padding: 16px;
    border-radius: 10px;
    font-size: 1em;
    margin: 50px auto 60px;
    background-color: rgb(0 0 0 / 3%);
    border: 1px solid transparent;
    box-shadow: 3.5px 4px 3px 3px rgb(0 0 0 / 5%);
    transition: var(--default-transition);

    &::placeholder {
        font-size: 1.1em;
        padding-left: 20px;
    }
    
    &:focus {
        background-color: aliceblue;
        outline: none;
        border: 1px solid rgba(173,216,230, 70%);
        box-shadow: 5px 4px 5px 1px aliceblue, 
                    -5px 4px 5px 1px aliceblue,
                    5px -4px 5px 1px aliceblue;
    }
`;

export default Input;