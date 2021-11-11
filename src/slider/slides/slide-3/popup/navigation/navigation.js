import './navigation.css';
import prev from '../../../../../images/btn_nav_prev.png';
import next from '../../../../../images/btn_nav_next.png';
import pageEmpty from '../../../../../images/nav_2_empty.png';
import page1 from '../../../../../images/nav_1.png';
import page2 from '../../../../../images/nav_2.png';

export const Navigation = ({ page, onNext, onPrev }) => {

    const page1On = page === 0 ?
        <img className="navigation__page-1" src={page1} />
        :
        <img 
            className="navigation__page-2--empty"
            src={pageEmpty}
            onClick={onPrev} />

    const page2On = page === 1 ?
        <img className="navigation__page-2" src={page2} />
        :
        <img 
            className="navigation__page-2--empty"
            src={pageEmpty}
            onClick={onNext} />

    return (
        <div className="navigation__container">
            <img
                className="navigation__btn-prev" src={prev}
                onClick={onPrev} />
            {page1On}
            {page2On}
            <img
                className="navigation__btn-next" src={next}
                onClick={onNext} />
        </div>
    );
};