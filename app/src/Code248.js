

import React, { useEffect } from 'react';
import {useState} from 'react';

const Code248 = () => {

    const[data,setdata]=useState([
        {name:"aniket",status:false},
        {name:"vijay",status:false}
    ]);

     useEffect(()=>{
        setdata((prev)=>{
            return prev.map((item)=>item.name==="aniket"?{...item,name:'kadam'}:item);
         });

         const changeddata=data.map((item)=>item.name==='vijay' ?{...item,status:!item.status}:item);
         setdata(changeddata);
     },[]);


    console.log(data);
  return (
    <div>
      
    </div>
  )
}

export default Code248
