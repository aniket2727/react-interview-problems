
// toggle buttons
import React from 'react';
import { useState } from 'react';


const Code176=()=>{
    const[state,setstate]=useState(false);

    const handleToggle=()=>{
         setstate(prev=>!prev)
    }

    return(
        <div>
            <h1>toggle button</h1>
            <button onClick={handleToggle}>{state?'off':'on'}</button>
        </div>
    )
};


export default Code176;