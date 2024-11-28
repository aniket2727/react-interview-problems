// arrange zeros at the end 
import React from 'react';
import {useState} from 'react';



const Code196=()=>{
   
    const data=[1,2,0,2,0,0,2,2];
    let i=0;
    let j=data.length-1;
    const handleZeros=()=>{
         while(i<j){
            if(data[i]===0){
                if(data[j]!==0){
                    let temp='';
                    temp=data[i];
                    data[i]=data[j];
                    data[j]=temp;
                    i++;
                    j--;
                }
                else{
                    j--;
                }
            }else{
                i++;
            }
         }
    };


    handleZeros();
    console.log(data);
    
    return(
        <div>
              <h1>arrange zeros at the end</h1>
        </div>
    )
};


export default Code196;

