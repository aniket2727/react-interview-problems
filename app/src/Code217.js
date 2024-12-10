


import React from 'react';
import {useState} from 'react';

const Code217=()=>{

    function a(x){
        return function b(y){
            return function c(z){
                return x+y+z
            }
        }
    }
    const result=a(10)(20)(30);
    console.log(result);
    return(
        <div>
            <h1>print data</h1>
        </div>
    )
};




export default Code217;

