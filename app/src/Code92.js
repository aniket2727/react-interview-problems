

// code is written by aniket kadam
// event bubbling

// If you uncomment event.stopPropagation() in handleInnerClick or handleMiddleClick, the event will stop bubbling, 
// and only the handler for the element where the click occurred will be triggered.


// Code is written by Aniket Kadam
// Event bubbling example in React

import React from 'react';

const OuterComponent = () => {
    const handleOuterClick = (event) => {
        console.log('Outer component clicked');
    };

    const handleMiddleClick = (event) => {
        console.log('Middle component clicked');
        // Uncomment the next line to stop the event from bubbling up
        // event.stopPropagation();
    };

    const handleInnerClick = (event) => {
        console.log('Inner component clicked');
        // Uncomment the next line to stop the event from bubbling up
        // event.stopPropagation();
    };

    return (
        <div onClick={handleOuterClick} style={{ padding: '20px', backgroundColor: 'lightblue' }}>
            Outer Component
            <div onClick={handleMiddleClick} style={{ padding: '20px', backgroundColor: 'lightgreen' }}>
                Middle Component
                <div onClick={handleInnerClick} style={{ padding: '20px', backgroundColor: 'lightcoral' }}>
                    Inner Component
                </div>
            </div>
        </div>
    );
};

export default OuterComponent;
