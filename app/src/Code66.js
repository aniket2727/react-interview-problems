// code is written by aniket kadam
// find the missing number

import { useState } from "react";

const Code66 = () => {
    const [data, setData] = useState([1, 2, 3, 4, 5, 6, 8, 9, 10]);

    const sum = data.reduce((arr, num) => {
        return arr += num;
    }, 0);

    let max = 10 * (10 + 1) / 2; // Corrected formula
    const missingNumber = max - sum;

    console.log("final result is ", missingNumber);
    console.log(sum);

    return (
        <div>
            <h1>Find the missing number</h1>
            <p>The missing number is: {missingNumber}</p>
        </div>
    );
};

export default Code66;
