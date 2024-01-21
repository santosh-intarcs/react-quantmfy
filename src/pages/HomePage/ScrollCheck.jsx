import React, { useState } from 'react';
import './Scroll.css'; // Import your CSS file for styling

const HorizontalScroll = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = (event) => {
        setScrollPosition(event.target.scrollLeft);
    };


    const handleWheel = (event) => {
        // Check if the mouse wheel is scrolled from bottom to top
        if (event.deltaY < 0) {
            // Increase the scroll position
            setScrollPosition(scrollPosition + 10);
        } else if (event.deltaY > 0 && scrollPosition > 0) {
            // Decrease the scroll position, but make sure it doesn't go below zero
            setScrollPosition(scrollPosition - 10);
        }
    };
    return (
        <div className="horizontal-scroll-container"
            // onScroll={handleScroll}
            onWheel={handleWheel}
            style={{ transform: `translateX(${-scrollPosition}px)` }}
        >
            <div className="scroll-content">
                {/* Your content goes here */}
                <div className="item">Item 1</div>
                <div className="item">Item 2</div>
                <div className="item">Item 3</div>
                <div className="item">Item 3</div>
                <div className="item">Item 3</div>
                <div className="item">Item 3</div>
                <div className="item">Item 3</div>
                <div className="item">Item 3</div>
                <div className="item">Item 3</div>
                <div className="item">Item 3</div>
                <div className="item">Item 3</div>
                <div className="item">Item 3</div>
                <div className="item">Item 3</div>
                <div className="item">Item 3</div>
                <div className="item">Item 3</div>
                <div className="item">Item 3</div>
                <div className="item">Item 3</div>
                {/* Add more items as needed */}
            </div>
        </div>
    );
};

export default HorizontalScroll;
