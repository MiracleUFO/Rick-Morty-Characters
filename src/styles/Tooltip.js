import styled from 'styled-components';
import Tippy from '@tippyjs/react';

export const TooltipText = styled.div`
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    color: white;
    text-align: initial;
`;

export const StyledTippy = styled(Tippy)`
    z-index: 5000;
    position: relative;
    top: 8px;
    padding: 10px 10px 20px;
    background: var(--chrome-blue);
    width: ${window.innerWidth > 800 ? 'max-content' : '60vw'};
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
    
    .tippy-arrow {
        color: var(--chrome-blue);
        margin-left: ${window.innerWidth > 800 ? '88%' : '32vw'};
        margin-right: 2px;
    }
    & h1 {
        font-size: 1.5em;
        padding-bottom: 5px;
    }
    & p {
        font-size: 1.2em;
        line-height: 1.5em;
    }
`;