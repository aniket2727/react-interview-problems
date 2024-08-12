// Code written by Aniket Kadam
// Calculate the factorial of a number

import React from 'react';

const Factorial = () => {
    function calculateFactorial(number) {
        if (number === 0) {
            return 1;
        }
        return number * calculateFactorial(number - 1);
    }

    const result = calculateFactorial(5);
    console.log("The factorial of the number is", result);

    return (
        <div>
            <h1>Factorial Calculation</h1>
        </div>
    );
};

export default Factorial;
