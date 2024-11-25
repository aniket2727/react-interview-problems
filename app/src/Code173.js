

//counter 
import React from 'react';
import {useState} from 'react';

const Code173=()=>{
    
     const[count,setcount]=useState(0);
     
     const handleCount=(item)=>{
        if(item<1){
            if(count>0){
                 setcount(prev=>prev-1);
            }
        }else{
            setcount(prev=>prev+1);
        }
     };
    return(
        <div>
             <h1>{count}</h1>
             <button onClick={()=>handleCount(1)}>add</button>
             <button onClick={()=>handleCount(-1)}>minus</button>
        </div>
    )
};

export default Code173;