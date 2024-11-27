

//palindrom
import React from 'react';
import { useState } from 'react';



const Code183=()=>{


    const handlepalidrom=()=>{
          const data="anina";
          let i=0;
          let j=data.length-1;
          let flag=true;
          while(i<j){
            if(!data[i]===data[j]){
                flag=false
                break;
            }
            i++;j--;
          }

          if(!flag){
            console.log("not plaindom");
          }
          else{
            console.log("palindrom");
          }
    }

    handlepalidrom();
    return(
        <div>
                
        </div>
    )
};


export default Code183;