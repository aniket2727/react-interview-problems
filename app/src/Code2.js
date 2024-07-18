


// code is written by aniket kadam
//useref hooks

import React, { useEffect, useState } from 'react'
import { useRef } from 'react';

const Code2=()=>{

    // eslint-disable-next-line no-unused-vars
    const[count,setcount]=useState(1);
 
    const ref=useRef();
    const prev=useRef();

    useEffect(()=>{
       prev.current=count;
    },[count]);

    const handlefocus=()=>{
        ref.current.focus();
    }

    const handleincrease=()=>{
        setcount(count+1);
    }
    return(
        <div>
          <h1>use state</h1>
          <h1>{count}</h1>
          <h1>{prev.current}</h1>
          <input placeholder='text' ref={ref}/>
          <button onClick={handlefocus}>focus</button>
          <button onClick={handleincrease}>increase</button>
        </div>
    )
}


export default Code2;