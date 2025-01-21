

import React from 'react';
import {useState}  from 'react';




const HandleDisplayfolder=({folder})=>{
    console.log("this is folder",folder)
}

const Code268 = () => {

    const[data,setdata]=useState([
       {name:'a',child:[{name:'bb'}]},
       {name:'b',child:[]},
       {name:'c',child:[]},
       'textfile.txt'
    ]);
  return (

    <div>
        <h1>folder struture</h1>
        {
            data.map((item,index)=>{
               return typeof item==='object'?<div key={index}><HandleDisplayfolder folder={item}/></div>:<div key={index}>{item}</div>
            })
        }
      
    </div>
  )
}



export default Code268
