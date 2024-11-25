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

   const data='aniket';
   const arr=data.split('');
   console.log(arr);
    let k=0;
    let m=arr.length-1;
    while(k<m){
        let temp='';
        temp=arr[k];
        arr[k]=arr[m];
        arr[m]=temp;
        k++;
        m--;  
    };
    console.log(arr)

    return(
        <div>
            <h1>reverse the array</h1>
        </div>
    )
};



export default Code167;