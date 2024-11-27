


//remove the duplicates from the array;
import React from 'react';

const Code187 = () => {

    const data = [1, 2, 3, 1, 4, 5, 6, 3];
    const a = {};
    const handleDuplicates = () => {
        for (let i = 0; i < data.length; i++) {
            if (a[data[i]]) {
                data.splice(i,1)
            } else {
                a[data[i]] = 1;
            }
        }
    };
    handleDuplicates();

    console.log("after removing",data);


    return (
        <div>
            <h1>Remove the duplicates from the array</h1>
        </div>
    )
};


export default Code187;
