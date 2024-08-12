

// code is written by aniket kadam

import React from "react";


const Simpleproblems=()=>{

    const data=[1,2,3,4,5];
    // for(let i  of data){
    //     console.log(i)
    // }

    // const obj={
    //     name:"aniket",
    //     jobrole:"full stack developer"
    // }

    // for(let i in obj){
    //     console.log(i,obj[i])
    // }
     
    // slice is used for selection of data
    let result=data.slice(1,3);
    console.log(result);
    console.log("the original data ",data)
    
    // splice is used for removing the elements from the data 
    let result2=data.splice(1,2);
    console.log("the result 2",result2);
    console.log("original data",data);
    return(
        <div>
           <h1>this is the problems</h1>
        </div>
    )
};



export default Simpleproblems;