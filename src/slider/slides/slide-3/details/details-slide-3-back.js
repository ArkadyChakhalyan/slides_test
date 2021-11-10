import { Fragment } from 'react';
import bubble5 from '../../../../images/bubble_5.png';
import bubble6 from '../../../../images/bubble_6.png';
import bubble7 from '../../../../images/bubble_7.png';
import bubble8 from '../../../../images/bubble_8.png';
import './details.css';

export const DetailsSlide3Back = () => {
    return (
        <Fragment>
            <img className="bubble-5" src={bubble5} />
            <img className="bubble-6" src={bubble6} />
            <img className="bubble-7" src={bubble7} />
            <img className="bubble-8" src={bubble8} />
        </Fragment>
    )
}