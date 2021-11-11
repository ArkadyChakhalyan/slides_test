import React, { useEffect, useRef, useState } from 'react';
import './scroll-bar.scss';

export const ScrollBar = ({ scroll, containerLength }) => {

    const [position, setPosition] = useState(0);

    const scrollerBg = useRef(null);
    const scrollerTop = useRef(null);
    const elem = document.getElementsByClassName('slide-2__container')[0];

    const maxLength = containerLength - scrollerTop?.current?.getBoundingClientRect().height / 3;

    const scrollHeight = scrollerBg?.current?.getBoundingClientRect().height;

    useEffect(() => {
        if (scroll < 0) setPosition(0);
        else setPosition(scrollTo(scroll, maxLength, scrollHeight));
    }, [scroll]);

    const onMouseStart = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const moveY = e.clientY - e.target.getBoundingClientRect().top;

        document.addEventListener('mousemove', onMouseMove, true);
        document.addEventListener('mouseup', onMouseUp);

        function onMouseMove(e) {

            e.stopPropagation();

            let clientY = e.clientY;
            
            let newPosition = clientY - moveY - scrollerBg?.current?.getBoundingClientRect().top;
            const bottomPoint = scrollerBg?.current?.offsetHeight - scrollerTop?.current?.offsetHeight;
            
            if (newPosition < 0) { 
                newPosition = 0;
            }
            
            if (newPosition > bottomPoint) {
                newPosition = bottomPoint;
            }

            setPosition(newPosition);

            elem.scrollTo(0, scrollTo(newPosition, scrollHeight, maxLength));
        };

        function onMouseUp() {
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousemove', onMouseMove, true);
        };
    };

    const onTouchStart = (e) => {
        
        e.stopPropagation();

        const moveY = e.touches[0].clientY - e.target.getBoundingClientRect().top;

        document.addEventListener('touchmove', onTouchMove, true);
        document.addEventListener('touchend', onTouchEnd);

        function onTouchMove(e) {
            e.stopPropagation();
            let clientY = e.touches[0].clientY;

            let newPosition = clientY - moveY - scrollerBg?.current?.getBoundingClientRect().top;
            const bottomPoint = scrollerBg?.current?.offsetHeight - e.target.offsetHeight;

            if (newPosition < 0) {
                newPosition = 0;
            }

            if (newPosition > bottomPoint) {
                newPosition = bottomPoint;
            }

            setPosition(newPosition);
            elem.scrollTo(0, scrollTo(newPosition, scrollHeight, maxLength));
        };

        function onTouchEnd() {
            document.removeEventListener('touchend', onTouchEnd);
            document.removeEventListener('touchmove', onTouchMove, true);
        };
    };

    return (
        <div className="scroll" ref={scrollerBg}>
            <div className="scroll__bg" />
            <div
                className="scroll__top"
                ref={scrollerTop}
                onTouchStart={onTouchStart}
                onMouseDown={onMouseStart}
                style={{ top: position + 'px' }} 
            />
        </div>
    );
};

function scrollTo(scrolledAmount, totalOfScroller, totalOfElem) {
    return scrolledAmount / totalOfScroller * totalOfElem;
}