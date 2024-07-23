

// code is written by aniket kadam
// simple reduce funtions is used to reduce array into the single values 

import React from 'react'

const Reducemethod=()=>{
     
    // firts methods
    const a=[1,2,3,4,5]
    const result=a.reduce((accumulatevalue,currentvalue)=>{
        return accumulatevalue+=currentvalue
    },0)
    console.log(result);

    // seconds methods
    const arr=["apple","mango","apple","mango"];
    
    const result1=arr.reduce((a,b)=>{
        if(a[b]){
            a[b]+=1
        }
        else{
            a[b]=1
        }
        
        return a;
    },{})

    console.log(result1);
    return(
        <h1> reduce methods</h1>
    )
}


export default Reducemethod;