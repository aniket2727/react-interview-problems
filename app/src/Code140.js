

// counter increment decrement and reset


// {/* <button onClick={()=>handleDec}>decrement</button> */}  in these case pass the refernce


//state refers to an object that holds dynamic values for a component.

import React, { useState } from 'react'

const CounterP=()=>{
    const[data,setdata]=useState(0);
    console.log(useState(0))

    const handleInc=()=>{
          setdata(data+1);
          console.log("handle inc clicked")
    }


    const handleDec=()=>{
            if(data>0){
                setdata(data-1)
            }
    }

    const handlereset=()=>{
             setdata(0);
    }
    return(
        <div>

            <h1>{data}</h1>
            <h1 style={{backgroundColor:'red',cursor:'pointer'}}>this is counter problem</h1>
            {
                data>0? 
                <div>
                     <button onClick={handleDec}>decrement</button>
                </div>:null
            }
            <div>
                <button onClick={handleInc}>increment</button>
            </div>
            <div>
                <button onClick={handlereset}>reset</button>
            </div>
        </div>
    )
};


export default CounterP;