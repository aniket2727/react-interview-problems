/* eslint-disable react-hooks/exhaustive-deps */
// code is written by aniket kadam
// react usecallback hooks

import React, { useCallback, useState } from "react";

const Usecallbackhook=()=>{
    const [count,setcount]=useState(0);

    const increment=useCallback(()=>{
        setcount((prevcount)=>prevcount+1)
    })

    const decrement=useCallback(()=>{
        setcount((prevcount)=>prevcount-1)
    })
    return(
       <div>
          <h1>use call back hooks</h1>
          <h1>{count}</h1>
          <button onClick={increment}>increment</button>
          <button onClick={decrement}>decrement</button>
       </div>
    )
};


export default Usecallbackhook;