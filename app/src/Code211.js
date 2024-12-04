//code 


import React, { useEffect } from 'react'
import {useState} from 'react';


var Code211=()=>{
    const data="aniket"
    useEffect(()=>{
           console.log("the data is "+13+data);
           console.log("data is "+data+13+12);
           console.log("data is "+13+12+data);
           console.log("data is "+13+12);
    },[]);
    return(
        <div>
              <h1>expressions</h1> 
        </div>
    )
};


export default Code211;




