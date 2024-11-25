import React, { useRef, useEffect } from 'react';

const Code166 = () => {
    const data = [1, 22, 3, 4, 20, 88, 5];
    const smallest = useRef(Infinity);
    const secondSmallest = useRef(Infinity);
    const largest = useRef(-Infinity);
    const secondLargest = useRef(-Infinity);

    useEffect(() => {
        for (let i = 0; i < data.length; i++) {
            const num = data[i];

            // Update smallest and second smallest
            if (num < smallest.current) {
                secondSmallest.current = smallest.current;
                smallest.current = num;
            } else if (num < secondSmallest.current && num !== smallest.current) {
                secondSmallest.current = num;
            }

            // Update largest and second largest
            if (num > largest.current) {
                secondLargest.current = largest.current;
                largest.current = num;
            } else if (num > secondLargest.current && num !== largest.current) {
                secondLargest.current = num;
            }
        }

        console.log("Smallest:", smallest.current);
        console.log("Second Smallest:", secondSmallest.current);
        console.log("Largest:", largest.current);
        console.log("Second Largest:", secondLargest.current);
    }, []);

    return (
        <div>
            <h1>Smallest: {smallest.current}</h1>
            <h1>Second Smallest: {secondSmallest.current}</h1>
            <h1>Largest: {largest.current}</h1>
            <h1>Second Largest: {secondLargest.current}</h1>
        </div>
    );
};

export default Code166;
