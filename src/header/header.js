import './header.css';
import name from'../images/header.png';

export const Header = ({ onClick }) => {

    return (
        <div className='header'>
            <div 
                className='header__home'
                onClick={onClick} />
            <img 
                className='header__name'
                src={name} />
        </div>
    );
};