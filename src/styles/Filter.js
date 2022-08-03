import styled from 'styled-components';

const Checkbox = styled.input`
    box-shadow: 2px 4px 2px 0.5px rgb(0 0 0 / 4%);
    &:focus {
        box-shadow: initial;
    }
`;

const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    color: var(--light-grey);
    & label {
        padding-left: 0.2em;
        font-size: 0.9em;
        &:hover {
            color: var(--darker-grey);
        }
    }
    @media (min-width: 800px) {
        & label {
            padding-left: 10%;
        }
    }
`;

const CheckboxesCard = styled.div`
    display: none;
    position: absolute;
    width: 100%;
    min-width: max-content;
    padding: 20px;
    flex-direction: column;
    border: 2px solid #FAF9F6;
    background-color: white;
    border-radius: 10px;
    z-index: 20;
    top: 55%;
    right: -20px;
    box-shadow: 3px 5px 2px 0.5px rgba(0, 0, 0, 3%);
    transition: var(--default-transition);
`;

const Count = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    padding: 4px;
    background-color: white;
    color: var(--chrome-blue);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8em;
    cursor: pointer;
`;

const TagCard = styled.div`
    color: white;
    background-color: var(--chrome-blue);
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 25vw;
    min-width: max-content;
    padding: 10px 1vw;
    border-radius: 5px;
    border: 1px outset aliceblue;
    transition: var(--default-transition);

    @media (min-width: 800px) {
        width: 9vw;
    }    
`;

const FiltersContainer = styled.div`
    position: relative;
    &:hover ${CheckboxesCard} {
        display: flex;
    }
`;

const Tab = styled.section`
    display: flex;
    justify-content: space-between;
    width: 90vw;
    margin: 0 auto;
    border-radius: 10px;
    height: 80px;
    
    @media (min-width: 800px) {
        justify-content: space-around;
    }
`;

export {
    Tab,
    FiltersContainer,
    TagCard,
    Count,
    CheckboxesCard,
    CheckboxContainer,
    Checkbox
};