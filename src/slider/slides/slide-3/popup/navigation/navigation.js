import './navigation.scss';

export const Navigation = ({ page, onNext, onPrev }) => {

    const page1On = page === 0 ? 
        <div className='navigation__page' /> 
        : 
        <div 
            className='navigation__page--empty'
            onClick={onPrev} />

    const page2On = page === 1 ? 
            <div className='navigation__page' /> 
            : 
            <div 
                className='navigation__page--empty'
                onClick={onNext} />
    

    return (
        <div className="navigation navigation__container">
            <div 
                className='navigation__btn-l'
                onClick={onPrev} />
            {page1On}
            {page2On}
            <div 
                className='navigation__btn-r'
                onClick={onNext} />
        </div>
    );
};