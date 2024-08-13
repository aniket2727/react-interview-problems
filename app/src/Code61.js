

// code is written by aniket kadam
// avoid useEffect for a first rendering

import React, { useState } from 'react'
import { useEffect } from 'react';

const Avoiduseeffect=()=>{
    const [count,setcount]=useState(0);

    return(
        <div>
           <h1>avoid useeffect</h1>
            <h1 style={{color:'red'}}>{count}</h1>
           <button style={{backgroundColor:'green'}} onClick={()=>setcount(count+1)}>Add</button>
        </div>
    )
};



export default Avoiduseeffect;


