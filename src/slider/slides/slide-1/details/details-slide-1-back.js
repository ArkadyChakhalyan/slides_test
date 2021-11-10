import blueSperm1 from '../../../../images/blue_sperm_1.png';
import blueSperm2 from '../../../../images/blue_sperm_2.png';
import blueSperm3 from '../../../../images/blue_sperm_3.png';
import blueSperm4 from '../../../../images/blue_sperm_4.png';
import blueSperm5 from '../../../../images/blue_sperm_5.png';
import blueSperm6 from '../../../../images/blue_sperm_6.png';
import blueSperm7 from '../../../../images/blue_sperm_7.png';
import pinkSperm2 from '../../../../images/pink_sperm_2.png';
import './details.css';

export const DetailsSlide1Back = () => {
    return (
        <div className='details details__back'>
            <img className="pink-sperm-2" src={pinkSperm2} />
            <img className="blue-sperm-1" src={blueSperm1} />
            <img className="blue-sperm-2" src={blueSperm2} />
            <img className="blue-sperm-3" src={blueSperm3} />
            <img className="blue-sperm-4" src={blueSperm4} />
            <img className="blue-sperm-5" src={blueSperm5} />
            <img className="blue-sperm-6" src={blueSperm6} />
            <img className="blue-sperm-7" src={blueSperm7} />
        </div>
    );
};