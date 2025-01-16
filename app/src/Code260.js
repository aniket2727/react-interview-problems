


import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const Code260 = () => {
    const [data, setdata] = useState({ name: 'aniket', age: '10', roll: '101' });

    const selected = Object.entries(data).reduce((acc, [key, value]) => {
        acc[key] = value; // Copy each key-value pair to the accumulator
        return acc;
    }, {});

    console.log(selected);
    return (
        <div>

        </div>
    )
}

export default Code260
