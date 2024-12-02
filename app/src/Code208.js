import React, { useState, useEffect } from 'react';

const Code208 = () => {
    const [data, setData] = useState(['aniket', 'kadam']);

    useEffect(() => {
        const handleO = () => {
            const response = data.map(item => {
                if (item.length > 0) {
                    return item[0].toUpperCase() + item.slice(1);
                }
                return item; // Handle empty strings or invalid cases
            });
            setData(response);
        };

        handleO();
    }, []);

    console.log("Transformed Data:", data);

    return (
        <div>
            <h1>Lowercase to Uppercase</h1>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Code208;
