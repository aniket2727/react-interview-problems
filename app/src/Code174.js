

//to do list

import { useState } from "react";

const Code174=()=>{

    const[data,setdata]=useState([]);
    const[item,setitem]=useState('');

    const handleInput=(value)=>{
           setdata(prev=>[...prev,value]);
           console.log(data)
    };


    const handleDelete=(value)=>{
            const selected=data.filter((item)=>item!==value);
            setdata(selected);
            console.log(data);
    }

   
    return(
        <div>
              <h1>to do list </h1>
              <h1>add element</h1>

              <input value={item} name="item" onChange={(e)=>setitem(e.target.value)}/>
              <button onClick={()=>handleInput(item)}>add</button> 

              {
                data.map((item,index)=>(
                    <div key={index}>
                        <h1>{item}</h1>
                        <button onClick={()=>handleDelete(item)}>delete</button>
                        <button>edit</button>
                    </div>    
                ))
              }

        </div>
    )
}


export default Code174;