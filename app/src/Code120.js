

// code is written by aniket kadam
//timer

import { useState } from "react";



const Timercode=()=>{
    const[inputdata,setinputdata]=useState('');
    const[minute,setminute]=useState('');
    const[second,setsecond]=useState('');
    const[totaltime,settotaltime]=useState('')

    let result=inputdata*60;
    settotaltime(result);

    let displayminute=Math.max(Math.floor(totaltime/60),0);
    setminute(displayminute);
    let displaysecond=Math.max(Math.floor(totaltime%60),0);
    setsecond(displaysecond);

   


    const handlestart=()=>{
        if(totaltime>0){
            setTimeout(() => {
                setinputdata(prev=>prev-1);
            }, 1000);
        }
    
    
    }
    


    return(
        <div>
            <h1>timer code </h1>
            <input  value={minute} type="number" onChange={(e)=>setinputdata(e.target.value)}/>
            <button onClick={()=>handlestart()}>start</button>
        </div>
    )
};



export default Timercode;

