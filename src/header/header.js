import './header.scss';

export const Header = ({ onClick }) => {

    return (
        <div className='header'>
            <div 
                className='header__home'
                onClick={onClick} />
            <div className='header__name' />
        </div>
    );
};