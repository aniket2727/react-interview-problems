

// code is written by aniket kadam
// input field password

import { useState } from "react";


const Passwordinput=()=>{
    const [flag,setFlag]=useState(true);
    const handleflag=()=>{
          setFlag(!flag);
    }
    return(
        <div>
           <h1 style={{color:'red'}}> Password in input  field</h1>
           <input placeholder="input" type={flag?'text':'password'}/>
           <button onClick={()=>handleflag()}>{flag?'hide':'show'}</button>
        </div>
    )
}


export default Passwordinput;