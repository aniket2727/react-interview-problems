


//    show and hide problems


import React, { useState } from 'react'


const Code143=()=>{

    const[flag,setflag]=useState(false);

    const handleflag=()=>{
        setflag(!flag);  
    }
    return(
        <div>
            
            <div>
            <h1 style={{textDecoration:"line-through"}}>show and hide</h1>
              {
                flag  ? <div>show and hide</div>:null
              }
            </div>

            <button onClick={handleflag}>show hide</button>
        </div>
    )
};



export default Code143;

