


import React from 'react';
import {useState}   from 'react';
const CodeDrag263 = () => {
    const[data,setdata]=useState(["aniket","sanket","hitesh","om","suraj"])
    const[dragged,setdragged]=useState(null)

    const handleDrag=(index)=>{
           setdragged(index); 
    }


    const handledrop=(index)=>{
        const d=[...data];
        const [selected]=d.splice(dragged,1);
        d.splice(index,0,selected);
        setdata(d);
        setdragged(null);
    }


    const handledropover=(e)=>{
        e.preventDefault();
    }
  return (
    <div>
      <h1>Drag and drop</h1>
      {
          data && data.map((item,index)=>{
            return<div     draggable  onDragStart={()=>handleDrag(index)}  onDrop={()=>handledrop(index)} onDragOver={handledropover} key={index} style={{border:'1px solid black',backgroundColor:"paleturquoise",margin:'5px'}}>
                <p style={{color:'black',fontSize:'bold'}}>{item}</p>
            </div>
          })
      }
    </div>
  )
}

export default CodeDrag263
