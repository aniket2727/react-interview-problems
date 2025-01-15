
//use of reducers

import React, { useEffect } from 'react'
import {useState}  from 'react'


const Code257 = () => {

    const[data,setdata]=useState(['aniket','vijay','kadam']);
    const[newdata,setnewdata]=useState([]);
    useEffect(()=>{
           const a=data.reduce((acc,item,index)=>{
                acc[index]=item;
                return  acc; 
           },{})

           setnewdata(a);
    },[data]);


    useEffect(()=>{
           console.log(newdata)
    },[newdata]);
  return (
    <div>
      
    </div>
  )
}

export default Code257
