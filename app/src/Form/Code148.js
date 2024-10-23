


import React from 'react'
import Code149 from './Code149'



const Code148 = () => {

    const printdata=(item)=>{
           console.log("print items",item)
    }
  return (
    <div>
        <h1>child to parent</h1>
        <Code149 ff={printdata}/>
    </div>
  )
}

export default Code148
