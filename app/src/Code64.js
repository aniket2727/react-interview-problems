

// code is written by aniket kadam
// find the min and max in array

import React from "react";
import { useState } from "react";


const Findminmax=()=>{

    const [data,setdata]=useState([1,22,2,4455,32,33]);

    function findminmax(){
        let max=0;
        let min=data[0];

       for(let i of data){
         if(i>max){
            max=i;
         }
         if(i<min){
            min=i;
         }
       }

       console.log(`the value of max is ${max} and the min is ${min}`)
    }

    findminmax();
    return(
        <div>
           <h1>finding the min and max in arrray</h1>
        </div>
    )
}



export default  Findminmax;