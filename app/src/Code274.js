
//progress bar


import React, { useEffect } from 'react'
import {useState}   from 'react';
const Progressbarft = () => {

  const[counter,setcounter]=useState(0);


  useEffect(()=>{

    let id;

    id=setTimeout(()=>{
             setcounter(counter+1);
    },1000);

    return ()=>{
      clearTimeout(id);
    }
         
  },[counter]);
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
         {
             Array.from({length:100}).map((_,index)=>{
              return(
              <div key={index} style={{border:'1px solid red',height:'10px',width:"10px",backgroundColor:counter<index?'':"green"}}>

              </div>
             )
             })
         }
    </div>
  )
}

export default Progressbarft;
