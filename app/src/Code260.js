


import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const Code260 = () => {
    // const [data, setdata] = useState({ name: 'aniket', age: '10', roll: '101' });

    // const selected = Object.entries(data).reduce((acc, [key, value]) => {
    //     acc[key] = value; 
    //     return acc;
    // }, {});


    const a=[1,2,3,4,5];
    const obj=Object.fromEntries(a.map((index,value)=>[index,value]))
    console.log(obj);


    const b=["apple","mango","cake"];
    const obj1=Object.fromEntries(b.map((index,value)=>[value,index]))
    console.log(obj);
    console.log(obj1);

   // console.log(selected);
    return (
        <div>

        </div>
    )
}

export default Code260
