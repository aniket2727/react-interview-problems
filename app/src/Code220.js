


import React, { useState } from 'react';

const Code220 = () => {
    const [data, setData] = useState('');

    const handleChange = (event) => {
        const value = event.target.getAttribute('data-name'); // Get the data-name attribute
        const id=event.target.id;
        console.log(id)
        setData(value); // Update the state with the attribute value
    };

    return (
        <div>
            <input data-name="name" id="name" onChange={handleChange} />
            <p>Data: {data}</p> {/* Display the updated state */}
        </div>
    );
};

export default Code220;
