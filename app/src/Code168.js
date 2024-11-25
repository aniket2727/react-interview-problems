


// count each value
import React from 'react';
import {useState} from 'react';


const Code168=()=>{
    const a="aniketani";
    const data=[];
    for(let i in a){
        data.push(a[i])
    }
    console.log(data)
    const count={};
    for(let i=0;i<data.length;i++){
        if(count[data[i]]){
            count[data[i]]+=1
        }
        else{
            count[data[i]]=1
        }
    };
    console.log(count);
    return(
        <div>
            <h1>count</h1>
        </div>
    )
};


export default Code168;
