

//   code is written by amilet kadam
// fetching data

import React from "react"
//import { useState } from "react"

const FetchData=({data})=>{
  //  const[data,setData]=useState(null);

    fetch(data).then(data=>data.json()).then(data=>
        console.log("the result is ",data)
    )
}



const MainComponenet=()=>{
    const url="https://jsonplaceholder.typicode.com/todos/1"
    return(
        <div>
          <h1>fetching data</h1>
          <FetchData data={url}/> 
        </div>
    )
}


export default MainComponenet;

