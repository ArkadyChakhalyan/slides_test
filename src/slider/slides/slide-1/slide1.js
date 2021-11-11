import './slide1.scss';
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
                <button
                    className='btn slide-1__btn-next'
                    onClick={onClick}>
                    <div className='btn__icon'>
                        <div className='btn__icon-inside'>
                            <div className='next' />
                        </div>
                    </div>
                    <span className='btn__text'>
                        Что дальше?
                    </span>
                </button>
            </div>
            <DetailsSlide1Front />
        </Fragment>
    );
};



