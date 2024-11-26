

//tabs component

import { useState } from "react";


const Code177=()=>{
    const[data,setdata]=useState({1:"aniket",2:"vijay",3:'kadam'})
    console.log(data);
    // for(let i in data){
    //     console.log(i,data[i])
    // }
    
    return(
        <div>
            <h1>tabs Component</h1>
            {
                data.map((item,index)=>(
                    <div key={index}>
                        <h1>{item.key}</h1>
                    </div>    
                ))
            }
        </div>
    )
};


export default Code177;