import Rick from '../assets/images/rick.png';
import { HeaderContainer, HeaderImg } from '../styles/Header';

const Header = () => (
    <HeaderContainer>
        <HeaderImg src={Rick} alt='Rick grimacing' />
        <p>Rick &amp; Morty.</p>
    </HeaderContainer>
)

export default Header;