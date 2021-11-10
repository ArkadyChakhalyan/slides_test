import btn from '../../../images/btn_next.png';
import './slide1.css';
import { Fragment } from 'react';
import { DetailsSlide1Back } from './details/details-slide-1-back';
import { DetailsSlide1Front } from './details/details-slide-1-front';

export const Slide1 = ({ onClick }) => {
    return (
        <Fragment>
            <DetailsSlide1Back />
            <div className='container__slide'>
                <h3 className="title title--small slide-1__title--small">
                    привет,
                </h3>
                <h1 className="title title--large slide-1__title--large">
                    это <b>не</b>
                    <br />коммерческое
                    <br /> задание
                </h1>
                <img
                    className='btn btn-next slide-1__btn-next'
                    src={btn}
                    onClick={onClick} />
            </div>
            <DetailsSlide1Front />
        </Fragment>
    );
};



