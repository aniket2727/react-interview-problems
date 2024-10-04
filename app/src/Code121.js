


// code is written by aniket kadam

import { useState } from "react";



const Printdatadisplay=()=>{

    const[flag,setflag]=useState(false);

    const handledisplay=()=>{
         setflag(!flag);
    }

    if(flag){
       return(
        <div > 
           <h1>booked</h1>
           <button onClick={()=>handledisplay()}>close</button>
        </div>
       )
    }
    return(
        <div>
           <h1>print blcoks</h1>
           <button  onClick={()=>handledisplay()}>display</button>
        </div>
    )
};



export default Printdatadisplay;