

// union of array

import React from 'react';

const Code186=()=>{

    const a=[1,2,3,4,5,6,7];
    const b=[2,4,7,8,11];
    const data=[];
    for(let i=0;i<a.length;i++){
          if(!data.includes(a[i])){
            data.push(a[i]);
          }
    }

    console.log(data);

    for(let i=0;i<b.length;i++){
        if(!data.includes(b[i])){
          data.push(b[i]);
        }
    };

    console.log("result is ",data);
    return(
        <div>
               <h1>unions of array</h1>
        </div>
    )
};


export  default Code186;

