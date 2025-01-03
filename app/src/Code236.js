



import React from 'react'
import {useState} from 'react'

const Child=({handlechange})=>{
    const[data,setdata]=useState('')

    const hh=()=>{
        handlechange(data);
    }
    return(
        <div>
             <input onChange={(e)=>setdata(e.target.value)} />
             <button onClick={()=>hh()}>add data</button>
        </div>
    )
}



const Parentdata = () => {

  const[data,setdata]=useState('');
  
  const handleChange=(item)=>{
       setdata(item)
  }
  
  return (
    <div>
      <Child handlechange={handleChange}/>
      <h1>{data}</h1>
    </div>
  )
}

export default Parentdata;
