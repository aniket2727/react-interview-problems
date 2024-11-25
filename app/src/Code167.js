// reverse the array


import React from 'react';
import {useState} from 'react';


const Code167=()=>{
    const a=[1,2,3,4,5];
    let i=0;
    let j=a.length-1;
    while(i<j){
        let temp='';
        temp=a[i];
        a[i]=a[j];
        a[j]=temp;
        i++;
        j--;  
    }
    console.log(a)
    return(
        <div>
            <h1>reverse the array</h1>
        </div>
    )
};



export default Code167;