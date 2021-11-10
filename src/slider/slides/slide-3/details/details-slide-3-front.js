import { Fragment } from 'react';
import bubble1 from '../../../../images/bubble_1.png';
import bubble2 from '../../../../images/bubble_2.png';
import bubble3 from '../../../../images/bubble_3.png';
import bubble4 from '../../../../images/bubble_4.png';
import bottle from '../../../../images/bottle.png';
import './details.css';

export const DetailsSlide3Front = () => {
    return (
        <Fragment>
            <img className="bottle" src={bottle} />
            <img className="bubble-1" src={bubble1} />
            <img className="bubble-2" src={bubble2} />
            <img className="bubble-3" src={bubble3} />
            <img className="bubble-4" src={bubble4} />
        </Fragment>
    )
}