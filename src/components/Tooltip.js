import { TooltipText, StyledTippy } from '../styles/Tooltip';
import 'tippy.js/dist/tippy.css';

const Tooltip = ({ visible, content, ...props }) => (
    <StyledTippy
        visible={visible}
        placement='bottom-end'
        content={
            <TooltipText>
                {content}
            </TooltipText>
        }
    >
        {props.children}
    </StyledTippy>
);

export default Tooltip;