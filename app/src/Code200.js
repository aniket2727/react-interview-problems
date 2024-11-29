
import React from 'react';
import {useState} from 'react';


const Code200=()=>{
    const[data,setdata]=useState([{name:'aniket',checked:false},
        {name:'sanket',checked:false},
        {name:'vijay',checked:false}
    ]);

    const handleClick=(value)=>{
        
        const result=data.map((item)=>{
           return item.name===value ? {...item,checked:!item.checked}:item;
        });
        setdata(result);
        console.log(data);

    }
    return(
        <div>
             <h1>problem 2</h1>
             {
                data.map((item,index)=>(
                    <div key={index}>
                          {
                            item.checked? <h1>checked</h1>:<h1>not checked</h1>
                          }
                         <button onClick={()=>handleClick(item.name)}>{item.name}</button>
                    </div>    
                ))
             }
        </div>
    )
};


export default Code200;



