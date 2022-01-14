import './Logo.css';
import LogoImg from '../../assets/logo.png';

const Logo = () => {
  return (
    <img className='logo' src={LogoImg} alt='logo'></img>
  );
};

export default Logo;