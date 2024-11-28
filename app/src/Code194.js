import React, { useState, useEffect } from 'react';

const Code194 = () => {
    const [data, setData] = useState([
        { name: 'aniket', age: '10' },
        { name: 'aniket', age: '10' },
        { name: 'aniket', age: '10' }
    ]);

    useEffect(() => {
        // Add an `id` to each object in the array
        const response = data.map((item, index) => {
            return { ...item, id: index };
        });

        setData(response);
    }, []); // Dependency array ensures this runs only once

    console.log('Updated Data:', data);

    return (
        <div>
            <h1>Data with IDs</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        Name: {item.name}, Age: {item.age}, ID: {item.id}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Code194;
