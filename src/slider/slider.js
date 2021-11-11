import { useState } from 'react';
import React, { useEffect } from 'react';
import './slider.scss';
import { Slide1 } from './slides/slide-1/slide1';
import { Slide2 } from './slides/slide-2/slide2';
import { Slide3 } from './slides/slide-3/slide3';

export const Slider = ({ homePressed, resetHomePressed }) => {

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const width = -screenWidth;
    const [position, setPosition] = useState(0);

    const [className, setClassName] = useState('slides');

    const [popupOn, setPopupOn] = useState(false);

    const [animationOn, setAnimationOn] = useState(false);

    const onMouseStart = (e) => {

        e.preventDefault();

        setClassName('slides slides--transitioning');

        const ul = document.querySelector('ul');
        const mouseStart = e.clientX;

        ul.addEventListener('mousemove', onMouseMove);
        ul.addEventListener('mouseup', onMouseUp);

        function onMouseMove(e) {

            let clientX = e.clientX;

            if (clientX > mouseStart) {
                setPosition(Math.min(((position * width) + clientX - mouseStart), 0) / width);
            } else {
                setPosition(Math.max(((position * width) - (mouseStart - clientX)), width * 2) / width);
            }
        }

        function onMouseUp(e) {

            let clientX = e.clientX;

            ul.removeEventListener('mousemove', onMouseMove);
            ul.removeEventListener('mouseup', onMouseUp);

            setClassName('slides');

            if (clientX > mouseStart) {
                setPosition(Math.round(Math.min(((position * width) + clientX - mouseStart), 0) / width));
            } else {
                setPosition(Math.round(Math.max(((position * width) - (mouseStart - clientX)), width * 2) / width));
            }
        }
    };

    const onTouchStart = (e) => {

        setClassName('slides slides--transitioning');

        const ul = document.querySelector('ul');
        const touchStart = e.touches[0].clientX;

        ul.addEventListener('touchmove', onTouchMove);
        ul.addEventListener('touchend', onTouchUp);

        function onTouchMove(e) {

            let clientX = e.touches[0].clientX;

            if (clientX > touchStart) {
                setPosition(Math.min(((position * width) + clientX - touchStart), 0) / width);
            } else {
                setPosition(Math.max(((position * width) - (touchStart - clientX)), width * 2) / width);
            }
        }

        function onTouchUp(e) {

            let clientX = e.changedTouches[0].clientX;

            ul.removeEventListener('touchmove', onTouchMove);
            ul.removeEventListener('touchend', onTouchUp);

            setClassName('slides');

            if (clientX > touchStart) {
                setPosition(Math.round(Math.min(((position * width) + clientX - touchStart), 0) / width));
            } else {
                setPosition(Math.round(Math.max(((position * width) - (touchStart - clientX)), width * 2) / width));
            }
        }
    };

    const onTouchMove = !popupOn ? onTouchStart : () => { };
    const onMouseMove = !popupOn ? onMouseStart : () => { };

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
                style={{ transform: `translateX(${position * width}px)`, height: screenHeight + 'px' }}
                onTouchMove={onTouchMove}
                onMouseDown={onMouseMove} >
                <li 
                    className='slides__item slide-1'
                    style={{width: screenWidth + 'px', backgroundSize: `${screenWidth}px ${screenHeight}px`}} >
                    <Slide1 onClick={() => setPosition(1)} />
                </li>
                <li 
                    className='slides__item slide-2'
                    style={{width: screenWidth + 'px', backgroundSize: `${screenWidth}px ${screenHeight}px`}} >
                    <Slide2
                        animationOn={animationOn}
                        resetAnimation={() => setAnimationOn(false)} />
                </li>
                <li 
                    className='slides__item slide-3'
                    style={{width: screenWidth + 'px', backgroundSize: `${screenWidth}px ${screenHeight}px`}} >
                    <Slide3
                        setPopupTrue={() => setPopupOn(true)}
                        setPopupFalse={() => setPopupOn(false)} />
                </li>
            </ul>
        </div>
    );
};