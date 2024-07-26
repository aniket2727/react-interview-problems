// code is written by Aniket Kadam
// remove element from array

import React, { useEffect } from 'react';

const RemoveElementFromArray = () => {

    const handle = () => {
        const array = [1, 2, 3, 4, 5, 2, 6];
        const valueToRemove = 2;

        // Remove the first occurrence of valueToRemove
        const index = array.indexOf(valueToRemove);
        if (index > -1) {
            array.splice(index, 1);
        }

        console.log('Array after removing first occurrence of', valueToRemove, ':', array);
    };

    useEffect(() => {
        handle();
    }, []);

    return (
        <div>
            <h1>Remove Element from Array</h1>
        </div>
    );
};

export default RemoveElementFromArray;
