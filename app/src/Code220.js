


import React, { useState } from 'react';

const Code220 = () => {
    const [data, setData] = useState('');

    const handleChange = (event) => {
        const value = event.target.getAttribute('data-name'); // Get the data-name attribute
        setData(value); // Update the state with the attribute value
    };

    return (
        <div>
            <input data-name="name" onChange={handleChange} />
            <p>Data: {data}</p> {/* Display the updated state */}
        </div>
    );
};

export default Code220;
