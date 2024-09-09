

// code is written by aniket kadam

import { useState } from "react";



const Child=({name,age,handlechange})=>{
    const e="king kong"

    const eventforclick=()=>{
        handlechange(e)
    }
    return(
        <div>
           <h1>this is child funtiion</h1>
           <h1>{name} {age}</h1>
           <button onClick={eventforclick}>change</button>
        </div>
    )
};



const Parent=()=>{
    const age=10
    const [data,setdata]=useState('')

    const handlechange=(e)=>{
          setdata(e)
    }
    return(
        <div>
           <Child name={'aniket'} age={age} handlechange={handlechange}/>
           <h1>{data}</h1>
        </div>
    )
}




export default Parent;