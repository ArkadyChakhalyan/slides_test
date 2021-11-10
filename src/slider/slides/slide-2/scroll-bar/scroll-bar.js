import React, { useEffect, useRef, useState } from 'react';
import './scroll-bar.scss';

export const ScrollBar = ({ scroll }) => {
    const [position, setPosition] = useState(0);

    useEffect(() => {
        if (scroll < 0) setPosition(0);
        else if (scroll > 155) setPosition(scrollTo(155, 155, 430));
        else setPosition(scrollTo(scroll, 155, 430));
    }, [scroll]);

    const scrollerBg = useRef(null);
    const elem = document.getElementsByClassName('slide-2__container')[0];

    const onTouchStart = (e) => {
        console.log('1')
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
            elem.scrollTo(0, scrollTo(newPosition, 430, 155));
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
                onTouchStart={onTouchStart}
                style={{ top: position + 'px' }} 
            />
        </div>
    );
};

function scrollTo(scrolledAmount, totalOfScroller, totalOfElem) {
    return scrolledAmount / totalOfScroller * totalOfElem;
}