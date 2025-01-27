



import React from 'react'
import { useState } from 'react';
const Code276 = () => {

    const [data, setdata] = useState([{ name: "aniket" }, { name: "dhiraj" }, { name: "suraj" }, { name: "adesh" }]);
    const [editpopUp,seteditpopup]=useState(false);
    const [inputdata,setinputdata]=useState('');
    const [inedforedit,setindexforedit]=useState('')



    const handleDelete = (value) => {
       const deleted=data.filter((item,index)=>index!==value);
       setdata(deleted);
    }

    const handleEdit = (value) => {
           seteditpopup(true);
           setindexforedit(value);
    }


    const handlechange=()=>{
         setdata((prev)=>prev.map((item,index)=>{
                  return index===inedforedit? {...item,name:inputdata}:item;
         }))
         seteditpopup(false)
         setinputdata('');
    }


    if(editpopUp){
        return(
            <div>
                <input onChange={(e)=>setinputdata(e.target.value)} />
                <button onClick={()=>handlechange()}>edit</button>
            </div>
        )
    }
    return (
        <div>
            {
                data.map((item, index) => (
                    <div style={{ margin: '2px', border: '1px solid black', display: "flex", alignItems: 'center', justifyContent: "center" }} key={index}>
                        <h1>{item.name}</h1>
                        <button onClick={() => handleDelete(index)} style={{ margin: '2px', cursor: 'pointer' }}>delete</button>
                        <button onClick={() => handleEdit(index)} style={{ margin: '2px', cursor: 'pointer' }}>edit</button>
                    </div>
                ))
            }

        </div>
    )
}

export default Code276



