

//code is written by the aniket kadam

import React from 'react';

const Button = ({ onClick }) => {
    const handleClick = (id) => (event) => {
        // Handle click event with additional data (id)
        console.log(`Button clicked with id: ${id}`);
        onClick(id, event); // Pass id and event to parent handler
    };

    return (
        <button onClick={handleClick(123)}>Click Me</button>
    );
};

const Code9 = () => {
    const handleButtonClick = (id, event) => {
        console.log(`Handling click for id: ${id}`);
        // Handle button click logic
    };

    return (
        <div>
            <Button onClick={handleButtonClick} />
        </div>
    );
};

export default Code9;
