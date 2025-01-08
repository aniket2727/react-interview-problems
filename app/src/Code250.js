



import React from 'react'
import {useState,useEffect}  from 'react';


const Printdata=({folder})=>{
    const[folderData,setfolderData]=useState([]);
     useEffect(()=>{
        setfolderData(folder)
     },[folder]);
    return(
            folderData && folderData.map((item,index)=>(
                <div key={index}>
                     <h1>{item.name}</h1>
                     {
                        item.status===true && item.child.length>0 ?<Printdata folder={item.child} />:null
                     }
                </div>
            ))
    )
}

const Code250 = () => {
  
  const[data,setdata]=useState([
    {name:" c drive",child:[{name:'app',child:[],status:true}],status:true},
    {name:" d drive",child:[],status:true},
    {name:" f drive",child:[],status:true},
    {name:" g drive",child:[],status:true},
])  
  return (
    <div>
      <h1>folder structure</h1>
      {
        data && data.map((item,index)=>(
           typeof item==='object'?<Printdata folder={[item]}/>:item
        ))
      }

    </div>
  )
}

export default Code250
 