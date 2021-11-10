import { useState, Fragment } from "react";
import pinkSperm3 from '../../../../images/pink_sperm_3.png';
import pinkSperm4 from '../../../../images/pink_sperm_4.png';
import './details.css';

export const DetailsSlide2 = ({ animationOn, resetAnimation }) => {

    const [classNameSperm3, setClassNameSperm3] = useState('pink-sperm-3');
    const [classNameSperm4, setClassNameSperm4] = useState('pink-sperm-4');

    if (animationOn) {
        setClassNameSperm3('pink-sperm-3 pink-sperm-3--animation');
        setClassNameSperm4('pink-sperm-4 pink-sperm-4--animation');
        resetAnimation();
    }
    
    return (
        <Fragment>
            <img className={classNameSperm3} src={pinkSperm3} />
            <img className={classNameSperm4} src={pinkSperm4} />
        </Fragment>
    )
}