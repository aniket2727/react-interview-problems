


// code is writtten by aniket kadam
// rest and spread operator

import React from 'react'
import { useState } from 'react'


const Code1=()=>{

    // eslint-disable-next-line no-unused-vars
    const [data,setdata]=useState([1,2,3,4,5])

    // rest oprators
    function handlerest(...a){
        console.log(a)
        

        // spread operators
        const b=[...data]
        console.log("the value of b is",b)
    }

    handlerest(10,20,10);
   
    return(
        <div>
          <h1>rest and spred operators</h1>
        </div>
    )
}


export default Code1;