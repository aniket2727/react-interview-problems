
// code is written by aniket kadam
// hoc for counter
import React from 'react';
import { useState } from 'react';

const woc=(Woc2)=>{
    return (props)=>{
        const[count,setcount]=useState(0);

        const handleinc=()=>{
            setcount(count+1);
        };

        return <Woc2 count={count} handleinc={handleinc} {...props}/>

    }
}


const Woc2=({count,handleinc})=>{
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={handleinc}>increment</button>
        </div>
    )

}


const Woc3=woc(Woc2);

const Code159 = () => {
  return (
    <div>
      <Woc3/>
    </div>
  )
}

export default Code159
