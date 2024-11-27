
// missing numbers
import React from 'react';


const Code188=()=>{
    const findMissingNumber = (arr, n) => {
        const expectedSum = (n * (n + 1)) / 2; // Total sum from 1 to n
        const actualSum = arr.reduce((sum, num) => sum + num, 0); // Sum of array elements
        return expectedSum - actualSum; // Difference is the missing number
    };
    
    const arr = [1, 2, 4, 5];
    const n = 5; // Maximum number in the sequence
    console.log("Missing number:", findMissingNumber(arr, n));
    
    return(
        <div>
             <h1>find the missing numbers</h1>
        </div>
    )
};


export default Code188;



