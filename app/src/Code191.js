/* eslint-disable no-unused-expressions */
//object operations
import React from 'react';
import {useState} from 'react';

const Code191=()=>{

    const[data,setdata]=useState([{name:'aniket'},{name:'aniket1'},{name:'aniket2'}]);


    const handleAdd=(item)=>{
             setdata(prev=>[...prev,{name:item}]);
    };


    const handleDelete=(item)=>{
           const result=data.filter((a)=>a.name!==item);
           setdata(result);
    };


    const handleUpdate=(item,newUpdate)=>{
        const updatedData = data.map((prev) =>
            prev.name === item ? { ...prev, name: newUpdate } : prev
        );
        setdata(updatedData);

    }


    console.log(data);
    return(
        <div>
            <h1>object operations</h1>
            <button onClick={()=>handleAdd('aniket4')}>add</button>
            <button onClick={()=>handleDelete('aniket2')}>delete</button>
            <button onClick={()=>handleUpdate('aniket3','ani')}>update</button>
        </div>
    )
};

export default Code191;