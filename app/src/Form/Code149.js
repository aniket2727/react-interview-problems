


import React, { useState } from 'react'

const Code149 = ({ff}) => {

    const[data,setdata]=useState('')
    const handlecc=()=>{
        ff(data);
    }
  return (
    <div>
      <input onChange={(e)=>setdata(e.target.value)}/>
      <button  onClick={handlecc}>add</button>
    </div>
  )
}

export default Code149
