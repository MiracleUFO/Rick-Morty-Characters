import Rick from '../assets/images/rick.png';
import '../styles/Header.css';

const Header = () => (
    <header>
        <img src={Rick} alt='Rick grimacing' />
        <p>Rick &amp; Morty.</p>
    </header>
)

export default Header;