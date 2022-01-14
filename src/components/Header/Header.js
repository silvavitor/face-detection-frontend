import './Header.css';

import Button from '../Button/Button';
import Logo from '../Logo/Logo';

const Header = ({ onRouteChange, isSignedIn }) => {
  return (
    <header className='header'>
      <Logo />
      {
        isSignedIn
          ? <Button onButtonSubmit={() => onRouteChange('signout')} content="SIGN OUT" />
          : <div className='button-wrapper'>
            <Button customClass='space-around-10' onButtonSubmit={() => onRouteChange('signin')} content="SIGN IN" />
            <Button customClass='space-around-10' onButtonSubmit={() => onRouteChange('register')} content="REGISTER" />
          </div>
      }


    </header>
  );
};

export default Header;
