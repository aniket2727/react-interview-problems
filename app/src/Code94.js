

// code is written by aniket kadam
// foreach loop and its break case;

import React from 'react'



const Foreachcase = () => {
    const a = [1, 1, 2, 1];

    for (let item of a) {
        try {
            console.log(item);
            if (item === 2) {
                throw Error('something is wrong');
            }
        } catch (error) {
            console.log("the error is ", error);
            break; // Stop the loop execution
        }
    }

    return <div></div>;
};

export default Foreachcase;
