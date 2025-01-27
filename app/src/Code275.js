
//   star pattenr
import React from 'react'
import {useState}  from 'react';
import { useRef } from 'react';


const Code275 = () => {

    const stars=new Array(5).fill('');
    console.log(stars);

    const[ss,setss]=useState(stars);
    const[c,setc]=useState(-1);
    const previoususerf=useRef();


    const handleclick=(value)=>{
       setc(value);    
       previoususerf.current=value;
    }  

    const handleonmouseEnter=(value)=>{
            setc(value)
    }

    const handleonmouseleave=()=>{
        setc(previoususerf.current)
    }
  return (
    <div   style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        {
            ss.map((item,index)=>(
                <div key={index} style={{margin:'10px'}}>
                    <button style={{backgroundColor:index<=c?'yellow':''}} onMouseEnter={()=>handleonmouseEnter(index)} onMouseLeave={()=>handleonmouseleave()}   onClick={()=>handleclick(index)}>$</button>
                </div>    
            ))
        }
      
    </div>
  )
}

export default Code275
