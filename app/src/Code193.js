


import React from 'react';
import {useState} from 'react';


const Code193=()=>{
     
    const[data,setdata]=useState([
        {name:'aniket',age:'100'},
        {name:'aniket',age:'100'},
        {name:'aniket',age:'100'},
        {name:'aniket',age:'100'}]);

        const responce=data.map((prev)=>{
            return {...prev,name:'kadam'}
        });

        console.log("responce is ",responce)
        setdata(responce);
        console.log("original one ",data)
    return(
        <div>aaa</div>
    )
};



export default Code193;