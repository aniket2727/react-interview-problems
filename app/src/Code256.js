import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';


const Code256 = () => {

    const [data, setdata] = useState(['aniket', 'vijay', "kadam"]);
    const [newdata, setnewdata] = useState([]);



    useEffect(()=>{
         const a=data.map((item,index)=>(
             {index:item}
         ))

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

export default Code256
