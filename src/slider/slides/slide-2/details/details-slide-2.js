import { Fragment } from "react/cjs/react.production.min";
import pinkSperm3 from '../../../../images/pink_sperm_3.png';
import pinkSperm4 from '../../../../images/pink_sperm_4.png';
import './details.css';

export const DetailsSlide2 = () => {
    return (
        <Fragment>
            <img className="pink-sperm-3" src={pinkSperm3} />
            <img className="pink-sperm-4" src={pinkSperm4} />
        </Fragment>
    )
}