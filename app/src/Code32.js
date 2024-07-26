// code is written by Aniket Kadam
// flatten array

import React, { useEffect } from 'react';

const FlattenArray = () => {
    useEffect(() => {
        const nestedArray = [1, [2, [3, [4, 5]]], 6];
        const flatArray = nestedArray.flat(Infinity); // Flatten the array to any depth
        console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]
    }, []);

    return (
        <div>
            <h1>Flatten Array</h1>
        </div>
    );
};

export default FlattenArray;
