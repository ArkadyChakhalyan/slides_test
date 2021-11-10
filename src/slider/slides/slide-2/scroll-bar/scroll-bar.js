import React, { useEffect, useState } from 'react';
import scrollTop from '../../../../images/scroll_top.png';
import scrollBg from '../../../../images/scroll_bg.png';
import './scroll-bar.css';

export const ScrollBar = ({ scrolled }) => {

    const [position, setPosition] = useState(0);

    useEffect(() => {
        if (scrolled < 0) setPosition(0);
        else if (scrolled > 155) setPosition(scrollTo(155, 155, 330));
        else setPosition(scrollTo(scrolled, 155, 330));
    }, [scrolled])

    const scroller = document.getElementsByClassName('scroll__top')[0];
    const scrollerBg = document.getElementsByClassName('scroll')[0];
    const elem = document.getElementsByClassName('slide-2__container')[0];

    const onTouchStart = (e) => {
        
        e.stopPropagation();
        e.preventDefault();

        const moveY = e.touches[0].clientY - scroller.getBoundingClientRect().top;

        document.addEventListener('touchmove', onTouchMove);
        document.addEventListener('touchend', onTouchEnd);

        function onTouchMove(e) {
            
            let clientY = e.touches[0].clientY;

            let newPosition = clientY - moveY - scrollerBg.getBoundingClientRect().top - 30;
            const bottomPoint = scrollerBg.offsetHeight - scroller.offsetHeight + 102;

            if (newPosition < 0) {
                newPosition = 0;
            }

            if (newPosition > bottomPoint) {
                newPosition = bottomPoint;
            }

            setPosition(newPosition);
            elem.scrollTo(0, scrollTo(newPosition, 330, 155));
        };

        function onTouchEnd() {
            document.removeEventListener('touchend', onTouchEnd);
            document.removeEventListener('touchmove', onTouchMove);
        };
    };

    const onDragStart = () => {
        return false;
    };

    return (
        <div className="scroll">
            <img
                className="scroll__bg"
                src={scrollBg} />
            <img
                className='scroll__top'
                src={scrollTop}
                onTouchStart={onTouchStart}
                onDragStart={onDragStart}
                style={{ top: position + 'px' }} />
        </div>
    );
};

function scrollTo(scrolledAmount, totalOfScroller, totalOfElem) {
    return scrolledAmount / totalOfScroller * totalOfElem;
}