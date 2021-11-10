import './header.css';
import logo from'../images/icon_home.png';
import name from'../images/header.png';

export const Header = ({ onClick }) => {

    return (
        <div className='header'>
            <img 
                className='header__home'
                src={logo}
                onClick={onClick} />
            <img 
                className='header__name'
                src={name} />
        </div>
    );
};