

// code is written by aniket kadam

import { useState } from "react";


const  Experiments=()=>{
    const [data]=useState({'name':'aniket'},{
        'name':'vijay'
    })
    return(
        <div>
            <h1>this is experiment videos</h1>
            {
               Object.entries(data).map(([key,value],index)=>(
                   <div key={index}>
                      <h1>{value}</h1>
                   </div>
               ))
            }
        </div>
    )
}



export default Experiments;