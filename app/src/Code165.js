import React, { useEffect, useRef } from 'react';

const Code165 = () => {
    const data = [1, 2, 33, 2, 3, 4, 3, 2];
    const smallestRef = useRef(Infinity); // Initialize ref with a very large number

    useEffect(() => {
        for (let i = 0; i < data.length; i++) {
            if (data[i] < smallestRef.current) {
                smallestRef.current = data[i]; // Update the ref value
            }
        }

        console.log("The smallest element is:", smallestRef.current);
    }, []); // Empty dependency array to run only once on component mount

    return (
        <div>
            <h1>The smallest element: {smallestRef.current}</h1>
        </div>
    );
};

export default Code165;
