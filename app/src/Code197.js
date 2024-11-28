


// counter

import React from 'react';
import {useState} from 'react';

const Code197=()=>{

    const[counter,setcounter]=useState(0)

    const handleIncrement=()=>{
            setcounter(prev=>prev+1);
    }

    const handledecrement=()=>{
           setcounter(prev=>prev-1);
    }

    const handlereset=()=>{
            setcounter(0)
    }

    return(
        <div>
            <h1>counter</h1>
            <h1>{counter}</h1>
            <button onClick={()=>handleIncrement()}>Increment</button>
            <button onClick={()=>handledecrement()}>Decrement</button>
            <button onClick={()=>handlereset()}>reset</button>
        </div>
    )
};





export default Code197;