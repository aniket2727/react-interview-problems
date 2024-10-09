

// code is written by aniket kadam

import { useState } from "react";


const Counterproblem=()=>{
    const[count,setcount]=useState(0);
    const handlecounter=(item)=>{
       if(item>0){
           setcount(prev=>prev+1);
       }
       else{

        setcount(prev=>prev-1);
       }
    }
    return(
        <div>
            <h1>counter problems</h1>
            {
                count && 
                <div> 
                    <h1>{count}</h1>
                </div>
            }
            <button onClick={()=>handlecounter(1)}>Add</button>
            <button onClick={()=>handlecounter(-1)}>remove</button>

        </div>
    )
};



export default Counterproblem;