
//   otp genaratores
import React, { useRef }  from "react";
import { useState } from "react";



const OptGenerattors=()=>{
    const  firstdata=new Array(6).fill("");
    const[inputfill,setinputfill]=useState(new Array(6).fill(""));
    const inputrefs=useRef([]);
    console.log(inputfill);
    console.log(inputrefs);


    const handlechange=(e,index)=>{
            //  console.log(e);
            //console.log(index);
           const value=e.target.value;
           const updated=[...inputfill];
           updated[index]=value;
           setinputfill(updated);

           if(value && index<inputfill.length-1){
                   inputrefs.current[index+1].focus();
                   console.log("a",inputrefs.current[index + 1])

           }
    }


    const handlebackspace=(e,index)=>{
            
            console.log(e.key)

             if(e.key==='Backspace' && inputfill[index]==="" && index>0){
                inputrefs.current[index-1].focus();
             }
    }  

    return(
        <div>
             <h1>opt gg</h1>
             {
                inputfill && inputfill.map((value,index)=>{
                    return(
                        <div key={index}>
                            <input
                            key={index}
                             maxLength={1} 
                             ref={(el)=>(inputrefs.current[index]=el)}
                             autoFocus={index===0}
                             onChange={(e)=>handlechange(e,index)}
                             onKeyDown={(e)=>handlebackspace(e,index)}
                            />
                        </div>    
                    )
                })
             }
        </div>
    )
};



export default OptGenerattors


