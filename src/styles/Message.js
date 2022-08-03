import styled from 'styled-components';

const Message = styled.div`
    width: 85vw;
    margin: 10vh auto 25vh;
`;

const Loading = styled(Message)`
    color: var(--chrome-blue);
`;

const Error = styled(Message)`
    color: #b73239;
`;

const Warning = styled(Message)`
    color: #eed202;
`;

export {
    Loading,
    Error,
    Warning
};