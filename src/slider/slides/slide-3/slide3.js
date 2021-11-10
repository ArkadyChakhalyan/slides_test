import React, { Fragment, useState } from 'react';
import { DetailsSlide3Front } from './details/details-slide-3-front';
import { DetailsSlide3Back } from './details/details-slide-3-back';
import btn from '../../../images/btn_about.png';
import './slide3.css';
import { ContentMain } from './content/content-main';
import { Popup } from './popup/popup';

export const Slide3 = ({ setPopupTrue, setPopupFalse }) => { 

    const onClose = () => {
        setPopupFalse();
        setPopupOn(false);
    };

    const onClick = () => {
        setPopupOn(true);
        setPopupTrue();
    };
    
    const [popupOn, setPopupOn] = useState(false);
    const popup = popupOn ? <Popup onClose={onClose} /> : null;
    
    let subtitle = popupOn ? 'преимущества' : 'ключевое сообщение';

    return (
        <Fragment>
            <DetailsSlide3Back />
            <div className='container__slide'>
                <h3 className="title title--small slide-3__title--small">{subtitle}</h3>
                <h1 className="title title--large slide-3__title--large">brend<b>xy</b></h1>
                <ContentMain />
                <img
                    className="btn btn-about"
                    src={btn}
                    onClick={onClick} />
            </div>
            {popup}
            <DetailsSlide3Front />
        </Fragment>
    );
};