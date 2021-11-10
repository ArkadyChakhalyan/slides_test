import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import './slider.css';
import { Slide1 } from './slides/slide-1/slide1';
import { Slide2 } from './slides/slide-2/slide2';
import { Slide3 } from './slides/slide-3/slide3';

export const Slider = ({ homePressed, resetHomePressed }) => {

    const width = 1024;
    const [position, setPosition] = useState(0);

    const [className, setClassName] = useState('slides')

    const [popupOn, setPopupOn] = useState(false);

    const onTouchStart = (e) => {

        e.preventDefault();

        setClassName('slides slides--transitioning');

        const ul = document.querySelector('ul');
        const touchStart = e.touches[0].clientX;

        ul.addEventListener('touchmove', onTouchMove);
        ul.addEventListener('touchend', onTouchUp);

        function onTouchMove(e) {

            let clientX = e.touches[0].clientX;

            if (clientX > touchStart) {
                setPosition(Math.min(position - (touchStart - clientX), 0));
            } else {
                setPosition(Math.max(position - (touchStart - clientX), - width * 2));
            }
        }

        function onTouchUp(e) {

            let clientX = e.changedTouches[0].clientX;

            ul.removeEventListener('touchmove', onTouchMove);
            ul.removeEventListener('touchend', onTouchUp);
            setClassName('slides');

            if (clientX > touchStart) {
                setPosition(Math.round(Math.min((position + clientX - touchStart), 0) / width) * width);
            } else {
                setPosition((Math.round(Math.max((position - (touchStart - clientX)), - width * 2) / width) * width));
            }
        }
    };

    const onTouchMove = !popupOn ? onTouchStart : () => { };

    useEffect(() => {
        if (homePressed) {
            resetHomePressed();
            setPosition(0);
        }
    }, [homePressed]);

    return (
        <div>
            <ul
                className={className}
                style={{ marginLeft: position + 'px' }}
                onTouchMove={onTouchMove} >
                <li className='slides__item slide-1'>
                    <Slide1 onClick={() => setPosition(-1024)} />
                </li>
                <li className='slides__item slide-2'>
                    <Slide2 />
                </li>
                <li className='slides__item slide-3'>
                    <Slide3
                        setPopupTrue={() => setPopupOn(true)}
                        setPopupFalse={() => setPopupOn(false)} />
                </li>
            </ul>
        </div>
    );
};