import schedule from '../../../../images/icon_schedule.png';
import meal from '../../../../images/icon_meal.png';
import './content-main.css';

export const ContentMain = () => {
    return (
        <div className='slide-3__main-content'>
            <div className="container slide-3__container-1">
                <img className="icon-meal" src={meal} />
                <p className="text slide-3__text">
                    Ehicula ipsum a arcu
                    cursus vitae.Eu non
                    diam phasellus
                    vestibulum lorem sed
                    risus ultricies
                </p>
            </div>
            <div className="container slide-3__container-2">
                <img className="icon-schedule" src={schedule} />
                <p className="text slide-3__text">
                    A arcu
                    cursus vitae
                </p>
            </div>
        </div>
    );
};