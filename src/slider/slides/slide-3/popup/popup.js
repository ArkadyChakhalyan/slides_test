import { Navigation } from './navigation/navigation';
import close from '../../../../images/btn_close.png';
import './popup.scss';
import { ContentPopup1 } from '../content/content-popup-1';
import { useState } from 'react';
import { ContentPopup2 } from '../content/content-popup-2';

export const Popup = ({ onClose }) => {

    const [page, setPage] = useState(0);

    const content = page === 0 ? <ContentPopup1 /> : <ContentPopup2 />

    return (
        <div className='popup__bg'
            onClick={onClose}>
            <div className="container slide-3__container-3"
                onClick={e => e.stopPropagation()}>
                <img
                    className="btn-close"
                    src={close}
                    onClick={onClose} />
                <div className='slide-3__content'>
                    {content}
                </div>
                <span className='navigation' >
                    <Navigation
                        page = {page}
                        onNext={() => { setPage(1) }}
                        onPrev={() => { setPage(0) }} />
                </span>
            </div>
        </div>
    );
};