import styled, { css, keyframes } from 'styled-components';

const rotate = keyframes`
    0%, 100% {
        transform: rotateY(-180deg), scale(1.1);
        fill: rgba(135, 134, 129, 0.75);
    }
    50% {
        transform: revert;
        
        fill:  #1da462;
    }
`;

const InputContainer = styled.div`
    width: 80vw;
    margin: 50px auto 60px;
    position: relative;
    display: flex;
    align-items: center;
    & svg {
        position: absolute;
        width: 25px;
        height: 20px;
        left: calc(80vw - 40px);
        transition: fill 0.5s ease, transform 0.45s ease;
        fill: ${props => props.strictSearch ? '#1da462' : 'rgba(135, 134, 129, 0.75)'};
        transform: ${props => props.strictSearch || props.noOfTimesFocus ? 'rotateY(-180deg)' : 'none'};
        filter: ${props => props.strictSearch ? 'drop-shadow(2px 4.5px 2px rgba(29, 164, 98, 0.2))' : 'drop-shadow(2px 4.5px 2px rgba(0, 0, 0, 0.2))'};
        animation: ${props => props.tooltipVisible && !props.strictSearch ? css`${rotate} 2.4s ease infinite` : 'none'};
        
        @media (min-width: 800px) {
            &:hover {
                transform: scale(1.1);
            }
        }
    }
`;

const Input = styled.input`
    width: 80vw;
    padding: 16px;
    border-radius: 10px;
    font-size: 1em;
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

const TabContainer = styled.div`
    display: flex;
    width: 80vw;
    margin: 10px auto 30px;
    position: relative;
    bottom: 30px;
    flex-wrap: wrap;
    justify-content: space-evenly;
    transition: var(--default-transition);

    @media (min-width: 800px) {
        width: 78vw;
        justify-content: flex-start;
    }
`;

const Tab = styled.div`
    position: relative;
    background-color: rgba(0, 176, 255, 95%);
    min-width: max-content;
    padding: 0 5px;
    width: 5vw;
    font-size: 0.9em;
    color: aliceblue;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-right: 1.5vw;
    margin-bottom: 5px;
    height: 2em;
    border-radius: 2em;
    
    & .term {
        max-width: 30vw;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    & * {
        margin-left: 10px;
    }

    & .count {
        min-width: max-content;
        width: 1.2em;
        height: 1.2em;
        display: flex;
        padding: 2px;
        align-items: center;
        justify-content: center;
        background: rgb(225, 245, 254);
        border-radius: 50%;
        color: rgb(0, 176, 255);
        font-size: 0.9em;
    }

    
        &:hover .x-icon {
            cursor: pointer;
            transform: scale(1.1);
            font-weigth: bold;
        }
`;

export { InputContainer, Input, TabContainer, Tab };