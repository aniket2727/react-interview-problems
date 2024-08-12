

// code is written by aniket kadam

import React from "react";


const Simpleproblems=()=>{

    const data=[1,2,3,4,5];
    for(let i  of data){
        console.log(i)
    }

    const obj={
        name:"aniket",
        jobrole:"full stack developer"
    }

    for(let i in obj){
        console.log(i,obj[i])
    }
    return(
        <div>
           <h1>this is the problems</h1>
        </div>
    )
};



export default Simpleproblems;