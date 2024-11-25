

// sum of all numbers

import React from 'react';
import { useState } from 'react';



const Code169=()=>{

    const data=[1,2,3,4,5,6];
    const result=data.reduce((acc,i)=>{
         return acc+=i
    },0);
    console.log(result);
    return(
        <div>
            <h1>sum of all numbers</h1>
        </div>
    )
};

export default Code169;