
//  code is written by aniket kadam
//custome hooks



import React from 'react';
import  {useState} from 'react'


const useCounter=(initialstate=0)=>{
    const[count,setcount]=useState(initialstate);

    const handlecount=()=>{
        setcount(count+1);
    }

    return {count,handlecount};
};


const Code158 = () => {

    const{count,handlecount}=useCounter(0);
  return (
    <div>
    
       <button onClick={handlecount}>increment</button>
       <h1>{count}</h1>
    </div>
  )
}

export default Code158
