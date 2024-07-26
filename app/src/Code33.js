// code is written by Aniket Kadam
// find the pairs of given sum

import React, { useEffect } from 'react';

const FindSumOfGivenArray = () => {

    const handle = () => {
        const a = [1, 2, 3, 4, 1];
        const sum = 5;
        const pairs = [];
        const seen = new Set();

        a.forEach(item => {
            const complement = sum - item;
            if (seen.has(complement)) {
                pairs.push([item, complement]);
            }
            seen.add(item);
        });

        console.log('Pairs with given sum:', pairs);
        pairs.forEach(pair => {
            console.log(`${pair[0]} + ${pair[1]} = ${sum}`);
        });
    };

    useEffect(() => {
        handle();
    }, []);

    return (
        <div>
            <h1>Find the pairs with a given sum</h1>
        </div>
    );
};

export default FindSumOfGivenArray;
