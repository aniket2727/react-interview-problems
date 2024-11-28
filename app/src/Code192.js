

// deep copy
import React from 'react';
import {useState} from 'react';


const Code192=()=>{
    const [data,setdata]=useState([{name:'aniket'},{age:'10'}]);
    console.log(data)

    const newdata=JSON.parse(JSON.stringify(data));
    console.log(newdata);
    const updated= newdata.map((item)=>{
       if(item.name){
           return  {...item,name:'god'}
       }
    })
    console.log(newdata)
    console.log(updated);

    return(
        <div>
             <h1>json stringyfy</h1>
        </div>
    )
};



export default Code192;