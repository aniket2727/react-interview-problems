//   code   
import React, { useEffect } from 'react';
import {useState} from 'react';


const Code210=()=>{
    useEffect(()=>{
        for(var i=0;i<3;i++){
            setTimeout(()=>{
                 console.log(i)
            },1000);
        }    
    },[]);
    return(
        <div>
            <h1>loopps</h1>
        </div>
    )
};



export default Code210;




