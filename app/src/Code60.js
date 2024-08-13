

// code is written by aniket kadam
//counter in react js


 // This will log "Counter value: 1" immediately when the component renders.
 //return <button onClick={handleCounter(1)}>Increment</button>;

import React from 'react'
import {useState} from 'react'
const Counterinreact=()=>{

    const[count,setcount]=useState(0)
    const handlecounter=(item)=>{
        if(item>0){
            setcount(count+1)
        }
        else{
            setcount(count-1)
        }

    }
    return(
        <div>

           <h1>counter in  react js</h1>
             <h1 style={{color:'red'}}>{count}</h1>
           <button onClick={()=>handlecounter(1)}>add</button>
           <button onClick={()=>handlecounter(-1)}>remove</button>
        </div>
    )
};



export default Counterinreact;