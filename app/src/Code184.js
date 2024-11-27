

// annagram code

import React from 'react';
import { usestate } from 'react';


const Code184 = () => {

    const a = "aniket";
    const b = "ketani";

    const sortedA = a.split('').sort().join('');
    const sortedB = b.split('').sort().join('');

    const handleAnagram = () => {
        if (sortedA===sortedB) {
            console.log("anagram ");
            return;
        }
    }

    handleAnagram();
    return (
        <div>
             <h1>anagram</h1>
        </div>
    )
};



export default Code184;




