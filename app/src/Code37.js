// code is written by Aniket Kadam
// find missing number in array

import React, { useEffect } from 'react';

const MissingNumber = () => {

    const handle = () => {
        const array = [1, 2, 4, 5, 6]; // Example array with a missing number
        const n = array.length + 1; // Since one number is missing

        // Calculate the expected sum of the first n natural numbers
        const expectedSum = (n * (n + 1)) / 2;

        // Calculate the actual sum of the array elements
        const actualSum = array.reduce((acc, num) => acc + num, 0);

        // The missing number is the difference between the expected sum and the actual sum
        const missingNumber = expectedSum - actualSum;

        console.log('The missing number is:', missingNumber);
    };

    useEffect(() => {
        handle();
    }, []);

    return (
        <div>
            <h1>Find the Missing Number</h1>
        </div>
    );
};

export default MissingNumber;
