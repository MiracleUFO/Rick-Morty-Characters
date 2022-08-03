import styled from 'styled-components';

const Message = styled.div`
    width: 85vw;
    margin: 10vh auto 25vh;
    cursor: pointer;
`;

const Loading = styled(Message)`
    color: var(--chrome-blue);
`;

const Error = styled(Message)`
    color: #b73239;
`;

const Warning = styled(Message)`
    color: #eed202;

    & p {
        margin: 5px;
    }

    & .disable-strict-text {
        cursor: pointer;
        width: max-content;
        margin: 1em auto;
        color: var(--light-grey);
        font-size: 0.8em;
        padding-bottom: 2.5px;
        border-bottom: 1px solid var(--light-grey);

        @media (min-width: 800px) {
            border-bottom: none;
        }

        &:hover {
            color: var(--darker-grey);
            border-bottom: 1px solid var(--darker-grey);
        }
    }
`;

export {
    Loading,
    Error,
    Warning
};